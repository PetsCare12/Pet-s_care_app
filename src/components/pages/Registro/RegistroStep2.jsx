import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { MdOutlineCancel, MdNavigateNext } from 'react-icons/md';
import { InputUI } from '../../UI/InputUI/InputUI'
import { Login } from '../Login/Login'

export const RegistroStep2 = () => {
    return (
        <>
          
            <div className="register_container">
                <div className="registerData animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel'>
                        
                        <h2 >
                            Crea una cuesp2
                        </h2>
                        <Link to='/login'>
                            <div id='MdOutlineCancel'>
                                <MdOutlineCancel />
                            </div>
                        </Link>
                    </div>
                    
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
        </>
    )
}
