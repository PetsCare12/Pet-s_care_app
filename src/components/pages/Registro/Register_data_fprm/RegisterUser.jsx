import React from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { ButtonUI } from "../../../UI/ButtonUI/ButtonUI";

export const RegisterUser = ( {change_step} ) => {

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
            <div className="registro_sexo">

                <select name="" id="select">
                    <option selected={true} disabled={true} value="none">Selecciona el sexo</option>
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                    <option value="personalizado">Personalizado</option>
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
        </>
    )
}
