import React from 'react'
import { MascotasCard } from '../MascotasCard'

export const SectionMascotas = () => {

    const data = [
        {id: 1, name:"Pepito", raza:"Dragón Barbudo", age:2, image:"https://d2devwt40at1e2.cloudfront.net/api/file/7q3dwheTZezbj5KDSJ0Z"},
        {id: 2, name:"Lucas", raza:"Labrador", age:2, image:"https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg"},
        {id: 3, name:"Michi", raza:"Gato", age:2, image:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"},
        {id: 4, name:"Alfonso", raza:"Pajarín", age:2, image:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/02/24/un-loro.jpeg"},
        {id: 5, name:"Lulú", raza:"Coker", age:9, image:"https://cdn.pixabay.com/photo/2019/09/01/18/32/coker-4445774__480.jpg"},
    
    ]

    return (
        <div className='profile__right-mascotas animate__animated animate__fadeIn'>
            <h1 className='profile__section '>Mis mascotas</h1>
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
    )
}
