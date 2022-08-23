import { Link } from 'react-router-dom'
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
import { imageRandom } from '../../../helpers/RandomImages/imagenessa';
import { generateCode } from '../../../helpers/API Consumer/recovery-password';

export const Login = () => {

    // EL ESTADO
    // 1 - BIEN
    // 2 - ELIMINADO
    // 3 - PENDIENTE

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [loadingEmail, setLoadingEmail] = useState(false);
    const [mssStatus, setMssStatus] = useState(false);
    const [messageStatus, setMessageStatus] = useState("");


    const handleClose = () => {
        setEmailSent( false );
        setErrorEmail( false );
        setUserEmail( "" );
    }

    const handleUserEmail = ( e ) =>{

        setUserEmail( e.target.value );
    }

    imageRandom()
    
    const handleEmail = ( e ) => {
        e.preventDefault();

        setLoadingEmail( true );
        let key = "";

        generateCode( userEmail ).then( info => {

            if ( info.status === 200 ) {
                key = info.data.key;
                const data = document.createElement('form');
                
                data.append(`
                    <form>  
                        <input type="text" name="email" value="${userEmail}">  
                        <input type="text" name="key" value="${key}">  
                    </form>  
                `)
                emailjs.sendForm('service_kagt37a','template_4f77v7z', data ,'akQoWyMBUDzn4jOoB')
                .then( response => {
                    console.log( response );
                    if ( response.status === 200 ) {
                        
                        setEmailSent( true );
                        setForgotPassword( false );
                        setErrorEmail( true );
                        setLoadingEmail( false );
                    }
                } )
                .catch( error => {
                    setErrorEmail( true );
                    setLoadingEmail( false );
                } )
            }
            else {
                console.log( "Error" );
                setLoading( false );
            }
        } );


    }



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
                            setStatus(info.status)
                            if ( info.status === 200 ) {

                                let token = info.data.tokenDeAcceso;
                                localStorage.setItem("token", token);
                                localStorage.setItem("usuario", JSON.stringify(parseJwt( token )));
                                const data = parseJwt( token );
                                
                                if ( data.estado === 1 ) {
                                    resetForm();
                                    window.location = '/perfil';
                                }
                                else if( data.estado === 2 ) {
                                    console.log( "Mal" );
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("usuario");
                                    setMessageStatus( "Tu estado es inactivo. Comunicate con el administrador para solventar el problema" );
                                    setMssStatus( true );
                                }
                                else {
                                    console.log( "Pendiente" );
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("usuario");
                                    setMessageStatus( "Tu registro está siendo validado, por favor se paciente" );
                                    setMssStatus( true );
                                }

                                setLoading(false);
                            }
                            if ( info.status === 500 ) {
                                setLoading(false);
                            }
                            if ( info.status === 0 ) {
                
                                setLoading( false );
                            }
                        });


                        
                    }}
                >
                    {({ errors }) => (
                        <Form className='formLogin'>
                            { ( status === 500 ) && <p id='formLogin__badData'>El correo o contraseña son incorrectos</p> }
                            { ( status === 0 ) && <p id='formLogin__badData'>Estamos presentando problemas. Intentalo más tarde</p> }
                            { mssStatus && 
                            
                                <SimpleModal>
                                    <div className='perfil__statusUser'>
                                        <h1>¡Atención!</h1>
                                        <p>{messageStatus}</p>
                                        <button onClick={()=> setMssStatus( false )} id="btnh30" className='btn200'>Ok</button>
                                    </div>
                                </SimpleModal> }

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
                <div className='forgotPss__container recovery animate__animated animate__fadeIn'>
                    <p onClick={()=> setForgotPassword( false )} className='cancel'>x</p>
                    <div className='div-imgEmail'>
                        <RiLockPasswordFill className='email-img' />  
                    </div>
                    <div>    
                        <h1>Recuperación de contaseña</h1>
                        <p>Ingresa el correo con el cual te registraste</p>
                    </div>
                    <form onSubmit={ handleEmail } className='inputRecovery-div'>
                        <input value={userEmail} onChange={handleUserEmail} type="text" className="inputLogin" id='recovereyPassword-input' name='email' placeholder='Correo electrónico'/><br/>
                        <button type='submit' className={`"" ${ loadingEmail && "hidden" }`}>Enviar</button>
                        { loadingEmail &&  <div id='login-spin' className='spiner'></div> }
                    </form>
                    { errorEmail && <p className='errorEmail'>Hubo un error al enviar el correo, por favor intentalo nuevamente <span onClick={()=> setErrorEmail(false)} id='spanEmailError'>x</span></p> }
                </div>
            </SimpleModal>
        }

        { 
            emailSent && 
            <SimpleModal>
                <div className='forgotPss__container animate__animated animate__fadeIn'>
                    <div className='div-imgEmail'>
                        <HiOutlineMailOpen className='email-img' />  
                    </div>
                    <div>
                        <h1>Te hemos enviado un correo a <br/><span>{userEmail}</span></h1>
                        <p>Por favor revisa tu bandeja de entrada o en span para obtener el código.</p>
                    </div>
                    <input type="text" className='inputEditMascota input-w150' />
                    <button onClick={handleClose} className='btnAuto'>verificar</button>
                </div>
            </SimpleModal> 
        }
        
    </div>
  )
}
