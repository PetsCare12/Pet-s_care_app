import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { GoArrowSmallLeft } from 'react-icons/go';
import { FaHospital } from 'react-icons/fa';
import {  AiFillCheckCircle } from 'react-icons/ai';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registroClinica } from '../../../../helpers/API Consumer/useClinicasConsumer';
import { VscEye,VscEyeClosed } from "react-icons/vsc";
import './type_registers.css';

export const RegisterClinica = ( {change_step} ) => {

    const [step_cli, setStep_cli] = useState(1)
    const [loading, setLoading] = useState(false);
    const [dataCli, setDataCli] = useState([]);
    const [duplicatedData, setDuplicatedData] = useState(false);
    const [registered, setRegistered] = useState(false);

    const [showPassword, setShowPassword] = useState("password")

    const handlePassword = () => {

        if ( showPassword === "password") {
            
            setShowPassword("text");
        }
        else {
            setShowPassword("password")
        }
    }


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
                            dias_atencion:"",
                            nombre:"",
                            direccion:"",
                            telefono:"",
                            correoCv:"",
                            password:"",
                            tarifa: "",
                            imagenclinica:"https://img.freepik.com/vector-gratis/lindo-perro-medico-estetoscopio-dibujos-animados-vector-icono-ilustracion-animal-salud-icono-aislado_138676-5182.jpg?w=826&t=st=1661365682~exp=1661366282~hmac=f7e6379812296866a0dda877ddaca6a0de61466f04b23baa22bfe2410d401558",
                            estadoCli: 3
                        }}
                        validate={( valores ) => {
                            let errores = {};

                                 if( !valores.nombre.trim() ){ errores.nombre = "Por favor ingrese su nombre" }

                            else if ( !valores.nit.trim()) { errores.nit = "Por favor ingrese su NIT" }
                            else if (!/^([0-9])*$/.test(valores.nit)) {errores.nit = 'Solo datos numericos *';}

                            else if( !valores.direccion.trim() ){ errores.direccion = "Por favor ingrese su dirección" }

                            else if( !valores.telefono.trim() ){ errores.telefono = "Por favor ingrese el telefono" }
                            else if (!/^([0-9])*$/.test(valores.telefono)) {errores.telefono = 'Solo datos numericos *';}

                            else if( !valores.correoCv.trim() ){ errores.correoCv = "Por favor ingrese el correo" }
                            else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.correoCv)) {errores.correoCv = 'El correo no es válido';}

                            else if( !valores.password.trim() ){ errores.password = "Por favor ingrese una contraseña" }
                            else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.password)) {errores.password = 'Debes incluir minúsculas, mayúsculas, números y caracteres especiales';}
                                
                           return errores; 
                        }}
                        onSubmit = {( valores, {resetForm} ) => {
                            valores.nit = Number(valores.nit);
                            let validacion = {};
                            registroClinica( valores )
                                .then( info => validacion = info );

                            setLoading(true);
                            setTimeout(()=>{

                                if ( validacion.status === 400 ) {
                                    setDuplicatedData( true );
                                    setLoading(false);
                                }
                                else {
                                    setLoading(false);
                                    setDuplicatedData( false );
                                    resetForm();
                                    setRegistered( true );
                                    window.location = "/"
                                }
                                
                            },1000)
                        }}
                    >
                        {( {errors} ) => (
                            <Form className='registerClinica__form'>
                               { duplicatedData && <p id='registerUser__error'>El NIT o correo ya se encuentran registrados.</p> }
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

                                <div id='registro_column1'>
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = 'Teléfono'
                                        name = "telefono"
                                    />
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = '$ Tarifa'
                                        name = "tarifa"
                                    />
                                </div>
                                <ErrorMessage name='telefono' component={() => (<p className='warn__password-user'>{errors.telefono}</p>)} />
                                <div id='registro_column1'>
                                    <Field 
                                        type='text'
                                        className = 'inputLogin inputRegistro'
                                        placeholder = 'Correo Electrónico'
                                        name = "correoCv"
                                    />
                                    <div className="login_password_div">
                                        <Field 
                                            type={showPassword}
                                            className = 'inputLogin inputRegistro'
                                            placeholder = 'Password'
                                            name = "password"
                                        />
                                        <button style={{top:"7px"}} className='btn' type='button' onClick={ handlePassword }>
                                            {
                                                showPassword === "password" ? <VscEye /> : <VscEyeClosed />
                                            }
                                        </button>
                                     </div>
                                </div>
                                <ErrorMessage name='correoCv' component={() => (<p className='warn__password-user'>{errors.correoCv}</p>)} />
                                <ErrorMessage name='password' component={() => (<p className='warn__password-user'>{errors.password}</p>)} />
                                <div id='div_100'>

                                        <ButtonUI 
                                            text="Enviar"
                                            style={`btnLogin ${( loading )? 'hidden' :( registered )? 'hidden' : ""}`}
                                            type={"submit"}
                                        />
                                        {
                                            ( loading ) && <div className='register__loading-div'><div className='spiner' id='login-spin'></div></div>
                                        }
                                        {
                                            ( registered ) && <div className='registerUser__registered'><AiFillCheckCircle style={{fontSize:"45px",color:"#00c600"}}/><p>¡Registro exitoso!</p></div>
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
