import React, { useState } from 'react'
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard';

import './citas.css'
import { citas } from './dataCitas';
import { VeterinarioFilter } from './filtros/VeterinarioFilter';

export const Citas = () => {

    const [gender, setGender] = useState("");
    const [citasAll, setCitasAll] = useState( citas )
    

    return (
        <>
            <Header />
            <VeterinarioFilter 
                setGender={setGender}
            />   
            <div className="citas__contenedor animate__animated animate__fadeIn">
                {
                    citasAll.map( cita => (
                        <CitaCard
                            key={cita.id}
                            id={cita.id}
                            date = {cita.date}
                            time = {cita.time}
                            nombreMc = {cita.nombreMc}
                            nombreDn = {cita.nombreDn}
                            telDn = {cita.telDn}
                            raza = {cita.raza}
                            anios = {cita.anios}
                            veterinario = {cita.veterinario}
                            gender = {cita.gender}
                            imgUrl = {cita.imgUrl}
                        />
                    ))
                }
            </div>

        </>
    )
}
