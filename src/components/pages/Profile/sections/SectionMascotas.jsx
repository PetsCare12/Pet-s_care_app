import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsuario_mascotas } from '../../../../helpers/API Consumer/test'
import { pets_images } from '../../../../helpers/Pets_care_images'
import { MascotasCard } from '../MascotasCard'

export const SectionMascotas = ( {userData} ) => {

    const [mascotaData, setMascotaData] = useState([])

    useEffect(()=>{

        getUsuario_mascotas( userData.documentoUs )
        .then( mascota => setMascotaData( mascota.mascotas ) )

    }, [userData])

    return (
        <div className='profile__right-mascotas animate__animated animate__fadeIn'>
            <h1 className='profile__section '>Mis mascotas</h1>
            <button onClick={()=> window.location = "/registro_mascotas"} className='btnAgregarMascota'>Crear mascota</button>
            <div className="profile__misMascotas">
                {
                    ( mascotaData ) &&
                    mascotaData.map( pet => (

                        <MascotasCard
                        key={pet.codigo}
                        codigoMc = {pet.codigo}
                        name={pet.nombre}
                        age={pet.edad}
                        raza={pet.raza}
                        image={pet.imagenMascota}
                        discapacidad={pet.discapacidad}
                        sexo={pet.sexo}
                        peso = {pet.peso}
                        tipo = {pet.tipoAnimal}
                        color = {pet.color}
                        />

                    ))
                }
                {
                    ( mascotaData.length === 0 ) && 
                        <div className='perfil__mascotas-empty'>
                            <img src={pets_images("./perfil/perroempty.png")} alt="" />
                            <p>¿Aún no tienes mascotas? <Link to={'/registro_mascotas'}>registra una aquí.</Link></p>
                        </div>

                    
                }
            </div>
        </div>
    )
}
