import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { MdOutlineCancel, MdNavigateNext } from 'react-icons/md';
import { InputUI } from '../../UI/InputUI/InputUI'
import { Login } from '../Login/Login'
import { RegisterClinica } from './Register_data_fprm/RegisterClinica';
import { useEffect, useState } from 'react';
import { RegisterUser } from './Register_data_fprm/RegisterUser';
import { RegisterVeterinario } from './Register_data_fprm/RegisterVeterinario';

export const RegistroStep2 = ( {steps, step_change} ) => {


    const handleChangeStepBack = () => {
        step_change(1)
    }

    const ele = JSON.parse(localStorage.getItem('user_type'));


    return (
        <>
          
            <div className="register_container">
                <div className="registerDataAuto animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel'>
                        
                        <h2 >
                            Ingresa los datos
                        </h2>
                        <Link to='/login'>
                            <div id='MdOutlineCancel'>
                                <MdOutlineCancel />
                            </div>
                        </Link>
                    </div>

                    {

                        ( ele === "clinica" )
                        ? <RegisterClinica change_step={handleChangeStepBack}/>
                        : ( ele === "veterinario" )
                        ? <RegisterVeterinario change_step={handleChangeStepBack}/>
                        : <RegisterUser change_step={handleChangeStepBack}/>
                    }
                    
                    
                    

                </div>
            </div>
        </>
    )
}
