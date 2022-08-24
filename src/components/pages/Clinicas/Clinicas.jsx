import React, { useEffect, useState } from 'react'
import { clinicas } from './data'
import './clinicas.css'
import { Clinica_card } from './Clinica_card'
import { IoIosArrowDropdown } from "react-icons/io";
import { getAllClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';

export const Clinicas = () => {

    const [clinicas, setClinicas] = useState([]);
    
    useEffect( () => {

        getAllClinicas()
        .then( info => {
            console.log( info.data );
            setClinicas( info.data );
        })

    }, [])

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
                            key={cli.nit}
                            id={cli.nit}
                            img={cli.imagenclinica}
                            nombre={cli.nombre}
                            direccion={cli.direccion}
                            tarifa={cli.valor_consulta}
                            horario={cli.horarios}
                            estado = {cli.estadoCli}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
