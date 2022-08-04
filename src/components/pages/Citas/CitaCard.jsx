import React from 'react'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export const CitaCard = ( {
    id,
    date,
    time,
    nombreMc,
    nombreDn,
    telDn,
    raza,
    anios,
    veterinario,
    gender,
    imgUrl

} ) => { 

    return (
        <Link to={`/cita/${id}`} style={{display:"flex",flexDirection:"column",textDecoration:"none"}}>

            <button className={`citaCard__contenedor ${ (gender === "Femenino") ?  "citaCard__hembra" : "citaCard__macho"}`}>
                    <div className={`citaCard__datetime ${ (gender === "Femenino") ?  "citaCard__hembra-date" : "citaCard__macho-date"}`}>
                        <h1 style={{fontWeight:"400"}}>{date} <span>{time}</span></h1>
                    </div>
                    <div className="citaCard__contenedor-izquierdo">
                        <div className="citaCard__contenedor-mascota">
                            <h1>
                                <strong style={{color:"#303030",fontSize:"25px",marginLeft:"-30px"}}>{nombreMc} </strong>

                                {
                                    ( gender === "Masculino" ) ?
                                    <BsGenderMale style={{color:"#0072ff",paddingTop:"5px"}}/>
                                    : <BsGenderFemale style={{color:"#d661cf",paddingTop:"5px"}}/>
                                }

                            </h1>
                            <p className='citaCard__p-mascota' style={{marginLeft:"-30px"}}> {raza} </p>
                            <p className='citaCard__p-mascota' style={{marginLeft:"-30px"}}> {anios} Año(s)</p>
                        </div>
                        <div className="citaCard__contenedor-duenio">
                            <p className='citaCard__p-duenio'> {nombreDn} </p>
                            <p className='citaCard__p-duenio'> {telDn} </p>
                        </div>
                    </div>
                    <div className="citaCard__contenedor-derecho">
                        <img src={imgUrl} alt="" />
                    </div>
                    
            </button>
            <div className={`citaCard__veterinario ${ (gender === "Femenino") ?  "citaCard__hembra-date" : "citaCard__macho-date"}`}>
                <h1>Vt. { veterinario }</h1>
            </div>
            
        </Link>
    )
}
