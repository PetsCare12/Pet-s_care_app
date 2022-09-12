import React from 'react'

export const CitaCard = ( props ) => { 

    return (
        <div>
            <div className='cita_card'>
                <img className='img' src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" alt="vet" />
                <h1 className='h1'>Vt. {props.documentovt.nombre} {props.documentovt.apellidos}</h1>
                <h2 className='h2'>{props.documentovt.especialidad}</h2>
                <p className='p'>{props.fecha}</p>
                <p className='p hour'>{props.horaInicio}</p>
            </div>
        </div>
    )
}
