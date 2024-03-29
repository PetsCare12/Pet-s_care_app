import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getAllClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import { pets_images } from '../../../helpers/Pets_care_images';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import { getVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import { divisionHorarios } from '../../../helpers/gestionHorarios';
import { horariosAgenda } from '../../../hooks/useHorariosAgenda';
import { getAgendasVeterinario, getHorarioVeterinario } from '../../../helpers/API Consumer/useHorariosConsumer';
import { BsCheckAll } from "react-icons/bs";
import moment from 'moment';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import { createAgenda } from '../../../helpers/API Consumer/useAgendaConsumer';
import { FooterPrincipal } from '../../layout/FooterPrincipal/FooterPrincipal';
import { LoaderCards } from "../../UI/LoaderCards/LoaderCards";
import './style.css';
import './query.css'

export const Agenda = () => {
    
    const [active, setActive] = useState();
    const [clinica, setClinica] = useState([]);
    const [clinicaSeleccion, setClinicaSeleccion] = useState("");

    const [veterinarios, setVeterinarios] = useState([]);
    const [activeVeterinario, setActiveVeterinario] = useState();
    
    const [schedulesMor, setSchedulesMor] = useState([]);
    const [schedulesAft, setSchedulesAft] = useState([]);

    const [description, setDescription] = useState("");
    const [descriptionModal, setDescriptionModal] = useState(false);
    const [hourValidate, setHourValidate] = useState([false,""]);

    const [hour, setHour] = useState(["",""]);
    const { id } = JSON.parse(localStorage.getItem("usuario"));

    const [agendaSuccess, setAgendaSuccess] = useState(false);

    const [loadingSchedule, setLoadingSchedule] = useState(false);
    const [loadingVet, setLoadingVet] = useState(true);
    const [loadingGeneral, setLoadingGeneral] = useState(true);

    const navigate = useNavigate();

    
    const day = new Date().getDay();

    const handleSubmitAgenda = () => {

        let currentHour = hour[0];

        if (hour[1] === "pm") {
            if (Number(hour[0].split(":")[0]) !== 12 ) {
                currentHour = Number(hour[0].split(":")[0])+ 12 + ":" + hour[0].split(":")[1]           
            }
        }

        const data = {
            fecha: moment().format('L'),
            horaInicio: currentHour,
            horaSalida: "00:00",
            notas: description,
            estado: 1
        }

        createAgenda( data, id, activeVeterinario ).then( info => {
            if ( info.status === 201 ) {

                setDescriptionModal( false );
                setAgendaSuccess( true );
                setTimeout( () => {
                    setSchedulesAft([]);
                    setSchedulesMor([]);
                    setAgendaSuccess( false );
            }, 3000)
            }
        });

    }

    const diasSemana = {
        0 : "domingo",
        1 : "lunes",
        2 : "martes",
        3 : "miercoles",
        4 : "jueves",
        5 : "viernes",
        6 : "sabado",
    }
    
    const { id:clinicaEsp } = useParams();

    useEffect( () => {

        if ( clinicaSeleccion === "" ) {
            setLoadingVet( false );
        }

        getAllClinicas().then( info => {
            setClinica(info.data);
            setLoadingGeneral(false);
        });

        if ( !!clinicaEsp ) {
            setClinicaSeleccion( clinicaEsp )
            getVeterinarios( clinicaEsp ).then( info => {
                setVeterinarios( info )
                setLoadingVet( false )
            });
    }
        else {
            setClinicaSeleccion( "" );
        }

    },[])

    const handleSelectVeterinario = ( idVet ) => {

        setLoadingSchedule( true );
        
        setActiveVeterinario( idVet );
        setActive();
        setHour([]);

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

                                    if ( hora.estado === 1 ) {
                                        if ( hora.fecha === moment().format('L') ) {
                                            
                                            horasUsadas.push( hora.horaInicio );
                                        }
                                        
                                    }
                                    

                                })

                            }

                            const [ morning, newAfternoon ] = horariosAgenda( 
                                divisionHorarios( 
                                    horasUsadas,
                                    dato.horaInicio.split(":")[0],
                                    dato.horaSalida.split(":")[0],
                                    dato.horaInicio.split(":")[1],
                                    dato.horaSalida.split(":")[1],

                                )
                            );
                            
                            _morning = morning ;
                            _after   = newAfternoon ;

                            setLoadingSchedule( false );


                            ( _morning.length !== 0 ) ? setSchedulesMor( _morning ) : setSchedulesMor([]);
                            ( _after.length !== 0 ) ? setSchedulesAft( _after ) : setSchedulesAft([]);
                        })
                        

                    }
                    else {
                        setSchedulesMor([]);
                        setSchedulesAft([]);
                        setLoadingSchedule( false );
                    }
    
                })
            }
            else{
                setLoadingSchedule( false );
                setSchedulesMor([]);
                setSchedulesAft([]);
            }
            
            

        })

    }


    const handleClinicaSelect = ( e ) => {

        if (e.target.value === "none") return;

        setClinicaSeleccion( e.target.value );
        
        getVeterinarios( e.target.value ).then( info => {
            setLoadingVet( false );
            setVeterinarios( info )
        });
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
            {
                loadingGeneral ? <><div style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"20px"
                }}><LoaderCards /><p>Cargando...</p></div></>
                :
                <div className='card'>
                    <h1 className="title">Agenda</h1>
                        <div className="selectors">

                            <select id='select' name='clinica' value={clinicaSeleccion} onChange={handleClinicaSelect}>
                                <option id='selected' value="none">Selecciona una clínica</option>
                                {
                                    clinica.map( cli => (
                                        (cli.estadoCli === 1 && cli.veterinarios.length>0) &&
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
                                    loadingVet ? <div style={{width:"30px",height:"30px"}} id='login-spin-sectionPerfil' className='spiner'></div>
                                    :
                                    <>
                                    {
                                        veterinarios.length === 0 ? 
                                        <div style={{width: "70%",textAlign: "center"}}>
                                            <img style={{width:"150px"}} src={pets_images("./agenda/astronauta.webp")} alt="img" />
                                            <p style={{borderRadius:"6px",padding:"20px",background:"#00376c",color:"white"}}>Ten en cuenta que las clínicas que no tengan veterinarios no se mostrarán en este apartado</p>
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
                                    </>
                                }


                            </div>

                        </div>
                        <div className="imgSchedule">
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
                                        {
                                            loadingSchedule ? <div style={{width:"30px",height:"30px"}} id='login-spin-sectionPerfil' className='spiner'></div>
                                            :
                                            <>
                                            { schedulesMor.length === 0 && <p className='horarioEmpty animate__animated animate__fadeIn'>No hay horas disponibles</p> }
                                            {
                                                schedulesMor.map( (hour,index) => (

                                                    <button
                                                        className={`btn ${active === index && "hourActive"} animate__animated animate__fadeIn`}
                                                        onClick={ () => {
                                                            setActive( index );
                                                            setHour( [hour,"am"] );
                                                        }}
                                                        key={ index }
                                                    >
                                                        { hour.split(":")[1] === "0" ? hour+"0" : hour }
                                                    </button>
                                                ))
                                            }
                                            </>
                                        }
                                        
                                        

                                    </div>
                                    <div className='columna tarde'>
                                        <h2 className='h2'>Tarde <small className='small'>PM</small></h2>
                                        {
                                            loadingSchedule ? <div style={{width:"30px",height:"30px"}} id='login-spin-sectionPerfil' className='spiner'></div>
                                            :
                                            <>
                                            { schedulesAft.length === 0 && <p className='horarioEmpty animate__animated animate__fadeIn'>No hay horas disponibles</p> }
                                            {
                                                schedulesAft.map( (hour,index) => (

                                                    <button
                                                        className={`btn ${active === "tarde_"+index && "hourActive"} animate__animated animate__fadeIn`}
                                                        onClick={ () => {
                                                            setActive( "tarde_"+index );
                                                            setHour( [hour,"pm"] );
                                                        }}
                                                        key={ "tarde_"+index }
                                                    >     
                                                        { 
                                                            hour.split(":")[1] === "0" ? hour+"0" : hour 
                                                        }
                                                    </button>
                                                ))
                                            }
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            {hourValidate[0] && <p style={{color:"red"}} className='animate__animated animate__fadeIn'>{hourValidate[1]}</p>}
                            <button 
                                className='btnActualizarMascota'
                                onClick={ () => {
                                    if (hour[0]) {
                                        setDescriptionModal( true )
                                        setHourValidate([false,""])
                                    }
                                    else {setHourValidate([true,"Selecciona un horario antes de continuar"])}
                                }}
                            >Continuar</button>
                        </div>
                </div>

            }
            {
                descriptionModal &&
                <SimpleModal close={setDescriptionModal}>
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
                        <button onClick={handleSubmitAgenda} className={`btnActualizarMascota ${ description.length < 10 && "block" }`}>Agendar</button>

                        <button onClick={ () => setDescriptionModal( false ) } className="cancel">x</button>
                    </div>
                </SimpleModal>
            }
            {
                agendaSuccess &&
                <SimpleModal>
                    <div className='agenda_success'>
                        <BsCheckAll className='icon'/>
                        <h1 className='h1'>Tu cita se creó correctamente</h1>
                    </div>
                </SimpleModal>
            }
        </div>
        <FooterPrincipal/>
        </>
    )
}
