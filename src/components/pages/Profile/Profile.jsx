import React from 'react'
import { MascotasCard } from './MascotasCard';
import './Profile.css';

const data = [
    {id: 1, name:"Pepito", raza:"Dragón Barbudo", age:2, image:"https://d2devwt40at1e2.cloudfront.net/api/file/7q3dwheTZezbj5KDSJ0Z"},
    {id: 2, name:"Lucas", raza:"Labrador", age:2, image:"https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg"},
    {id: 3, name:"Michi", raza:"Gato", age:2, image:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"},
    {id: 4, name:"Alfonso", raza:"Pajarín", age:2, image:"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/02/24/un-loro.jpeg"},

  ]

export const Profile = () => {

    return (
        <div className='profile'>
            <div className="profile__left"></div>
            <div className="profile__right">
                <h1>Mascotas</h1>
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
    )
}



