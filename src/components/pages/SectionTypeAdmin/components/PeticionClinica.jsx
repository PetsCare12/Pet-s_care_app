import React from 'react'

const PeticionClinica = ( {nit,nombre} ) => {
    return (
        <button className='peticionesCli__container'>
            <div>
                <h1 className='nit'>N° {nit}</h1>
                <p className='nombre'>{nombre}</p>
            </div>
            <div>
                <button className='peticionesCli__button aceptar'>Aceptar</button>
                <button className='peticionesCli__button denegar'>Denegar</button>
            </div>
        </button>
    )
}

export default PeticionClinica;