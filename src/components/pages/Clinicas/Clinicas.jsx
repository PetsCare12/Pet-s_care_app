import React from 'react'
import { clinicas } from './data'
import './clinicas.css'
import { Clinica_card } from './Clinica_card'
import { IoIosArrowDropdown } from "react-icons/io";

export const Clinicas = () => {


    return (
        <>
            <div className='contenedor__clinicas animate__animated animate__fadeIn'>
            <h1 id='tilte__clinicas'>
                Nuestras<span> clínicas </span>veterninarias <br />
                <div className="animated_arrow"><IoIosArrowDropdown /></div>
            </h1>
                {
                    clinicas.map( cli => (
                        <Clinica_card 
                            key={cli.id}
                            id={cli.id}
                            img={cli.img}
                            nombre={cli.nombre}
                            direccion={cli.direccion}
                            tarifa={cli.valor_consulta}
                            horario={cli.horarios}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
