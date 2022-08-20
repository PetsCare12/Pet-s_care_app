import React, { useRef, useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { pets_images } from '../../../helpers/Pets_care_images';
import './Registro_mascotas.css'
import { crearMascota } from '../../../helpers/API Consumer/test';
import { NoAutenticado } from '../NoAutenticado/NoAutenticado';




export const Registro_mascotas = () => {

    const [type_pet, setType_pet] = useState("lupa");
    const [errorType, setErrorType] = useState(false);
    const [otro, setOtro] = useState("");
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("usuario"));

    let id = "";
    let aud = "";

    if ( !!localStorage.getItem("usuario") ) {
        id = user.id;
        aud = user.aud;
    }


    const handle = ( e ) => {

        if ( e.target.value === "lupa") {
            setErrorType( true );
        }
        else{
            setType_pet( e.target.value );
            setErrorType( false );
        }
    }

    const handleOtro = ( e ) => {
        setOtro( e.target.value );
    }


    return (
        <>
        { ( aud === "[ROLE_USER]" ) ?
            <div className="loginContainer animate__animated animate__fadeIn">
                <div className="login_cont_iz">
                {   ( type_pet === "lupa" ) ? 
                        <img id='type_animal' src={pets_images(`./registro_mascotas/${type_pet}.png`)} alt="animal" />
                    : ( type_pet === "perro") ? 
                        <img id='type_animal' src={pets_images(`./registro_mascotas/${type_pet}.png`)} />
                    : ( type_pet === "gato") ?
                        <img id='type_animal' src={pets_images(`./registro_mascotas/${type_pet}.png`)} />
                    : ( type_pet === "loro") ?
                        <img id='type_animal' src={pets_images(`./registro_mascotas/${type_pet}.png`)} />
                    :
                        <img id='type_animal' src={pets_images(`./registro_mascotas/${type_pet}.png`)} />
                }
                </div>
                <div className='login_cont_dr'>

                    <img src={pets_images('./registro_mascotas/titulo.png')} className='img_registro_mascotas' />

                    <div className="loginData registro_mascota">
                    <Formik
                        initialValues={{
                            nombre: "",
                            raza: "",
                            color: "",
                            peso: "",
                            edad: "",
                            sexo: "",
                            discapacidad: "",
                            tipoAnimal: "",
                            imagenMascota: "http://abc.finkeros.com/wp-content/uploads/2021/02/pets-3715733_1920.jpg"
                        }}
                        validate={( valores ) => {
                            let errores = {};

                            if      ( !valores.nombre ) { errores.nombre = "Ingrese un nombre" }
                            else if ( !valores.raza ) { errores.raza = "Ingrese una raza" }
                            else if ( !valores.color ) { errores.color = "Ingrese un color" }
                            else if ( !valores.edad ) { errores.edad = "Ingrese una edad" }
                            else if ( !valores.sexo ) { errores.sexo = "Ingrese un sexo" }
                            else if ( !valores.peso ) { errores.peso = "Ingrese un peso" }
                            
                            return errores;
                        }}
                        onSubmit={( valores, {resetForm} ) => {

                            // TODO _ VALIDAR QUE EL CAMPO TYPE NOO SEA IGUAL A NONE
                            if ( type_pet === "lupa" ) {
                                setErrorType( true );
                            }
                            else if ( type_pet === "varios" ) {
                                if ( otro.length <= 0 ) {
                                    setErrorType( true );
                                }
                                else{
                                    sendInfo( otro );
                                }
                            }
                            else{
                                sendInfo( type_pet );
                            }

                            function sendInfo( tipo ){

                                // Cambio de valor boolean a string
                                if ( valores.discapacidad ) {
                                    valores.discapacidad = "SI";
                                }
                                else {
                                    valores.discapacidad = "NO";
                                }

                                // Asignación para el tipo de animal
                                valores.tipoAnimal = tipo;

                                valores.peso = Number(valores.peso);

                                setLoading( true );
                                setErrorType( false );
                                
                                crearMascota( valores, id ).then( info => {

                                    if ( info.status === 201 ) {
                                        
                                        setTimeout(()=>{
                                            setLoading( false );
                                            resetForm();
                                            window.location = "/perfil";
                                        },[1000])
                                    }
                                    else{
                                            setLoading( false );
                                            console.log("Hubo un error interno en el sistema, intentalo más tarde");
                                    }

                                })

                            }
                        }}
                    >
                        {({ errors }) => (
                            <Form className='formLogin'>
                            <div className='div_registro_mascotas_select'>
                                <div className='div_select_type'>
                                    <select onChange={handle} name="tipo_animal_mc" id="select_type">
                                        <option  value="lupa" >Selecciona el tipo de mascota</option>
                                        <option  value="perro">Perro</option>
                                        <option  value="gato">Gato</option>
                                        <option  value="loro">Ave</option>
                                        <option  value="varios">Otro</option>
                                    </select>
                                </div>
                                <InputUI 
                                    type='text'
                                    style={`inputLogin ${type_pet !== "varios" && "option_hidden" } `}
                                    txt='Especifica el tipo'
                                    value={otro}
                                    eventChange={handleOtro}
                                    />
                            </div>
                            { errorType && <p id='warn__password-mascota'>Por favor ingrese el tipo de mascota</p> }

                            
                            <Field 
                                type='text'
                                className = 'inputLogin'
                                placeholder = 'Nombre mascota'
                                name = "nombre"
                            />
                            <ErrorMessage name='nombre' component={() => (<p id='warn__password-mascota'>{errors.nombre}</p>)} />

                            <div className='div_registro_mascotas_input'>
                                <Field 
                                    type='text'
                                    className = 'inputLogin'
                                    placeholder = 'Raza'
                                    name = "raza"
                                />
                                <Field 
                                    type='text'
                                    className = 'inputLogin'
                                    placeholder = 'Color'
                                    name = "color"
                                />

                            </div>
                            <ErrorMessage name='raza' component={() => (<p id='warn__password-mascota'>{errors.raza}</p>)} />
                            <ErrorMessage name='color' component={() => (<p id='warn__password-mascota'>{errors.color}</p>)} />
                            
                            <div className='div_registro_mascotas_select_gender'>
                                
                                <Field as="select" name="sexo" id="select_gender">
                                    <option value="none" id='option_disabled'>Selecciona el sexo</option>
                                    <option value="macho">Macho</option>
                                    <option value="hembra">Hembra</option>
                                </Field>
                            </div>
                            <ErrorMessage name='sexo' component={() => (<p id='warn__password-mascota'>{errors.sexo}</p>)} />

                            <div className='registroMascotas__div-peso'>
                                <div className='peso'>
                                    <div className='peso-div'>
                                        <label htmlFor="peso">Pesa </label>
                                        <Field
                                            className='inputLogin inputH-100' 
                                            type="text" 
                                            name="peso"
                                            placeholder = "0.0"
                                        />
                                        Kg
                                    </div>
                                    <div>
                                        <label htmlFor="edad">Edad </label>
                                        <Field
                                            className='inputLogin inputH-100' 
                                            type="text" 
                                            name="edad"
                                            placeholder = "1"
                                        />
                                    </div>
                                </div>
                                <div className='discapacidad'>
                                    <label htmlFor="discapacidad">¿Discapacidad?</label>
                                    <Field type="checkbox" name='discapacidad'/>
                                </div>
                            </div>
                            <ErrorMessage name='peso' component={() => (<p id='warn__password-mascota'>{errors.peso}</p>)} />
                            <ErrorMessage name='edad' component={() => (<p id='warn__password-mascota'>{errors.edad}</p>)} />

                            { !loading && 
                            <div className='registroMascotas__button-div'>
                                <ButtonUI 
                                    style='btnLogin h_35 mt-3'
                                    text='Registrar'
                                    type={"submit"}
                                />
                                <ButtonUI 
                                    type={"button"}
                                    event={()=>window.location = "/perfil"}
                                    style='btnRegistroMascota-cancel h_35 mt-3'
                                    text='Cancelar'
                                />
                            </div>
                            }  
                            {
                                loading && <div className='register__loading-div'><div className='spiner' id='login-spin'></div></div>
                            }        
                            </Form>
                        )}
                    </Formik>    
                    </div>
                </div>
            </div>

            : <NoAutenticado txt = {"Al parecer no estas autorizado para realizar está acción. Te invitamos a registrarte o iniciar sesión como usuario"} />
        }
        </>
    )
}
