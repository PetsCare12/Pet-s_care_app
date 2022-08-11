import { NavLink, Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import image from './perro_gato_animadoNew.png'
import { pets_images } from '../../../helpers/Pets_care_images';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './LoginStyle.css'
import { useState } from 'react'
import { parseJwt } from '../../../helpers/getPayLoad'
import { inicioSesionUsuario } from '../../../helpers/API Consumer/test'

export const Login = () => {

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(0);

    // TODO -> Validar que el ingresado no esté inactivo

  return (
    <div className="loginContainer">
        <div className="login_cont_iz">
            <img src={image} alt="" />
            <img id='eslogan' src={ pets_images("./login/esloganNew.png")} alt="" />
            {/* <p><b>¡</b> Sé la persona que tu perro cree que eres <b>!</b></p> */}
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
