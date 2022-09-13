import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAgendas } from '../../../helpers/API Consumer/useAgendaConsumer';
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { LoaderCards } from '../../UI/LoaderCards/LoaderCards';
import { CitaCard } from './CitaCard';
import './citas.css'

export const Citas = () => {

    const [gender, setGender] = useState("");
    const [citasAll, setCitasAll] = useState([]);
    const [loader, setLoader] = useState(true);

    let id = "";

    if ( localStorage.getItem("usuario") ) {
        
        const user = JSON.parse(localStorage.getItem("usuario"));
        id = user.id;
    }

    useEffect( () => {

        getAgendas( id ).then( info => {

            setCitasAll( info.data )
            setLoader( false );

        })

    }, [])

    console.log( "HOLA" );
    

    return (
        <>
            <div className="citas__contenedor animate__animated animate__fadeIn">
                {
                    loader ? <LoaderCards extra="m40"/>
                    : citasAll.length !== 0 ?
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
