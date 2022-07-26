import React from 'react';
import { useNavigate, useParams } from 'react-router';
import {getCitaById} from '../../../helpers/getItemsByID';

import {FaPaw,FaRegHospital} from 'react-icons/fa';
import {RiUser6Fill} from 'react-icons/ri';
import {BsFillTelephoneFill} from 'react-icons/bs';

import { Citas } from './Citas';

export const CitaEspecifica = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    
    const { date, time, nombreMc, nombreDn, telDn, raza, anios, veterinario, gender, imgUrl} = getCitaById( id );

    const handleReturn = () => navigate( -1 );

    return (
        <section style={{padding:"70px"}}>
            <div className='citaEspecifica__cont'>
                <div className="citaEspecifica__cont-izquierdo">
                    <img src={imgUrl} alt="pet" />
                </div>
                <div className="citaEspecifica__cont-derecho">
                    <div className='citaEspecifica__sameLine'><FaPaw className='citaEspecifica__icon' /><h1 className='citaEspecifica__mcName'> {nombreMc} </h1></div>
                    <h1 className='citaEspecifica__raza'> {raza} <br/> {anios} año(s)</h1>
                    <div className="citaEspecifica__sameLine"><RiUser6Fill className='citaEspecifica__icon' /><h1 className='citaEspecifica__dnName'> {nombreDn} </h1></div>
                    <div className="citaEspecifica__sameLine"><BsFillTelephoneFill className='citaEspecifica__icon' /><h1 className='citaEspecifica__tel'> {telDn} </h1></div>
                    <div className="citaEspecifica__sameLine"><FaRegHospital className='citaEspecifica__icon' /><h1 className='citaEspecifica__vet'> {veterinario} </h1></div>
                    <div className="citaEspecifica__description">
                        <h1>Descripción</h1>
                        <p> sasasasasassa </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
