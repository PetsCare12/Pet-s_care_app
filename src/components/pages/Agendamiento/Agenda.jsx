import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUsuario_mascotas } from '../../../helpers/API Consumer/test';
import { getAllClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import { getMascotaEspecifica } from '../../../helpers/API Consumer/useMascotasConsumer';
import { pets_images } from '../../../helpers/Pets_care_images';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import moment from "moment";
import './style.css';
import { getVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';

export const Agenda = () => {

    const [active, setActive] = useState();
    const [clinica, setClinica] = useState([]);
    const [clinicaSeleccion, setClinicaSeleccion] = useState("");
    const [veterinarios, setVeterinarios] = useState([]);

    const [mascotas, setMascotas] = useState([]);
    const [miMascota, setMiMascota] = useState([]);
    const [hour, setHour] = useState("");
    const { id } = JSON.parse(localStorage.getItem("usuario"));

    const day = new Date().getDay();

    const { id:clinicaEsp } = useParams();

    useEffect( () => {

        getAllClinicas().then( info => {
            setClinica(info.data);

        });

        getUsuario_mascotas( id ).then( info => {
            setMascotas( info.mascotas );
        })

        if ( !!clinicaEsp ) {
            setClinicaSeleccion( clinicaEsp )
            getVeterinarios( clinicaEsp ).then( info => setVeterinarios( info ));
    }
        else {
            setClinicaSeleccion( "" );
        }

    },[])

    const handleMiMascota = ( e ) => {

        e.target.value === "none" 

        ? 
            setMiMascota([])
        :
        
        getMascotaEspecifica( id , e.target.value )
            .then( info => {
                setMiMascota( [info.data] );

            })

    }

    const handleClinicaSelect = ( e ) => {

        setClinicaSeleccion( e.target.value );
        
        getVeterinarios( e.target.value ).then( info => setVeterinarios( info ));
    }
    
    const schedules = [
        { hora : "1:45"},
        { hora : "2:45"},
        { hora : "3:45"},
        { hora : "4:45"},
        { hora : "5:45"},
        { hora : "6:45"},
        { hora : "7:45"},
        { hora : "8:45"},
        { hora : "9:45"},
        { hora : "10:45"},
        { hora : "11:45"},
        { hora : "12:45"},
    ]

    return (
        <>
        <Header />
        <div className='agenda__container animate__animated animate__fadeIn'>
            <div className='card'>
                <h1 className="title">Agenda</h1>
                    <div className="selectors">

                        <select id='select' name='mascota' onChange={handleMiMascota}>
                            {
                                mascotas.length !== 0 ?
                                    <>
                                        <option value="none" >Selecciona una mascota</option>
                                        {
                                            mascotas.map( mascota => (
                                                <option key={mascota.codigo} value={mascota.codigo} >{mascota.nombre} - {mascota.raza}</option>
                                            ))
                                        }
                                    </>
                                :
                                <option value="" > Aún no hay mascotas registradas </option>
                            }
                        </select>

                        <select id='select' name='clinica' value={clinicaSeleccion} onChange={handleClinicaSelect}>
                            <option id='selected' value="none">Selecciona una clínica</option>
                            {
                                clinica.map( cli => (
                                    cli.estadoCli === 1 &&
                                    <option 
                                        key={cli.nit} 
                                        value={cli.nit}
                                    >
                                        {cli.nombre}
                                    </option>
                                ))
                            }
                            
                        </select>

                        <div className="agenda__info-veterinarios mt-5 animate__animated animate__fadeIn">

                            {
                                veterinarios.length === 0 ? 
                                <div>
                                    <img style={{width:"150px"}} src={pets_images("./agenda/veterinarioEmpty.webp")} alt="img" />
                                    <p>¡Ops!, aún no hay veterinarios en esta clínica</p>
                                </div>

                                : 
                                veterinarios.map( vet => (
                                    <button className='agenda__button-card' key={vet.documento}>
                                        <div className="agenda__veterinarios-card">
                                            <img src="https://i0.wp.com/revista.weepec.com/wp-content/uploads/2021/02/vet-and-pet-EESKSLX.jpg?fit=1200%2C800&ssl=1" alt="" />
                                            <h1 id='h1Veterinario'>{vet.nombre} {vet.apellidos}</h1>
                                            
                                        </div>
                                    </button>
                                ))

                            }

                        </div>

                    </div>
                    <div className="imgSchedule">
                            {
                                miMascota.length === 0 ? 
                                <div className="imgPet">
                                    <img src={pets_images("./agenda/confused.jpg")} alt="" />
                                </div>
                                : 
                                miMascota.map( mascota => (

                                    <div className="imgPet" key={mascota.codigo}>
                                        <img className='pet' src={mascota.imagenMascota} alt="img" />
                                        <div className="info">
                                            <div>
                                                <p className='titulo'>{mascota.nombre} <span className='infodata'>{mascota.tipoAnimal}</span></p>
                                                <p className="infodata">{mascota.raza}</p>
                                            </div>
                                            <div>
                                                {
                                                    mascota.edad < 2 ? <p className="infodata more">{mascota.edad} Año</p>
                                                    : <p className="infodata more">{mascota.edad} Años</p>
                                                }
                                                
                                                <p className="infodata more">{mascota.sexo}</p>
                                                <p className="infodata more">Discapacidad: {mascota.discapacidad}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        <div className="schedule">
                            <h1 className='day'>
                                {
                                    day === 1 ? "Lunes"
                                    :day === 2 ? "Martes"
                                    :day === 3 ? "Miercoles"
                                    :day === 4 ? "Jueves"
                                    :day === 5 ? "Viernes"
                                    :day === 6 ? "Sabado"
                                    : "Domingo"
                                }
                            </h1>
                            <div className="momento">
                                <div className='columna mañana'>
                                    <h2 className='h2'>Mañana</h2>
                                    {
                                        schedules.map( (hour,index) => (

                                            <button
                                                className={`btn ${active === index && "hourActive"}`}
                                                onClick={ () => {
                                                    setActive( index );
                                                    setHour( hour.hora );
                                                }}
                                                key={ index }
                                            >
                                                { hour.hora }
                                            </button>
                                        ))
                                    }
                                    
                                    

                                </div>
                                <div className='columna tarde'>
                                    <h2 className='h2'>Tarde</h2>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
