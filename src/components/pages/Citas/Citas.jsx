import React, { useState } from 'react'
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard';
import './citas.css'

export const Citas = () => {

    const [gender, setGender] = useState("");
    const [citasAll, setCitasAll] = useState([]);
    

    return (
        <>
            <Header />
            <div className="citas__contenedor animate__animated animate__fadeIn">
                <CitaCard />
            </div>

        </>
    )
}
