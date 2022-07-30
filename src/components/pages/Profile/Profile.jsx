import React from 'react'
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

    return (
        <div className='profile'>
            <div className="profile__left">

                <PhotoProfile 
                    img={"https://media.gq.com.mx/photos/6165c414e1224bdb3d42c49b/3:2/w_1998,h_1332,c_limit/habitos-de-un-hombre-con-estilo-como-se-comporta.jpg"}
                />

            </div>
            <div className="profile__right">

                <h1 className='profile__section'>Mis mascotas</h1>
                <button className='btnShort'>Agregar mascota</button>
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



