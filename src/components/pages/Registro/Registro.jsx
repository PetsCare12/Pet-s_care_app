import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { MdOutlineCancel } from 'react-icons/md';
import { InputUI } from '../../UI/InputUI/InputUI'
import { Login } from '../Login/Login'
import { useEffect, useState } from 'react';
import './RegistroStyle.css'

export const Registro = () => {

    const [steps, setSteps] = useState(1);

    const step_change = () => {

        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        const line1 = document.getElementById('linea_step1');
        const line2 = document.getElementById('linea_step2');
        

        if ( steps === 1 ) {
            step1.classList.add('color_step');
        }
        else if ( steps === 2 ){
            step1.classList.add('color_step');
            step2.classList.add('color_step');
            line1.classList.add('color_linea_step');
        }
        else if ( steps === 3 ){
            step1.classList.add('color_step');
            step2.classList.add('color_step');
            step3.classList.add('color_step');
            line1.classList.add('color_linea_step');
            line2.classList.add('color_linea_step');
        }
    }

    useEffect( () => {

        step_change()
    }, [steps])


  return (
      <div>
          
          <div className="register_container">
            <div className="registerData animate__animated animate__fadeIn">
                <div id='titulo_MdOutlineCancel'>
                    
                    <h2 >
                        Crea una cuenta
                    </h2>
                    <Link to='/login'>
                        <div id='MdOutlineCancel'>
                            <MdOutlineCancel />
                        </div>
                    </Link>
                </div>
                
                <div id='register_steps'>
                    <div className='step' id='step1'>
                        1
                    </div >
                    <div className='linea_step' id='linea_step1'>————</div>
                    <div className='step' id='step2'>
                        2
                    </div>
                    <div className='linea_step' id='linea_step2'>————</div>
                    <div className='step' id='step3'>
                        3
                    </div>
                </div>
                <div className='hr'>
                    <hr />
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
                
                
                <ButtonUI 
                    style='btnLoginCrear btnRegistroRegistrate'
                    text='Registrase'
                />

                <Link id="registro_cuenta_existente" to={"/login"}>
                    ¿Ya tienes una cuenta?
                </Link>

            </div>
        </div>
        <Login />
      </div>

        
        
  )
}