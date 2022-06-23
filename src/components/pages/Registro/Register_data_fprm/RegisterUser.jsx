import React, { useRef } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { ButtonUI } from "../../../UI/ButtonUI/ButtonUI";
import { registro_user, validate_user } from '../../../../helpers/dataAPI';

export const RegisterUser = ( {change_step} ) => {



    const handleSubmit = ( e ) => {
        e.preventDefault();

        const validacion = validate_user( "usuarios", e.target[0].value )

        console.log(validacion);
        const data_user={
            "documento": e.target[0].value,
            "nombre": e.target[1].value,
            "apellido": e.target[2].value,
            "correo": e.target[3].value,
            "telefono": e.target[4].value,
            "sexo": e.target[5].value,
            "password": e.target[6].value
        }

        // registro_user( 
        //     "usuarios", 
        //     data_user["documento"],
        //     data_user["nombre"],
        //     data_user["apellido"],
        //     data_user["telefono"],
        //     data_user["sexo"],
        //     data_user["correo"],
        //     data_user["password"],
        // )
    }

    return (
        <>

            {/* ----- REGISTRO COMO USUARIO ----- */}
            <div id='register_steps'>
                <div className='step color_step'>
                    1
                </div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>
                    2
                </div>
            </div>
            <div className='hr'>
                <hr />
            </div>
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'>
                    <GoArrowSmallLeft />
                </div>
                <div className="user_icon">
                    <AiOutlineUserAdd />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <InputUI 
                    type='text'
                    style = 'inputLogin inputRegistro'
                    txt = 'Documento'
                />
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
                    txt = 'Correo electrónico'
                />
                <div className="registro_sexo " id='registro_column1'>
                    <InputUI 
                        type='text'
                        style = 'inputLogin inputRegistro'
                        txt = 'Teléfono'
                    />
                    <select name="sexo" id="select">
                        <option selected={true} disabled={true} value="none">Selecciona el sexo</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                    </select>
                    
                </div>

                <InputUI 
                    type='password'
                    style = 'inputLogin inputRegistro'
                    txt = 'Contraseña'

                />

                <ButtonUI 
                text="Registrar"
                style="btnLogin"
                />
            </form>
        </>
    )
}
