import React from 'react'
import { aceptarPeticion } from '../../../../helpers/API Consumer/useClinicasConsumer'

const PeticionClinica = ( {nit,nombre,dataCli,token} ) => {

    const handleAccept = () => {

        // aceptarPeticion( dataCli, dataCli.nit, token )
        // .then( info => console.log( info ) )
    }

    return (
        <button className='peticionesCli__container'>
            <div>
                <h1 className='nit'>N° {nit}</h1>
                <p className='nombre'>{nombre}</p>
            </div>
            <div>
                <button onDoubleClick={handleAccept} className='peticionesCli__button aceptar'>Aceptar</button>
                <button className='peticionesCli__button denegar'>Denegar</button>
            </div>
        </button>
    )
}

export default PeticionClinica;