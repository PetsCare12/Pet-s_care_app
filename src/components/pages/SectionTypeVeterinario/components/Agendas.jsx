import React, { useEffect, useState } from 'react'
import { cancelarAgenda, getAgendasVeterinario } from '../../../../helpers/API Consumer/useAgendaConsumer';
import { LoaderCards } from '../../../UI/LoaderCards/LoaderCards';
import { MdDescription,MdFreeCancellation } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { SimpleModal } from '../../../layout/Modals/SimpleModal';

export const Agendas = ( {id} ) => {

    const [loader, setLoader] = useState(true);
    const [agendas, setAgendas] = useState([]);
    const [reload, setReload] = useState(false);
    const [agendaDeleted, setAgendaDeleted] = useState("");

    useEffect( () => {

        getAgendasVeterinario( id ).then( info => {

            if ( info.status === 200) {

                setLoader( false );
                setAgendas( info.data.filter( cita => cita.estado === 1) );

            }

        })

    },[reload])

    const cancelDate = ( codigo ) => {

        cancelarAgenda( codigo ).then( info => {

            if ( info.status === 200) {
                setReload( !reload );
                setAgendaDeleted( "La cita ha sido eliminada" )
                setTimeout( () => {
                    setAgendaDeleted("")
                }, 5000 )
                
            }
            console.log( info );
        })

        
    }
    return (
        <>
            <h1 style={{position:"absolute"}}>Mis citas pendientes <small className='agendaVete'>(recuerda dar doble click para finalizar una cita)</small></h1>
            <div className='agendasVeterinario'>
            {
                loader ? 
                <LoaderCards />
                :
                <>
                {
                    agendas.length === 0 ? 
                    <div className='citasempty'>
                        Actualmente no tienes citas
                    </div>
                    :
                    <>
                        {
                            agendas.map( (cita) => (
                                <div className='citas-veterinario' key={cita.codigoA}>
                                    <img className='img' src={cita.documentous.imagenUsu} alt="" />
                                    <div className="contenido">
                                        <p>N° {cita.documentous.documentoUs}</p>
                                        <p>{cita.documentous.nombreUs} {cita.documentous.nombreUs}</p>
                                        <p>( +57 ) {cita.documentous.telefonoUs}</p>
                                        <div className='schedule'>
                                            <p>{cita.fecha}</p>
                                            {
                                                cita.horaInicio.split(":")[1] === "0" ? cita.horaInicio.split(":")[0]+":00" : cita.horaInicio
                                            }
                                        </div>
                                        <MdFreeCancellation onDoubleClick={ () => cancelDate( cita.codigoA ) } className='icon delete' title='Finalizar cita'/>
                                        <MdDescription className='icon'/>
                                        <div className="description animate__animated animate__fadeIn">
                                            { cita.notas }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                }
                </>
            }
            {
                agendaDeleted && 
                <p className='citaDeleted animate__animated animate__backInRight'>Tu cita ha sido eliminada <AiFillCheckCircle className='icon'/></p>
            }
            </div>
        </>
    )
}
