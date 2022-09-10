import React, { useEffect, useState } from 'react'
import './clinicas.css'
import './query.css'
import { Clinica_card } from './Clinica_card'
import { IoIosArrowDropdown } from "react-icons/io";


import { getAllClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import { Link } from 'react-router-dom';

export const Clinicas = () => {

    const [clinicas, setClinicas] = useState([]);

    const [menuToggle, setMenuToggle] = useState(false);


    useEffect( () => {

        getAllClinicas()
        .then( info => {
            console.log( info.data );
            setClinicas( info.data );
        })

    }, [])
    
    return (
        <> <div className='contenedorClinicasMenu'>
            <div className={`menuBar ${ menuToggle && "change" }`} onClick={ () => setMenuToggle( !menuToggle )} >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            </div>

            </div>
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
                            tarifa={cli.tarifa}
                            horario={cli.horarios}
                            estado = {cli.estadoCli}
                            telefono={ cli.telefono }
                        />
                    ))
                }
                {
                    clinicas.length === 0 && <p style={{textAlign:"center"}}>Aún no hay clínicas registradas <br/>😪🏥</p>
                }
                
            </div>
            {
                menuToggle 
                ?

                <div className='menuClinicas animate__animated  animate__slideInLeft'>
                    
                        <Link className='btnOpcionesC' to={"/"}> Inicio</Link> 
                        <Link className='btnOpcionesC' to={"/perfil"}> Perfil</Link> 
                    
                </div>
                :
                null
            }
            <footer>
                <p>&copy; <span>Pet's Care </span> Todos los derechos reservados.</p>
            </footer>
        </>
    )
}
