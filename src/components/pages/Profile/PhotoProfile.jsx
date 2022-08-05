import React, { useState } from 'react'

export const PhotoProfile = ( {img} ) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));

    return (
        <>
            <div className='photoProfile__background'
                style={{
                    background:`url("${user.img}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                }}  
            ></div>
            <div className="photoProfile">
                <img src={user.img} alt="foto-perfil" />
            </div>
        </>
    )
}
