import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaHospital } from 'react-icons/fa';
import './type_registers.css';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registroClinica } from '../../../../helpers/API Consumer/useClinicasConsumer';

export const RegisterClinica = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)
    const [loading, setLoading] = useState(false);
    const [dataCli, setDataCli] = useState([]);


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
                            direccion:"",
                            telefono:"",
                            correoCv:"",
                            password:"",
                            imagenclinica:"https://img.freepik.com/vector-premium/examen-medico-clinica-veterinaria-vacunacion-atencion-medica-mascotas-como-perros-gatos-dibujos-animados-planos-ilustracion-vectorial-fondo-afiches-o-pancartas_2175-3387.jpg?w=1380",
                            estadoCli: 3
                        }}
                        validate={( valores ) => {
                            let errores = {};

                                 if( !valores.nombre.trim() ){ errores.nombre = "Por favor ingrese su nombre" }
                            else if ( !valores.nit.trim()) { errores.nit = "Por favor ingrese su NIT" }
                            else if( !valores.direccion.trim() ){ errores.direccion = "Por favor ingrese su dirección" }
                            else if( !valores.telefono.trim() ){ errores.telefono = "Por favor ingrese el telefono" }
                            else if( !valores.correoCv.trim() ){ errores.correoCv = "Por favor ingrese el correo" }
                            else if( !valores.password.trim() ){ errores.password = "Por favor ingrese una contraseña" }
                                
                           return errores; 
                        }}
                        onSubmit = {( valores, {resetForm} ) => {
                            console.log( valores );

                            registroClinica( valores ).then( info => console.log( info ));

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

                                <Field 
                                    type='text'
                                    className = 'inputLogin inputRegistro'
                                    placeholder = 'Teléfono'
                                    name = "telefono"
                                />
                                <ErrorMessage name='telefono' component={() => (<p className='warn__password-user'>{errors.telefono}</p>)} />
                                <div id='registro_column1'>
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = 'Correo Electrónico'
                                        name = "correo"
                                    />
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = 'Password'
                                        name = "password"
                                    />
                                </div>
                                <ErrorMessage name='correo' component={() => (<p className='warn__password-user'>{errors.correoCv}</p>)} />
                                <ErrorMessage name='password' component={() => (<p className='warn__password-user'>{errors.passwordcorreoCv}</p>)} />
                                <div id='div_100'>

                                        <ButtonUI 
                                            text="Enviar"
                                            style={`btnLogin ${ loading && "hidden" }`}
                                            type={"submit"}
                                        />
                                        {
                                            ( loading ) && <div className='register__loading-div'><div className='spiner' id='login-spin'></div></div>
                                        }
                                    
                                </div>

                            </Form>
                        )}
                    
                    </Formik>
                </>

            }
               
            
        </>
    )
}
