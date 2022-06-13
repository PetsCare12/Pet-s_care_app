import React from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'

export const RegisterUser = () => {

    return (
        <div>

            {/* ----- REGISTRO COMO USUARIO ----- */}
            <div id='registro_column1'>
                <InputUI 
                    type='text'
                    style = 'inputLogin inputRegistro'
                    txt = 'Nombre'
                />
                <InputUI 
                    type='text'
                    style = 'inputLogin inputRegistro'
                    txt = 'Apellido'
                />
            </div>
            <InputUI 
                type='email'
                style = 'inputLogin inputRegistro'
                txt = 'Correo electrónico nuevo'
            />
            <InputUI 
                type='password'
                style = 'inputLogin inputRegistro'
                txt = 'Contraseña'
            />
            <div className="registro_sexo">
            <p id='p2Registro'>Sexo:</p>
                <div className="cont_registro_checkbox">
                    <div className="registro_checkbox">

                        <p>Hombre</p>
                        <InputUI type='radio'/>
                        
                    </div>
                    <div className="registro_checkbox">

                        <p>Mujer</p>
                        <InputUI type='radio'/>

                    </div>
                    <div className="registro_checkbox">

                        <p>Personalizado</p>
                        <InputUI type='radio'/>

                    </div>
                </div>
                
            </div>
        </div>
    )
}
