import React, { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { imageRandom } from '../../../helpers/RandomImages/imagenessa';
import { setVeterinario } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AiFillCheckCircle } from 'react-icons/ai';
import "./ModalRegisterVet.css";

export const ModalRegisterVet = ({ isOpen , closeModal , token , nit }) => {

  let img = imageRandom();

  const {myWidgetVeter,urlImage} = useSendImage();
  const [imgUrl, setimg] = useState(img);

  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [duplicatedData, setDuplicatedData] = useState(false);
  const [registered, setRegistered] = useState(false);

  const showWidget = () => {myWidgetVeter.open();}

  useEffect(() => {
    setimg(urlImage);
  }, [urlImage])

  return (

    <div className={`modal ${isOpen && 'modalOpen'}`}>
        <div className='modalContainer animate__animated animate__fadeIn'>

          <div className="btn_close_container">
            <div id='MdOutlineCancelVet' onClick={closeModal}><MdOutlineCancel /></div>
          </div>

          <div className="input_registerVet_container">

          <h2>{"Registra un Veterinario"}</h2>

          <Formik

            initialValues={{
              documento: "",
              nombre: "",
              apellidos: "",
              sexovt: "none",
              telefono: "",
              correo: "",
              especialidad: "",
              password: "",
              imagenVete: "",
              estadoVt: 0
            }}

            validate = {(valores) => {
              let errors = {};

              if (!valores.documento.trim()  || !/^\d{7,}$/.test(valores.documento)) { errors.documento = "Documento erroneo mín. 7 caracteres y solo números" }
      
              else if (!valores.nombre.trim()) { errors.nombre = "Nombres erroneos" }
              else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.nombre)) { errors.nombre = "Nombres erroneos" }
          
              else if (!valores.apellidos.trim()) { errors.apellidos = "Apellidos erroneos" }
              else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.apellidos)) { errors.apellidos = "Apellidos erroneos" }
          
              else if (!valores.telefono.trim()) { errors.telefono = "Telefono erroneo" }
              else if (!/^\d{10,10}$/.test(valores.telefono)) { errors.telefono = "Telefono erroneo mín. 10 caracteres y solo números" }
          
              else if (!valores.sexovt === "none") {errors.sexovt = "Sexo requerido"}
              else if (!valores.estadoVt === 0) {errors.estadoVt = "Estado requerido"}
          
              else if (!valores.correo.trim()) { errors.correo = "Correo erroneo" }
              else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.correo)) { errors.correo = "Correo erroneo" }
          
              else if (!valores.especialidad.trim()) { errors.especialidad = "Especialidad erronea" }
              else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(valores.especialidad)) { errors.especialidad = "Especialidad erronea" }
          
              else if (!valores.password.trim()) {errors.password = "Debes incluir minúsculas, mayúsculas, números y caracteres especiales en la contraseña"}
              else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(valores.password)) {errors.password = "Debes incluir minúsculas, mayúsculas, números y caracteres especiales en la contraseña"}
              
              return errors;
            }}

            onSubmit={( valores, {resetForm} ) => {

              valores.imagenVete = imgUrl;

              let validacion = {};
              console.log(valores);
              setVeterinario( valores , nit , token ).then(info => {
                info = validacion;

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
                    // window.location = '/gestionClinica'
                }
                console.log(info);
              })

          }}>
                 {({ errors }) => (
                    <Form>
                        <div className="img_cont_1">
                          <div title='Sube una Imagen!' className="img_cont_vet" onClick={showWidget}>
                            <img src={ imgUrl } name="imagenVete" alt="" className='imgForm_vet'/>
                          </div>
                        </div>
                        {
                            ( duplicatedData ) &&
                            <p id='registerUser__error'>Al parecer tu correo o documento ya están registrados</p>
                        }
                        {
                            ( serverError ) &&
                            <p id='registerUser__error'>Hubo un error en el registro, intentalo nuevamente.</p>
                        }
                        

                        <div className="parts part1">

                          <Field 
                              type='text'
                              placeholder='Documento' 
                              className='input regs' 
                              name='documento'
                              id="documento" 
                          />
                          <Field 
                                type='text'
                                placeholder='Nombre' 
                                className='input regs'
                                name='nombre'
                                id="nombre"
                            />

                        </div>
                        <ErrorMessage name='documento' component={() => (<p className='warn__password-user'>{errors.documento}</p>)} />
                        <ErrorMessage name='nombre' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.nombre}</p>)} />

                        
                        <div className="parts pasrt2">
          
                            <Field 
                              type='text'
                              placeholder='Apellido' 
                              className='input regs'
                              name='apellidos'
                              id="apellidos"
                              />
                            
                            <Field 
                              type='text'
                              placeholder='Telefono' 
                              className='input regs'
                              name='telefono'
                              id="telefono"
                              />

                        </div>
                        <ErrorMessage name='apellido' component={() => (<p className='warn__password-user' style={{textAlign:"right"}}>{errors.apellidos}</p>)} />
                        <ErrorMessage name='telefono' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.telefono}</p>)} />               
                        
                        <div className="parts selects_conatiner">

                          <Field name="sexovt" id="sexovt" className='input selects' as="select">
                              <option value="none">Selecciona el sexo</option>
                              <option value="hombre">Hombre</option>
                              <option value="mujer">Mujer</option>
                              <option value="otro">Otro</option>
                          </Field>
                          
                          <Field name="estadoVt" id="estadoVt" className='input selects' as="select">
                              <option value="0">Seleccione un estado</option>
                              <option value="1">Activo</option>
                              <option value="2">Inactivo</option>
                          </Field>

                        </div>
                        <ErrorMessage name='sexovt' component={() => (<p className='warn__password-user' style={{textAlign:"right"}}>{errors.sexovt}</p>)} />
                        <ErrorMessage name='estadoVt' component={()   => (<p className='warn__password-user' style={{textAlign:"left"}}>{errors.estadoVt}</p>)} />
                        
                        
                        <div className="parts part3">

                          <Field
                              type="text" 
                              placeholder='Especialidad' 
                              className='input regs'
                              name='especialidad'
                              id='especialidad'
                          />

                          <Field 
                            type='text'
                            placeholder='Correo' 
                            className='input regs'
                            name='correo'
                            id="correo"
                            />

                        </div>
                        <ErrorMessage name='especialidad' component={() => (<p className='warn__password-user'>{errors.especialidad}</p>)} />
                        <ErrorMessage name='correo' component={() => (<p className='warn__password-user'>{errors.correo}</p>)} />
     
                        <Field 
                            type='password'
                            placeholder='Contraseña' 
                            className='input'
                            name='password'
                            id="password"
                        />
                        <ErrorMessage name='password' component={() => (<p className='warn__password-user'>{errors.password}</p>)} />
                        <ButtonUI 
                            text="Registrar Veterinario"  
                            style={`btnLogin ${( loading )? 'hidden' :( registered )? 'hidden' : ""}`}
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
          </div>
        </div>
    </div>
  )
}