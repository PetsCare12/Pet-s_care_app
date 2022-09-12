import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAgendas } from '../../../helpers/API Consumer/useAgendaConsumer';
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard';
import './citas.css'

export const Citas = () => {

    const [gender, setGender] = useState("");
    const [citasAll, setCitasAll] = useState([]);

    useEffect( () => {

        getAgendas().then( info => console.log( info ))

    }, [])

    console.log( "HOLA" );
    

    return (
        <>
            <div className="citas__contenedor animate__animated animate__fadeIn">
                <CitaCard />
            </div>

        </>
    )
}
