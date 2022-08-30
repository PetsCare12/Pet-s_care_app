import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router';
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {MdOutlineSchedule} from "react-icons/md";
import {BiDownArrowAlt} from "react-icons/bi";
import {BsTelephoneInbound} from "react-icons/bs";
import {FaRegCalendarPlus} from "react-icons/fa";
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { getClinicaByNit } from '../../../helpers/API Consumer/useClinicasConsumer';


export const Clinica = (  ) => {

    const navigate = useNavigate();

    const [clinica, setClinica] = useState([]);

    const { imagenclinica, nombre, direccion, telefono, tarifa, nit  } = clinica;

    const { id } = useParams();

    useEffect( () => {

        getClinicaByNit( id )
        .then( info => {
            setClinica( info.data )
        })

    }, [])
    
    // const { img, nombre, direccion, valor_consulta, horarios} = getClinicaId( parseInt(id) );

    const handleReturn = () => navigate( -1 );

    return (
        <div className='clinica__mainContainer'>
            <div className='contenedor__clinica_individual animate__animated animate__fadeIn'>
                <div className="clinica__img">
                <img src={imagenclinica} alt={id} />

                </div>
                
                <div className="clinica__data">
                    <h1> 
                        {nombre}
                    </h1>
                    <h2 className='txt'> <span><IoLocationOutline /></span> {direccion} </h2>
                    <h2 className='txt'> <span><BsTelephoneInbound /></span> {telefono} </h2>
                    <hr className='hr__clinicas'/>
                    <h3 className='txt'> <span><AiOutlineDollarCircle /></span> Desde <b> $ {tarifa}</b> </h3>
                    {/* {
                        horarios.map( day => (
                            <details>
                            <summary><span id='clinica__summary-icon'><MdOutlineSchedule /></span>Horarios <BiDownArrowAlt /></summary>
                            <div className='cli__schedule'><p>Lunes</p> {day.Lunes} </div>
                            <div className='cli__schedule'><p>Martes</p> {day.Martes} </div>
                                <div className='cli__schedule'><p>Miercoles</p> {day.Miercoles} </div>
                                <div className='cli__schedule'><p>Jueves</p> {day.Jueves} </div>
                                <div className='cli__schedule'><p>Viernes</p> {day.Viernes} </div>
                                <div className='cli__schedule'><p>Sabado</p> {day.Sabado} </div>
                                <div className='cli__schedule'><p>Domingo</p> {day.Domingo} </div>
                                <div className='cli__schedule'><p>Festivo</p> {day.Festivo} </div>
                            </details>
                            ))
                        } */}
                    <div style={{display: "flex",alignItems:"center",justifyContent: "space-between"}}>
                        <ButtonUI 
                            text={"Volver"}
                            style="btnShort"
                            event={handleReturn}
                        />
                        <Link to={`/agenda/${nit}`} className='btn clinica__enlace'><FaRegCalendarPlus />Pedir cita</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
