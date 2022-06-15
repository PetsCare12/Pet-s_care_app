import React from 'react'
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { InputUI } from '../../../UI/InputUI/InputUI';
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaUserNurse } from 'react-icons/fa';

export const RegisterVeterinario = ( {change_step} ) => {
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
                    <FaUserNurse />
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
            <div className="registro_sexo">
                <select name="" id="select">
                    <option selected={true} disabled={true} value="none">Sexo</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="personalizado">Otro</option>
                </select>
                
            </div>
            <div id="registro_column1">
                <InputUI 
                    type='email'
                    style = 'inputLogin inputRegistro'
                    txt = 'Correo electrónico'
                />
                <InputUI 
                    type='text'
                    style = 'inputLogin inputRegistro'
                    txt = 'Especialidad'
                />

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
