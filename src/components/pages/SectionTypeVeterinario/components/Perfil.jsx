import React from 'react'
import './styles.css'

export const Perfil = ( {data} ) => {
    console.log( data );
    return (
        <div className='perfilVeterinario'>
            <img className='img' src={data.imagenVete} alt="img" />
            <p className='p'>N° { data.documento }</p>
            <h3 className='h3'>{data.nombre} {data.apellidos}</h3>
            <p className='p'>{ data.especialidad }</p>
            <div className="cuadro">
                <p className='p'>{ data.correo }</p>
                <p className='p'>(+57) { data.telefono }</p>
            </div>
        </div>
    )
}
