import React from 'react'

export const MascotasCard = ({ name, age, raza, image }) => {
    return (
        <button className='mascotaCard__button'>
            <div className="mascotaCard" 
            style={{
                background:`url("${image}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>

                <div className="mascotaCard__mascota">
                <div className="mascotaCard__info">
                    <h1>{name}</h1>
                    <h2>{raza}</h2>
                    <h2>{age} años</h2>
                </div>
                </div>

            </div>
        </button>
    )
}
