import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAgendas } from '../../../helpers/API Consumer/useAgendaConsumer';
import { LoaderCards } from '../../UI/LoaderCards/LoaderCards';
import { AiFillCheckCircle } from "react-icons/ai";
import { CitaCard } from './CitaCard';
import './citas.css'

export const Citas = () => {

    // TODO - EL USUARIO SOLO PODRÁ AGENDAR 3 CITAS POR DÍA

    const [citasAll, setCitasAll] = useState([]);
    const [loader, setLoader] = useState(true);
    const [reload, setReload] = useState(false);
    const [agendaDeleted, setAgendaDeleted] = useState("");

    let id = "";
    console.log( citasAll );

    if ( localStorage.getItem("usuario") ) {
        
        const user = JSON.parse(localStorage.getItem("usuario"));
        id = user.id;
    }

    useEffect( () => {

        getAgendas( id ).then( info => {

            setCitasAll( info.data.filter( cita => cita.estado === 1 ) )
            
            setLoader( false );

        })

    }, [reload])
    

    return (
        <>
            <div className="citas__contenedor animate__animated animate__fadeIn">
                {
                    loader ? <LoaderCards extra="m40"/>
                    : citasAll.length !== 0 ?
                    citasAll.map( (cita) => (
                        <>
                        {
                            <CitaCard 
                            key={ cita.codigoA }
                            setReload={setReload}
                            reload={reload}
                            msj={setAgendaDeleted}
                            data={cita}
                            />
                        }
                        </>
                    ))
                    :
                    <p className='citasEmpty'>No hay citas pendientes</p>
                }
            </div>
            {
                agendaDeleted && 
                <p className='citaDeleted animate__animated animate__backInRight'>Tu cita ha sido eliminada <AiFillCheckCircle className='icon'/></p>
            }

        </>
    )
}
