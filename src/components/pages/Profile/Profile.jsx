import React, { useState } from 'react'
import { useRef } from 'react';
import { MascotasCard } from './MascotasCard';
import { PhotoProfile } from './PhotoProfile';
import './Profile.css';

const data = [
    {id: 1, name:"Pepito", raza:"Dragón Barbudo", age:2, image:"https://d2devwt40at1e2.cloudfront.net/api/file/7q3dwheTZezbj5KDSJ0Z"},
    {id: 2, name:"Lucas", raza:"Labrador", age:2, image:"https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg"},
    {id: 3, name:"Michi", raza:"Gato", age:2, image:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"},
    {id: 4, name:"Alfonso", raza:"Pajarín", age:2, image:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/02/24/un-loro.jpeg"},
    {id: 5, name:"Lulú", raza:"Coker", age:9, image:"https://cdn.pixabay.com/photo/2019/09/01/18/32/coker-4445774__480.jpg"},

  ]

export const Profile = () => {

    const [activeBtn, setActiveBtn] = useState("")

    return (
        <div className='profile__contenedor'>
            <div className='profile'>
                <div className="profile__left">

                    <PhotoProfile 
                        img={"https://cdn1.matadornetwork.com/blogs/2/2019/03/frases-sobre-mujeres-shutterstock_400610314-560x420.jpg"}
                    />

                    <button onClick={() => {setActiveBtn("perfil")}} className={`btnLogin mt-5 ${(activeBtn === "perfil") && "perfil_active"}`}>Perfil</button>
                    <button onClick={() => {setActiveBtn("mascotas")}} className={`btnLogin ${(activeBtn === "mascotas") && "perfil_active"}`}>Mascotas</button>
                    <button onClick={() => {setActiveBtn("clinicas")}} className={`btnLogin ${(activeBtn === "clinicas") && "perfil_active"}`}>Clinicas</button>
                </div>
                <div className="profile__right">

                    <h1 className='profile__section'>Mis mascotas</h1>
                    <button className='btnAgregarMascota'>Crear mascota</button>
                    <div className="profile__misMascotas">
                        {
                            data.map( pet => (

                                <MascotasCard
                                key={pet.id}
                                name={pet.name}
                                age={pet.age}
                                raza={pet.raza}
                                image={pet.image}
                                />

                            ))
                        }
                    </div>
                    
                </div>     
            </div> 
        </div>
        
    )
}



