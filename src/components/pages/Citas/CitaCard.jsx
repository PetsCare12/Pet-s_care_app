import React from 'react'

export const CitaCard = ( {arr} ) => { 
    console.log(arr);

    return (
        <>
            {
                arr.map((item)=>(
                    <div>
                        <div className='cita_card'>
                            <img className='img' src={item.documentovt.imagenVete} alt="vet" />
                            <h1 className='h1'>{item.documentovt.nombre} {item.documentovt.apellidos}</h1>
                            <p className='p'>{item.fecha}</p>
                            <p className='p hour'>{item.horaInicio}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
