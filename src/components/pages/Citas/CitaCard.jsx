import React from 'react'

export const CitaCard = ( {

    dateTime,
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
        <>
            <div className="citaCard__contenedor">
                <div className="citaCard__contenedor-izquierdo">
                    <div className="citaCard__contenedor-mascota">
                        <h1>
                            {nombreMc} 
                            {
                                ( gender === "male" ) ?
                                <img src={""} alt="petImg" />
                                : <img src={""} alt="petImg" />
                            }
                            
                        </h1>
                        <p className='citaCard__p-mascota'> {raza} </p>
                        <p className='citaCard__p-mascota'> {anios} Año(s)</p>
                    </div>
                    <div className="citaCard__contenedor-duenio">
                        <p className='citaCard__p-duenio'> {nombreDn} </p>
                        <p className='citaCard__p-duenio'> {telDn} </p>
                    </div>
                </div>
                <div className="citaCard__contenedor-derecho">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </>
    )
}
