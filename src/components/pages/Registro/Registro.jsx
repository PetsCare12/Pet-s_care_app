import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import './RegistroStyle.css'

export const Registro = () => {
  return (
    <div className="loginContainer">
        <ImagenUI />
        <div className="loginData">
            <h2>Crea una cuenta</h2>
            <p id='p1Registro'>Es rápido y fácil</p>
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
  )
}