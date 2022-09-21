import React, { useRef } from 'react'
import { peticion } from '../../../../helpers/API Consumer/useClinicasConsumer'

const PeticionClinica = ( props ) => {

    const {nit,nombre,dataCli,token,reload,setReload} = props;

    const handleAccept = () => {

        peticion( dataCli.nit, token, 1 )
        .then( info => {
            console.log( info )
            setReload( !reload );
        } )
    }

    const handleDenied = () => {

        peticion( dataCli.nit, token, 2 )
        .then( info => {
            console.log( info )
            setReload( !reload );
        } )
    }

    return (
        <button className='peticionesCli__container animate__animated'>
            <div>
                <h1 className='nit'>N° {nit}</h1>
                <p className='nombre'>{nombre}</p>
            </div>
            <div>
                <button onClick={handleAccept} className='peticionesCli__button aceptar'>Aceptar</button>
                <button onClick={handleDenied} className='peticionesCli__button denegar'>Denegar</button>
            </div>
        </button>
    )
}

export default PeticionClinica;