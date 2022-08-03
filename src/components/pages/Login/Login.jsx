import { NavLink, Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import image from './perro_gato_animado.png'
import { pets_images } from '../../../helpers/Pets_care_images';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './LoginStyle.css'
import { useState } from 'react'

export const Login = () => {

    const [loading, setLoading] = useState(false)

  return (
    <div className="loginContainer">
        <div className="login_cont_iz">
            <img src={image} alt="" />
            <img id='eslogan' src={ pets_images("./login/eslogan.png")} alt="" />
            {/* <p><b>¡</b> Sé la persona que tu perro cree que eres <b>!</b></p> */}
        </div>
        <div className='login_cont_dr'>
            <ImagenUI 

                img={pets_images("./login/title.png")}
            />
            <div className="loginData">
                <p>Iniciar sesión en Pet's Care</p>
                <Formik
                    initialValues={{
                        correo: "",
                        password: ""
                    }}
                    validate={( valores ) => {
                        let errores = {};

                        if (!valores.correo.trim()) {errores.correo = 'Por favor ingrese un correo';}
                        else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.correo)) {errores.correo = 'El correo no es un correo válido';}
                        else if (!valores.password.trim()) {errores.password = 'Por favor ingrese una contaseña';}
                        
                        return errores;
                    }}
                    onSubmit={( valores, {resetForm} ) => {
                        setLoading(true);
                        setTimeout(()=>{
                            setLoading(false);
                            resetForm();
                            window.location = '/perfil'
                        },2000)
                        console.log(valores);
                    }}
                >
                    {({ errors }) => (
                        <Form className='formLogin'>
                            <Field 
                                type='text'
                                className = 'inputLogin'
                                placeholder = 'Correo electrónico'
                                name = "correo"
                            />
                            <ErrorMessage name='correo' component={() => (<p id='warn-login'>{errors.correo}</p>)} />
                            <Field 
                                type='password'
                                className = 'inputLogin'
                                placeholder = 'Contraseña'
                                name = "password"
                            />
                            <ErrorMessage name='password' component={() => (<p id='warn-login'>{errors.password}</p>)} />
                            <ButtonUI 
                                style={`btnLogin ${ (loading) && "hidden" }`}
                                type={"submit"}
                                text='Iniciar sesión'
                            />
                            {
                                (loading) && <div id='login-spin' className='spiner'></div>
                            }
                        </Form>
                    )}
                </Formik>
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
        
    </div>
  )
}
