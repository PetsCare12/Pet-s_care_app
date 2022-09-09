import React, { useState } from 'react'
import { SimpleModal } from '../../../layout/Modals/SimpleModal'

export const UserUpdate = ({ user, data }) => {

    // const [nombre, setNombre] = useState(user.nombreUs);
    // const [apellido, setApellido] = useState(user.apellidoUs);
    // const [telefono, setTelefono] = useState(user.telefonoUs);
    // const [sexo, setSexo] = useState(user.sexoUs);
    // const [correo, setCorreo] = useState(user.correoUs);

    // const handleNombre = e => setNombre( e.target.value );
    // const handleApellido = e => setApellido( e.target.value );
    // const handleTelefono = e => setTelefono( e.target.value );
    // const handleSexo = e => setSexo( e.target.value );
    // const handleCorreo = e => setCorreo( e.target.value );

    console.log( data );

    return (
        <SimpleModal>
            <div className='update__container'>
                <h1>Usuario</h1>
                {/* <input type="text" value={nombre}   onChange={ handleNombre }/>
                <input type="text" value={apellido} onChange={ handleApellido }/>
                <input type="text" value={telefono} onChange={ handleTelefono }/>
                <input type="text" value={sexo}     onChange={ handleSexo }/>
                <input type="text" value={correo}   onChange={ handleCorreo }/> */}
            </div>
        </SimpleModal>
    )
}
