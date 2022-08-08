import React, { useState } from 'react'

export const PhotoProfile = ( {img} ) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));

    return (
        <>
            <div className='photoProfile__background'>
                <img className='photoProfile__background-img' src={img} alt="" />
            </div>
            <div className="photoProfile">
                <img src={img} alt="foto-perfil" />
            </div>
        </>
    )
}
