import { NavLink, Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import './LoginStyle.css'

export const Login = () => {
  return (
    <div className="loginContainer">
        <ImagenUI />
        <div className="loginData">
            <p>Iniciar sesión en Pet's Care</p>
            <InputUI 
                type='email'
                style = 'inputLogin'
                txt = 'Correo electrónico'
            />
            <InputUI 
                type='password'
                style = 'inputLogin'
                txt = 'Contraseña'
            />
            <ButtonUI 
                style='btnLogin'
                text='Iniciar sesión'
            />
            <div className='hr'>
                <hr />
                o
                <hr />
            </div>
            <Link to="/registro"className='enlaceBtn'>
                <ButtonUI 
                    style='btnLoginCrear'
                    text='Crear cuenta nueva'
                />
            </Link>
            
        </div>
    </div>
  )
}
