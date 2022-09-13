import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { SimpleModal } from '../../../layout/Modals/SimpleModal'
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';

export const UserUpdate = ({ user, data, close }) => {


    console.log( data );

    return (
        <SimpleModal close={close}>
            <div className='update__container'>
                <h1>Usuario</h1>
                    <Formik
                    initialValues={{
                        documentoUs:user.documentoUs,
                        nombreUs:user.nombreUs,
                        apellidoUs:user.apellidoUs,
                        sexoUs:user.sexoUs,
                        telefonoUs:user.telefonoUs,
                        correoUs:user.correoUs,
                        passwordUs:user.passwordUs
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


                    }}
                >   
                    {({ errors }) => (
                        <Form>
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
                            <div className="login_password_div">
                                <Field 
                                    type={"text"}
                                    className = 'inputLogin inputRegistro'
                                    placeholder = 'Contraseña'
                                    name="passwordUs"
                                    id="password"
                                />
                            </div>
                        <ErrorMessage name='passwordUs' component={() => (<p className='warn__password-user'>{errors.passwordUs}</p>)} />

                        </Form>
                    )}
                </Formik>
            </div>
        </SimpleModal>
    )
}
