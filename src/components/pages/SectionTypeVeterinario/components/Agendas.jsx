import React, { useEffect, useState } from 'react'
import { getAgendasVeterinario } from '../../../../helpers/API Consumer/useAgendaConsumer';
import { LoaderCards } from '../../../UI/LoaderCards/LoaderCards';
import { MdDescription } from "react-icons/md";

export const Agendas = ( {id} ) => {

    const [loader, setLoader] = useState(true);
    const [agendas, setAgendas] = useState([]);

    useEffect( () => {

        getAgendasVeterinario( id ).then( info => {

            if ( info.status === 200) {

                setLoader( false );
                setAgendas( info.data.filter( cita => cita.estado === 1) );

            }

        })

    },[])

    console.log( agendas );

    return (
        <>
            <h1 style={{position:"absolute"}}>Mis citas pendientes</h1>
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
                                <div className='citas-veterinario'>
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
            </div>
        </>
    )
}
