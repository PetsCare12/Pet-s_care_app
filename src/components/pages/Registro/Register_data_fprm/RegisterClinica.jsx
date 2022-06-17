import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaHospital } from 'react-icons/fa';
import './type_registers.css';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { RegisterClinica2 } from './RegisterClinica2';

export const RegisterClinica = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)


    const step_3 = () => {
        setStep_cli(2)
    }
    const step_2 = () => {
        setStep_cli(1)
    }

    return (
        <>

            {/* ----- REGISTRO COMO CLINICA ----- */}

            {
                ( step_cli === 1 )?
            
                <>
                    <div id='register_steps'>
                        <div className='step color_step'>
                            1
                        </div >
                        <div className='linea_step color_linea' >——</div>
                        <div className='step color_step'>
                            2
                        </div>
                        <div className='linea_step' >——</div>
                        <div className='step'>
                            3
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
                            <FaHospital />
                        </div>
                    </div>

                    <InputUI 
                        type='number'
                        style = 'inputLogin inputRegistro'
                        txt = 'NIT'
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
                            txt = 'Dirección'
                        />
                    </div>

                    <InputUI 
                        type='password'
                        style = 'inputLogin inputRegistro'
                        txt = 'Contraseña'
                    />

                    <div style={{
                        alignItems: 'center',
                        display:'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}>
                        
                    </div>

                    <div id='div_100'>
                        <div onClick={step_3} style={{width:"40%"}}>
                            <ButtonUI 
                                text="Siguiente"
                                style="btnLogin"
                            />
                        </div>
                        
                    </div>
                </>

                : <RegisterClinica2 change_step={step_2}/>
            }
               
            
        </>
    )
}
