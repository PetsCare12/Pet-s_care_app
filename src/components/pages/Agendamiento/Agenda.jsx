import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUsuario_mascotas } from '../../../helpers/API Consumer/test';
import { getAllClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import { getMascotaEspecifica } from '../../../helpers/API Consumer/useMascotasConsumer';
import { pets_images } from '../../../helpers/Pets_care_images';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import { getVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import { divisionHorarios } from '../../../helpers/gestionHorarios';
import { horariosAgenda } from '../../../hooks/useHorariosAgenda';
import { getAgendasVeterinario, getHorarioVeterinario } from '../../../helpers/API Consumer/useHorariosConsumer';
import moment from 'moment';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import './style.css';
import './query.css'

export const Agenda = () => {

    // TODO - Poner en blanco los horaios cunado el dia no esté incluido

    
    const [active, setActive] = useState();
    const [clinica, setClinica] = useState([]);
    const [clinicaSeleccion, setClinicaSeleccion] = useState("");

    const [veterinarios, setVeterinarios] = useState([]);
    const [activeVeterinario, setActiveVeterinario] = useState();
    
    const [schedulesMor, setSchedulesMor] = useState([]);
    const [schedulesAft, setSchedulesAft] = useState([]);
    
    const [mascotas, setMascotas] = useState([]);
    const [miMascota, setMiMascota] = useState([]);

    const [description, setDescription] = useState("");
    const [descriptionModal, setDescriptionModal] = useState(false);

    const [hour, setHour] = useState("");
    const { id } = JSON.parse(localStorage.getItem("usuario"));

    
    const day = new Date().getDay();

    const diasSemana = {
        1 : "lunes",
        2 : "martes",
        3 : "miercoles",
        4 : "jueves",
        5 : "viernes",
        6 : "sabado",
        7 : "domingo",
    }
    
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

    const handleSelectVeterinario = ( idVet ) => {
        
        setActiveVeterinario( idVet );
        setActive();
        setHour();

        let _morning = [];
        let _after = [];

        let horasUsadas = [];

        getHorarioVeterinario( idVet ).then( info => {

            if ( info.length !== 0 ) {
                
                info.map( dato => {
    
                    if ( dato.diaHorarios === diasSemana[day]) {

                        getAgendasVeterinario( idVet ).then( info => {

                            if ( info.data !== 0 ) {

                                info.data.map( hora => {
                                    if ( hora.fecha === moment().format('L') ) {
                                        
                                        horasUsadas.push( hora.horaInicio );
                                    }

                                })

                            }

                            const [ morning, newAfternoon ] = horariosAgenda( 
                                divisionHorarios( 
                                    horasUsadas,
                                    dato.horaInicio.split(":")[0],
                                    dato.horaSalida.split(":")[0],
                                    dato.horaInicio.split(":")[1]
                                )
                            );
                            
                            _morning = morning ;
                            _after   = newAfternoon ;

                            ( _morning.length !== 0 ) ? setSchedulesMor( _morning ) : setSchedulesMor([]);
                            ( _after.length !== 0 ) ? setSchedulesAft( _after ) : setSchedulesAft([]);
                        })
                        

                    }
                    else {
                        setSchedulesMor([]);
                        setSchedulesAft([]);
                    }
    
                })
            }
            else{
                setSchedulesMor([]);
                setSchedulesAft([]);
            }
            
            

        })

    }


    const handleClinicaSelect = ( e ) => {

        setClinicaSeleccion( e.target.value );
        
        getVeterinarios( e.target.value ).then( info => setVeterinarios( info ));
        setSchedulesMor([]);
        setSchedulesAft([]);
    }

    const handleDescription = ( e ) => {

        setDescription( e.target.value )
    }

    

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
                                <option value="none" > Aún no hay mascotas registradas </option>
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
                                    <button onClick={ () => handleSelectVeterinario(vet.documento)} 
                                            className={`agenda__button-card`}
                                            key={vet.documento}
                                        >
                                        <div className="agenda__veterinarios-card">
                                            <img src={vet.imagenVete} alt="" />
                                            <h1 className={`${activeVeterinario === vet.documento && "vet_active"}`} id='h1Veterinario'>{vet.nombre} {vet.apellidos}</h1>
                                            
                                        </div>
                                    </button>
                                ))

                            }

                        </div>

                    </div>
                    <div className="imgSchedule">
                            {
                                miMascota.length === 0 ? 
                                <div className="imgPet"></div>
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
                                    <h2 className='h2'>Mañana <small className='small'>AM</small></h2>
                                    { schedulesMor.length === 0 && <p className='horarioEmpty animate__animated animate__fadeIn'>No hay horas disponibles</p> }
                                    {
                                        schedulesMor.map( (hour,index) => (

                                            <button
                                                className={`btn ${active === index && "hourActive"} animate__animated animate__fadeIn`}
                                                onClick={ () => {
                                                    setActive( index );
                                                    setHour( hour );
                                                }}
                                                key={ index }
                                            >
                                                { hour.split(":")[1] === "0" ? hour+"0" : hour }
                                            </button>
                                        ))
                                    }
                                    
                                    

                                </div>
                                <div className='columna tarde'>
                                    <h2 className='h2'>Tarde <small className='small'>PM</small></h2>
                                    { schedulesAft.length === 0 && <p className='horarioEmpty animate__animated animate__fadeIn'>No hay horas disponibles</p> }
                                    {
                                        schedulesAft.map( (hour,index) => (

                                            <button
                                                className={`btn ${active === "tarde_"+index && "hourActive"} animate__animated animate__fadeIn`}
                                                onClick={ () => {
                                                    setActive( "tarde_"+index );
                                                    setHour( hour );
                                                }}
                                                key={ "tarde_"+index }
                                            >     
                                                { 
                                                    hour.split(":")[1] === "0" ? hour+"0" : hour 
                                                }
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <button 
                            className='btnActualizarMascota'
                            onClick={ () => setDescriptionModal( true )}
                        >Continuar</button>
                    </div>
            </div>
            {
                descriptionModal &&
                <SimpleModal>
                    <div className='agendaDescription animate__animated animate__fadeIn'>
                        <h1 className='h1'>Descripción</h1>
                        <p className='p'>¡Un último paso!<br/>Escribe el porqué estas solicutando esta cita. <small className='small'>(El campo no debe estar vacío)</small></p>
                        <textarea 
                            maxLength='250'
                            name="description" 
                            className='description'
                            id="description" 
                            cols="30" 
                            rows="10"
                            value={description}
                            onChange={ handleDescription }
                        ></textarea>
                        <button className={`btnActualizarMascota ${ description.length < 10 && "block" }`}>Agendar</button>

                        <button onClick={ () => setDescriptionModal( false ) } className="cancel">x</button>
                    </div>
                </SimpleModal>
            }
        </div>
        </>
    )
}
