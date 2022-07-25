import React from 'react'
import { Header } from '../../layout/HeaderHome/HeaderHome'
import { CitaCard } from './CitaCard'

import './citas.css'

export const Citas = () => {

    const citas = [
        {
            dateTime : "22 JUL",
            nombreMc : "Rocco",
            nombreDn : "Pepito Perez",
            telDn : "(+57) 301 2105346",
            raza : "Pug",
            anios : 2,
            veterinario : "Vt. Carlos Gaviria",
            gender : "Masculino",
            imgUrl : "https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg"
        }
    ]

    return (
        <>
            <Header />
            <div className="typePage">
                <h1>Citas</h1>
            </div>
            <div className="citas__contenedor">
                {
                    citas.map( cita => (

                        <CitaCard
                            key={cita.telDn}
                            dateTime = {cita.dateTime}
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
