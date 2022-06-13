import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { GoArrowSmallLeft, GoArrowSmallRight } from 'react-icons/go';
import './type_registers.css';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { RegisterClinica2 } from './RegisterClinica2';

export const RegisterClinica = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)


    const step_3 = () => {
        setStep_cli(2)
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

                    <div id='register_steps'>
                        <div onClick={change_step} className="rows_register">
                            <GoArrowSmallLeft />
                        </div>
                        <div onClick={step_3} className="rows_register">
                            <GoArrowSmallRight />
                        </div>
                        
                    </div>
                </>

                : <RegisterClinica2 />
            }
               
            
        </>
    )
}
