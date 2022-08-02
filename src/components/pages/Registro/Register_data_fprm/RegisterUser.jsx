import React, { useRef, useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { ButtonUI } from "../../../UI/ButtonUI/ButtonUI";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const RegisterUser = ( {change_step} ) => {

    const [counter, setCounter] = useState(3);
    const registerSuccess = useRef(null);

    const countdown = () => {
        registerSuccess.current.classList.remove("hidden");
        setTimeout(()=> {
            setCounter(2);
        }, 1000);
        setTimeout(()=> {
            setCounter(1);
        }, 2000);
        setTimeout(()=> {
            setCounter(0);
        }, 3000);
        setTimeout(()=> {
            setCounter(3);
            registerSuccess.current.classList.add("hidden");
        }, 4000);
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
                    documento:"",
                    nombre:"",
                    apellido:"",
                    correo:"",
                    telefono:"",
                    sexo:"none",
                    password:""
                }}
                validate={(valores) => {

                    let errores = {};

                         if (!valores.documento.trim()) {errores.documento = 'Por favor ingrese un documento';}
                    else if (!/^\d{7,}$/.test(valores.documento)) {errores.documento = 'Requiere mín. 7 caracteres y solo números';}

                    else if (!valores.nombre.trim()) {errores.nombre = 'Por favor ingrese un nombre';}
                    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.nombre)) {errores.nombre = 'El nombre debe contener letras';}

                    else if (!valores.apellido.trim()) {errores.apellido = 'Por favor ingrese un apellido';}
                    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.apellido)) {errores.apellido = 'El apellido debe contener solo letras';}

                    else if (!valores.correo.trim()) {errores.correo = 'Por favor ingrese un correo';}
                    else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.correo)) {errores.correo = 'El correo no es válido';}

                    else if (!valores.telefono.trim()) {errores.telefono = 'Por favor ingresa un teléfono';}
                    else if (!/^\d{10,10}$/.test(valores.telefono)) {errores.telefono = 'El número telefonico debe contener solo números';}

                    else if (valores.sexo==="none") {errores.sexo = 'Por favor ingrese el sexo';}

                    else if (!valores.password.trim()) {errores.password = 'Por favor ingrese una contaseña';}
                    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.password)) {errores.password = 'Debes incluir minúsculas, mayúsculas, números y caracteres especiales';}

                    return errores;
                }}
                onSubmit={( valores, {resetForm} ) => {
                    resetForm();
                    countdown();
                    console.log(valores);
                }}
            >   
                {({ errors }) => (
                    <Form>
                        <Field 
                            type='text'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Documento'
                            name="documento"
                            id="documento"
                        />
                        <ErrorMessage name='documento' component={() => (<p className='warn__password-user'>{errors.documento}</p>)} />

                        <div id='registro_column1'>
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Nombre'
                                name="nombre"
                                id="nombre"
                            />
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Apellido'
                                name="apellido"
                                id="apellido"
                                />
                        </div>

                        <ErrorMessage name='nombre' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.nombre}</p>)} />
                        <ErrorMessage name='apellido' component={() => (<p className='warn__password-user' style={{textAlign:"right"}}>{errors.apellido}</p>)} />

                        <Field 
                            type='text'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Correo electrónico'
                            name="correo"
                            id="correo"
                        />
                        <ErrorMessage name='correo' component={() => (<p className='warn__password-user'>{errors.correo}</p>)} />

                        <div className="registro_sexo " id='registro_column1'>
                            <Field 
                                type='text'
                                className = 'inputLogin inputRegistro'
                                placeholder = 'Teléfono'
                                name="telefono"
                                id="telefono"

                            />

                            <Field name="sexo" as="select" id="select">
                                <option selected={true} disabled={true} value="none">Selecciona el sexo</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </Field>
                        </div>
                        <ErrorMessage name='telefono' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.telefono}</p>)} />
                        <ErrorMessage name='sexo' component={() => (<p className='warn__password-user' style={{textAlign:"right"}}>{errors.sexo}</p>)} />

                        <Field 
                            type='password'
                            className = 'inputLogin inputRegistro'
                            placeholder = 'Contraseña'
                            name="password"
                            id="password"
                        />
                        <ErrorMessage name='password' component={() => (<p className='warn__password-user'>{errors.password}</p>)} />
                        <ButtonUI 
                            text="Registrar"
                            style="btnLogin"
                            type={"submit"}
                        />
                    </Form>
                )}
            </Formik>
            <div ref={registerSuccess} className="regiter-succesfuly hidden">
                <p className='register__counter'>{counter}</p>
                <div className='spiner'></div>
                <p>Registro Exitoso</p>
            </div>
        </>
    )
}
