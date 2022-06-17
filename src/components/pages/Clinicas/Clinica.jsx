import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router';
import { getClinicaId } from '../../../helpers/getClinicaById';
import {IoLocationOutline} from "react-icons/io5";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {MdOutlineSchedule} from "react-icons/md";
import {BiDownArrowAlt} from "react-icons/bi";
import {FaRegCalendarPlus} from "react-icons/fa";
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';


export const Clinica = (  ) => {

    const navigate = useNavigate();

    const { id } = useParams();
    
    const { img, nombre, direccion, valor_consulta, horarios} = getClinicaId( parseInt(id) );

    const handleReturn = () => navigate( -1 )

    return (
        <>
            <div className='contenedor__clinica_individual animate__animated animate__fadeIn'>
                <div className="clinica__img">
                {
                    (img === "")
                    ? <img src="https://thumbs.dreamstime.com/b/ejemplo-de-color-plano-exterior-la-cl%C3%ADnica-veterinaria-hospital-veterinario-en-paisaje-urbano-edificio-c%C3%B3modo-con-el-letrero-141242172.jpg" alt="" />
                    : <img src={img} alt={id} />
                }

                </div>
                
                <div className="clinica__data">
                    <h1> 
                        {nombre}
                        <Link to="" className='btn ml-5 clinica__enlace'><FaRegCalendarPlus />Pedir cita</Link>
                    </h1>
                    <h2> <span><IoLocationOutline /></span> {direccion} </h2>
                    <hr className='hr__clinicas'/>
                    <h3> <span><AiOutlineDollarCircle /></span> Desde <b> ${valor_consulta}</b> </h3>
                    {
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
                    }
                    <ButtonUI 
                        text={"Volver"}
                        style="btnShort"
                        event={handleReturn}
                    />
                </div>
            </div>
        </>
    )
}
