import React, { useRef, useState } from 'react'
import { AiOutlineUserAdd, AiFillCheckCircle } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { ButtonUI } from "../../../UI/ButtonUI/ButtonUI";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postUsuario } from '../../../../helpers/API Consumer/test';
import { imageRandom } from '../../../../helpers/RandomImages/imagenessa';
import { VscEye,VscEyeClosed } from "react-icons/vsc";
import { SimpleModal } from '../../../layout/Modals/SimpleModal';
import { Link } from 'react-router-dom';

export const RegisterUser = ( {change_step} ) => {

    const [serverError, setServerError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [duplicatedData, setDuplicatedData] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [terminos, setTerminos] = useState(false);

    const [showPassword, setShowPassword] = useState("password")

    const handlePassword = () => {

        if ( showPassword === "password") {
            
            setShowPassword("text");
        }
        else {
            setShowPassword("password")
        }
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
    }


    return (
        <>

            {/* ----- REGISTRO COMO USUARIO ----- */}
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
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'>
                    <GoArrowSmallLeft />
                </div>
                <div className="user_icon">
                    <AiOutlineUserAdd />
                </div>
            </div>
            <Formik
                initialValues={{
                    documentoUs:"",
                    nombreUs:"",
                    apellidoUs:"",
                    sexoUs:"none",
                    telefonoUs:"",
                    correoUs:"",
                    passwordUs:""
                }}
                validate={(valores) => {

                    let errores = {};

                         if (!valores.documentoUs.trim()) {errores.documentoUs = 'Por favor ingrese un documento';}
                    else if (!/^\d{5,}$/.test(valores.documentoUs)) {errores.documentoUs = 'Requiere mín. 5 caracteres y solo números';}

                    else if (!valores.nombreUs.trim()) {errores.nombreUs = 'Por favor ingrese un nombre';}
                    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.nombreUs)) {errores.nombreUs = 'El nombre debe contener letras';}

                    else if (!valores.apellidoUs.trim()) {errores.apellidoUs = 'Por favor ingrese un apellido';}
                    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.apellidoUs)) {errores.apellidoUs = 'El apellido debe contener solo letras';}

                    else if (!valores.correoUs.trim()) {errores.correoUs = 'Por favor ingrese un correo';}
                    else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.correoUs)) {errores.correoUs = 'El correo no es válido';}

                    else if (!valores.telefonoUs.trim()) {errores.telefonoUs = 'Por favor ingresa un teléfono';}
                    else if (!/^\d{10,10}$/.test(valores.telefonoUs)) {errores.telefonoUs = 'El número telefonico no es válido';}

                    else if (valores.sexoUs==="none") {errores.sexoUs = 'Por favor ingrese el sexo';}

                    else if (!valores.passwordUs.trim()) {errores.passwordUs = 'Por favor ingrese una contaseña';}
                    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.passwordUs)) {errores.passwordUs = 'Debes incluir minúsculas, mayúsculas, números y caracteres especiales';}

                    return errores;
                }}
                onSubmit={( valores, {resetForm} ) => {

                    const img = imageRandom();
                    valores.imagenUsu = img;

                    let validacion = {};
                    postUsuario( valores )
                     .then( info => {
                            validacion = info
                            setLoading(true);
                            if ( validacion.status === 400 ) {
                                setDuplicatedData( true );
                                setServerError( false );
                                setLoading(false);
                            }
                            else if( validacion.status === 500 ){
                                setServerError( true );
                                setDuplicatedData( false );
                                setLoading( false );
                            }
                            else {
                                setDuplicatedData( false );
                                resetForm();
                                setLoading(false);
                                setRegistered( true );
                                window.location = "/login";
                            }
                        });

                }}
            >   
                {({ errors }) => (
                    <Form>
                        {
                            ( duplicatedData ) &&
                            <p id='registerUser__error'>Al parecer tu correo o documento ya están registrados</p>
                        }
                        {
                            ( serverError ) &&
                            <p id='registerUser__error'>Hubo un error en el registro, intentalo nuevamente.</p>
                        }
                        <Field 
                            type='text'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Documento'
                            name="documentoUs"
                            id="documento"
                        />
                        <ErrorMessage name='documentoUs' component={() => (<p className='warn__password-user'>{errors.documentoUs}</p>)} />

                        <div id='registro_column1'>
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Nombre'
                                name="nombreUs"
                                id="nombre"
                            />
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Apellido'
                                name="apellidoUs"
                                id="apellido"
                                />
                        </div>

                        <ErrorMessage name='nombreUs' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.nombreUs}</p>)} />
                        <ErrorMessage name='apellidoUs' component={() => (<p className='warn__password-user' style={{textAlign:"right"}}>{errors.apellidoUs}</p>)} />

                        <Field 
                            type='text'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Correo electrónico'
                            name="correoUs"
                            id="correo"
                        />
                        <ErrorMessage name='correoUs' component={() => (<p className='warn__password-user'>{errors.correoUs}</p>)} />

                        <div className="registro_sexo " id='registro_column1'>
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Teléfono'
                                name="telefonoUs"
                                id="telefono"

                            />

                            <Field name="sexoUs" as="select" id="select">
                                <option value="none">Selecciona el sexo</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </Field>
                        </div>
                        <ErrorMessage name='telefonoUs' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.telefonoUs}</p>)} />
                        <ErrorMessage name='sexoUs' component={() => (<p className='warn__password-user' style={{textAlign:"right"}}>{errors.sexoUs}</p>)} />
                        <div className="login_password_div">
                                <Field 
                                    type={showPassword}
                                    className = 'inputLogin inputRegistro'
                                    placeholder = 'Contraseña'
                                    name="passwordUs"
                                    id="password"
                                />
                                <button style={{top:"7px"}} className='btn' type='button' onClick={ handlePassword }>
                                    {
                                        showPassword === "password" ? <VscEye /> : <VscEyeClosed />
                                    }
                                </button>
                            </div>
                        <ErrorMessage name='passwordUs' component={() => (<p className='warn__password-user'>{errors.passwordUs}</p>)} />
                        <div className="sameline terminos-condiciones">
                            <input type="checkbox" onChange={ () => setTerminos( !terminos )} />
                            <p>Acepto los <Link className='anchor' to="/terminos-condiciones">Terminos y condiciones</Link></p>
                            

                        </div>
                        <ButtonUI 
                            text="Registrar"
                            style={`btnLogin ${ !terminos && "disabled"} ${( loading )? 'hidden' :( registered )? 'hidden' : ""}`}
                            type={"submit"}
                        />
                        {
                            ( loading ) && <div className='register__loading-div'><div className='spiner' id='login-spin'></div></div>
                        }
                        {
                            ( registered ) && <div className='registerUser__registered'><AiFillCheckCircle style={{fontSize:"45px",color:"#00c600"}}/><p>¡Registro exitoso!</p></div>
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}
