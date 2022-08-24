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

import './LoginStyle.css'

export const Login = () => {

    // EL ESTADO
    // 1 - BIEN
    // 2 - ELIMINADO
    // 3 - PENDIENTE

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null);
    const [mssStatus, setMssStatus] = useState(false);
    const [messageStatus, setMessageStatus] = useState("");




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

                                // TODO - CLINICA al iniciar sesion que lo envie a /tuClinica

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
                            <p onClick={()=>{window.location = "/recovery-password"}} id='login__forgotPassword'>Olvidé mi contraseña</p>
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
