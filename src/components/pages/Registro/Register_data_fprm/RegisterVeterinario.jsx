import React from 'react'
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { InputUI } from '../../../UI/InputUI/InputUI';
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaUserNurse } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

export const RegisterVeterinario = ( {change_step} ) => {

    const [loading, setLoading] = useState(false)

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
                    <FaUserNurse />
                </div>
            </div>
            
            <Formik
                initialValues={{
                    documento:"",
                    nombre:"",
                    apellido:"",
                    sexo:"",
                    correo:"",
                    especialidad:"",
                    password:""
                }}
                validate={( valores ) => {
                    let errores = {};
                         if (!valores.documento.trim()) { errores.documento = "Por favor ingrese su documento" }
                    else if( !valores.nombre.trim() ){ errores.nombre = "Por favor ingrese su nombre" }
                    else if ( !valores.apellido.trim()) { errores.apellido = "Por favor ingrese su apellido" }
                    else if( valores.sexo === "none" ){ errores.sexo = "Por favor ingrese su sexo" }
                    else if( !valores.correo.trim() ){ errores.correo = "Por favor ingrese su correo" }
                    else if( !valores.especialidad.trim() ){ errores.especialidad = "Por favor ingrese su especialidad" }
                    else if( !valores.password.trim() ){ errores.password = "Por favor ingrese su contraseña" }
                        
                return errores; 
                }}
                onSubmit = {( valores, {resetForm} ) => {
                    console.log( valores );
                    setLoading(true);
                    setTimeout(()=>{

                        setLoading(false);
                        resetForm();
                    },2000)
                }}
            >

                {( {errors} ) => (
                    <Form className='registerClinica__form'>
                        <Field 
                            type='text'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Documento'
                            name = "documento"
                        />
                        <div id='registro_column1'>
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Nombre'
                                name = "nombre"
                            />
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Apellido'
                                name = "apellido"
                            />
                        </div>
                        <ErrorMessage name='nombre' component={() => (<p className='warn__password-user'>{errors.nombre}</p>)} />
                        <ErrorMessage name='apellido' component={() => (<p className='warn__password-user'>{errors.apellido}</p>)} />
                        <div className="registro_sexo">
                            <Field name="sexo" as="select" id="select">
                                <option selected={true} value="none">Selecciona el sexo</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </Field>
                        </div>
                        <ErrorMessage name='sexo' component={() => (<p className='warn__password-user'>{errors.sexo}</p>)} />
                        <div id="registro_column1">
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Correo electrónico'
                                name = "correo"
                            />
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Especialidad'
                                name = "especialidad"
                            />
                        </div>
                        <ErrorMessage name='correo' component={() => (<p className='warn__password-user'>{errors.correo}</p>)} />
                        <ErrorMessage name='especialidad' component={() => (<p className='warn__password-user'>{errors.especialidad}</p>)} />
        
                        <Field 
                            type='password'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Contraseña'
                            name = "password"
                        />
                        <ErrorMessage name='password' component={() => (<p className='warn__password-user'>{errors.password}</p>)} />
                        <ButtonUI 
                            text="Registrar"
                            style={`btnLogin ${ loading && "hidden" }`}
                            type={"submit"}
                        />
                        {
                            ( loading ) && <div className='register__loading-div'><div className='spiner' id='login-spin'></div></div>
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}
