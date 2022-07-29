import React from 'react';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
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
        <section className='animate__animated animate__fadeIn' style={{padding:"70px",
            alignItems: "center",
            padding: "70px",
            height: "100vh",
            display: "flex",
        }}>
            <div className='citaEspecifica__cont'>
                <div className={`citaEspecifica__cont-izquierdo ${ (gender==="Femenino") ? "citaEspecifica__hembra-border" : "citaEspecifica__macho-border" }`}>
                    <img src={imgUrl} alt="pet" />
                </div>
                <div className="citaEspecifica__cont-derecho">
                    <div className='citaEspecifica__sameLine'><FaPaw className={`citaEspecifica__icon ${ (gender==="Femenino") ? "citaEspecifica__icon-hembra" : "citaEspecifica__icon-macho" }`} /><h1 className='citaEspecifica__mcName'> {nombreMc} </h1></div>
                    <h1 className='citaEspecifica__raza'> {raza} / {anios} año(s)</h1>
                    <div className="citaEspecifica__sameLine"><RiUser6Fill className={`citaEspecifica__icon ${ (gender==="Femenino") ? "citaEspecifica__icon-hembra" : "citaEspecifica__icon-macho" }`} /><h1 className='citaEspecifica__dnName'> {nombreDn} </h1></div>
                    <div className="citaEspecifica__sameLine"><BsFillTelephoneFill className={`citaEspecifica__icon ${ (gender==="Femenino") ? "citaEspecifica__icon-hembra" : "citaEspecifica__icon-macho" }`} /><h1 className='citaEspecifica__tel'> {telDn} </h1></div>
                    <div className="citaEspecifica__sameLine"><FaRegHospital className={`citaEspecifica__icon ${ (gender==="Femenino") ? "citaEspecifica__icon-hembra" : "citaEspecifica__icon-macho" }`} /><h1 className='citaEspecifica__vet'>Vt. {veterinario} </h1></div>
                    <ButtonUI 
                        style={`mt-5 ${(gender==="Femenino")?"btnShort-pink":"btnShort"}`}
                        text="Volver"
                        event={handleReturn}

                    />
                    
                    
                </div>
                <div className={`citaEspecifica__description ${ (gender === "Femenino") ? 'citaEspecifica__hembra-description' : 'citaEspecifica__macho-description'}`} >
                        <h1 style={{marginBottom:"20px"}}>Descripción</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus aspernatur reprehenderit, nobis debitis vero nihil ducimus cumque sint qui nisi veniam ad ea error animi blanditiis magni praesentium expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam tempora nesciunt quasi? Autem voluptas necessitatibus, repellat quam minima, odio perferendis vero illo sunt atque commodi quae pariatur sit suscipit!
                        Commodi ducimus obcaecati consectetur, architecto quae iste dignissimos modi recusandae assumenda corporis eius corrupti voluptatibus labore numquam fuga quod quas nemo rerum. Odio fuga ut possimus doloremque laudantium quaerat sint. </p>
                    </div>
            </div>
        </section>
    )
}
