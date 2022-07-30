import React from 'react'

export const PhotoProfile = ( {img} ) => {
    return (
        <>
            <div className='photoProfile__background'
                style={{
                    background:`url("${img}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                }}  
            ></div>
            <div className="photoProfile">
                <img src={img} alt="foto-perfil" />
            </div>
        </>
    )
}
