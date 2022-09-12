import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAgendas } from '../../../helpers/API Consumer/useAgendaConsumer';
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard';
import './citas.css'

export const Citas = () => {

    const [gender, setGender] = useState("");
    const [citasAll, setCitasAll] = useState([]);

    const token = JSON.parse(localStorage.getItem( 'usuario' ));
    

    useEffect( () => {

        getAgendas(token.id).then( info => setCitasAll(info.data))

    }, [])

    console.log( "HOLA" );
    

    return (
        <>
            <div className="citas__contenedor animate__animated animate__fadeIn">
                {
                    citasAll.length !== 0 ?
                    citasAll.map( cita => (
                        <CitaCard 
                        key={ cita.codigoA }
                            {...cita}
                        />
                    ))
                    :
                    <p className='citasEmpty'>No hay citas pendientes</p>
                }
            </div>
        </>
    )
}
