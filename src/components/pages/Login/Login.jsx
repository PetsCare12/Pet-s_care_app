import { NavLink, Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import image from './perro_gato_animadoNew.png'
import { pets_images } from '../../../helpers/Pets_care_images';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react'
import { parseJwt } from '../../../helpers/getPayLoad'
import { inicioSesionUsuario } from '../../../helpers/API Consumer/test'
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {RiLockPasswordFill} from 'react-icons/ri';
import emailjs from '@emailjs/browser';

import './LoginStyle.css'

export const Login = () => {

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(0);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [emailSent, setEmailSent] = useState(false)
    
    const handleEmail = ( e ) => {
        e.preventDefault();

        emailjs.sendForm('service_kagt37a','template_o4defbc', e.target,'akQoWyMBUDzn4jOoB')
        .then( response => console.log( response ) )
        .catch( error => console.log( error ) )

    }
    // TODO -> Validar que el ingresado no esté inactivo

  return (
    <div className="loginContainer">
        <div className="login_cont_iz">
            <img src={image} alt="" />
            <img id='eslogan' src={ pets_images("./login/esloganNew.png")} alt="" />
        </div>
        <div className='login_cont_dr'>
            <ImagenUI 

                img={pets_images("./login/titleAzul.png")}
            />
            <div className="loginData">
                <p>Iniciar sesión en Pet's Care</p>
                <Formik
                    initialValues={{
                        nombreoCorreo: "",
                        password: ""
                    }}
                    validate={( valores ) => {
                        let errores = {};

                        if (!valores.nombreoCorreo.trim()) {errores.nombreoCorreo = 'Por favor ingrese un correo';}
                        else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.nombreoCorreo)) {errores.nombreoCorreo = 'El correo no es un correo válido';}
                        else if (!valores.password.trim()) {errores.password = 'Por favor ingrese una contaseña';}
                        
                        return errores;
                    }}
                    onSubmit={( valores, {resetForm} ) => {
                        setLoading(true);
                        inicioSesionUsuario( valores ).then( info => {

                            console.log( info.status );
                            setStatus(info.status)
                            
                            if ( info.status === 200 ) {

                                let token = info.data.tokenDeAcceso;
                                localStorage.setItem("token", token);
                                localStorage.setItem("usuario", JSON.stringify(parseJwt( token )));
                                const data = parseJwt( token );

                                setTimeout(()=>{
                                    setLoading(false);
                                    resetForm();
                                    // window.location = '/perfil'
                                },2000);
                            }
                            if ( info.status === 500 ) {
                                setLoading(false);
                            }
                        });


                        
                    }}
                >
                    {({ errors }) => (
                        <Form className='formLogin'>
                            { ( status === 500 ) && <p id='formLogin__badData'>El correo o contraseña son incorrectos</p> }
                            <Field 
                                type='text'
                                className = 'inputLogin'
                                placeholder = 'Correo electrónico'
                                name = "nombreoCorreo"
                            />
                            <ErrorMessage name='nombreoCorreo' component={() => (<p id='warn-login'>{errors.nombreoCorreo}</p>)} />
                            <Field 
                                type='password'
                                className = 'inputLogin'
                                placeholder = 'Contraseña'
                                name = "password"
                            />
                            <ErrorMessage name='password' component={() => (<p id='warn-login'>{errors.password}</p>)} />
                            <p onClick={()=>{setForgotPassword( true )}} id='login__forgotPassword'>Olvidé mi contraseña</p>
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
        {
            forgotPassword &&
            <SimpleModal>
                <div className='forgotPss__container recovery'>
                    <p onClick={()=> setForgotPassword( false )} className='cancel'>x</p>
                    <div className='div-imgEmail'>
                        <RiLockPasswordFill className='email-img' />  
                    </div>
                    <div>    
                        <h1>Recuperación de contaseña</h1>
                        <p>Ingresa el correo con el cual te registraste</p>
                    </div>
                    <form onSubmit={ handleEmail } className='inputRecovery-div'>
                        <input type="text" className="inputLogin" id='recovereyPassword-input' name='email' placeholder='Correo electrónico'/><br/>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </SimpleModal>
        }

        { 
            emailSent && 
            <SimpleModal>
                <div className='forgotPss__container'>
                    <div className='div-imgEmail'>
                        <HiOutlineMailOpen className='email-img' />  
                    </div>
                    <div>
                        <h1>Te hemos enviado un correo</h1>
                        <p>Por favor revisa tu bandeja para obtener las instrucciones en el cambio de tu contaseña.</p>
                    </div>
                    <button onClick={()=> setForgotPassword(false)} className='btn200'>Login</button>
                </div>
            </SimpleModal> 
        }
        
    </div>
  )
}
