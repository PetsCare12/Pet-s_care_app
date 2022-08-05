import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaHospital } from 'react-icons/fa';
import './type_registers.css';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const RegisterClinica = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)
    const [loading, setLoading] = useState(false);


    return (
        <>

            {/* ----- REGISTRO COMO CLINICA ----- */}

            {
                ( step_cli === 1 ) &&
            
                <>
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
                            <FaHospital />
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            nit:"",
                            nombre:"",
                            direccion:""
                        }}
                        validate={( valores ) => {
                            let errores = {};

                                 if( !valores.nombre.trim() ){ errores.nombre = "Por favor ingrese su nombre" }
                            else if ( !valores.nit.trim()) { errores.nit = "Por favor ingrese su NIT" }
                            else if( !valores.direccion.trim() ){ errores.direccion = "Por favor ingrese su dirección" }
                                
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
                                <p className='registerClinica__info'>Ten en cuenta que al registrarte como clínica se enviará la petición de tu registro al administrador. Allí se revisarán tus credenciales</p>
                                <Field 
                                    type='text'
                                    className = 'inputLogin inputRegistro'
                                    placeholder = 'Nombre de la clínica'
                                    name = "nombre"
                                />
                                <ErrorMessage name='nombre' component={() => (<p className='warn__password-user'>{errors.nombre}</p>)} />
                                <div id='registro_column1'>
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = 'NIT'
                                        name = "nit"
                                    />
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = 'Dirección de la clínica'
                                        name = "direccion"
                                    />
                                </div>
                                <ErrorMessage name='nit' component={() => (<p className='warn__password-user'>{errors.nit}</p>)} />
                                <ErrorMessage name='direccion' component={() => (<p className='warn__password-user'>{errors.direccion}</p>)} />

                                <div style={{
                                    alignItems: 'center',
                                    display:'flex',
                                    flexDirection: 'column',
                                    width: '100%'
                                }}>
                                    
                                </div>
                                <div id='div_100'>
                                    <div style={{width:"40%"}}>
                                        <ButtonUI 
                                            text="Enviar"
                                            style={`btnLogin ${ loading && "hidden" }`}
                                            type={"submit"}
                                        />
                                        {
                                            ( loading ) && <div className='register__loading-div'><div className='spiner' id='login-spin'></div></div>
                                        }
                                    </div>
                                </div>

                            </Form>
                        )}
                    
                    </Formik>
                </>

            }
               
            
        </>
    )
}
