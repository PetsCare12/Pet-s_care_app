import React from 'react'
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard';

import './citas.css'
import { citas } from './dataCitas';

export const Citas = () => {

    return (
        <>
            <Header />
            <div className="typePage animate__animated animate__fadeIn">
                <h1>Citas</h1>
            </div>
            <div className="citas__contenedor animate__animated animate__fadeIn">
                {
                    citas.map( cita => (

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
