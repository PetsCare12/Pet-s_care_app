import React, { useEffect, useRef, useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import {VscFiles} from 'react-icons/vsc';
import { inicioSesionUsuario, usuarioUpdate } from '../../../../helpers/API Consumer/test';
import { actualizacionPasswordUser, validacionActualizacionUser }  from "../../../../helpers/validacionesInput/validacionActualizacionUser";
import { useSendImage } from '../../../../helpers/Cloudinary_Images/useSendImages';
import { SimpleModal } from '../../../layout/Modals/SimpleModal';



export const SectionPerfil = ( {userData} ) => {

    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const [errorFormTxt, setErrorFormTxt] = useState("");
    const [errorForm, setErrorForm] = useState(false);
    const [errorPassword, setErrorPassword] = useState([false,""])
    const [passwordChanged, setPasswordChanged] = useState([false,""]);
    
    const form = useRef(null);
    const formPassword = useRef(null);
    const formVerifyPassword = useRef(null);

    const {myWidgetUser,urlImage} = useSendImage();

    useEffect( () => {

        if (!userData.documentoUs) {    
            setLoading( true );
        }
        else {
            setLoading( false );
            setActNombre(userData.nombreUs);
            setActApellido(userData.apellidoUs);
            setActTele(userData.telefonoUs);
            setActSexo(userData.sexoUs);
            setActImage(userData.imagenUsu);
            setActCorreo(userData.correoUs);
            setActPass(userData.passwordUs);
        }
    }, [userData])

    const handleImageEdit = () => {
        myWidgetUser.open();
    }
    
    // console.log(monthDays( 2022, 8 ));

    const [actNombre, setActNombre] = useState("");
    const [actApellido, setActApellido] = useState("");
    const [actTele, setActTele] = useState("");
    const [actSexo, setActSexo] = useState("");
    const [actImage, setActImage] = useState("");
    const [actCorreo, setActCorreo] = useState("");
    const [actPass, setActPass] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState(false);
    const [errorVerify, setErrorVerify] = useState([false,""])

    const handleNombre = ( e ) => { setActNombre( e.target.value ) }
    const handleApellido = ( e ) => { setActApellido( e.target.value ) }
    const handleTelefono = ( e ) => { setActTele( e.target.value ) }
    const handleSexo = ( e ) => { setActSexo( e.target.value ) }
    const handleOldPassword = ( e ) => { setOldPassword( e.target.value ) }
    const handleNewPassword = ( e ) => { setNewPassword( e.target.value ) }

    useEffect( () => {
        if ( !!urlImage.length ) {
            setActImage( urlImage );
        }
    }, [urlImage])

    const userValidation = ( e ) => {
        e.preventDefault();

        const formData = new FormData(formVerifyPassword.current);
        const data = {
            nombreoCorreo: actCorreo,
            password: formData.get('password')
        }
        
        inicioSesionUsuario( data )
        .then( info => {
            
            if ( info.status === 200 ) {

                const formData2 = new FormData(form.current);
                const dataUpdate = {
                    nombreUs: formData2.get('nombre'),
                    apellidoUs: formData2.get('apellido'),
                    telefonoUs: formData2.get('telefono'),
                    sexoUs: formData2.get('sexo')
                }
                dataUpdate.correoUs = actCorreo;
                dataUpdate.imagenUsu = actImage;
                dataUpdate.passwordUs = data.password;
                
                usuarioUpdate( dataUpdate, userData.documentoUs, token).then( info => {
                    if ( info.status === 200 ) {
                        window.location = "/perfil"
                    }
                    else{
                        setErrorVerify([true,"Hubo un error en el registro, intentalo más tarde"])
                    }
                });

            }
            else {
                setErrorVerify([true,"Al parecer esta contraseña no es correcta"])
            }
            
        })
        
    }

    const handleSubmitInfo = ( e ) => {
        e.preventDefault();
        
        const formData = new FormData(form.current);
        const data = {
            nombreUs: formData.get('nombre'),
            apellidoUs: formData.get('apellido'),
            telefonoUs: formData.get('telefono'),
            sexoUs: formData.get('sexo')
        }
        const resp = validacionActualizacionUser( data, setErrorForm, setErrorFormTxt );

        if ( resp === "ok" ) {

            setVerifyPassword( true );
        }
    }

    const handleSubmitPassword = ( e ) => {

        e.preventDefault();

        const formData = new FormData(formPassword.current);
        const data = {
            oldPassword: formData.get('oldPassword'),
            newPassword: formData.get('newPassword'),
            nombreUs: actNombre,
            apellidoUs: actApellido,
            telefonoUs: actTele,
            sexoUs: actSexo
        }
        
        const validacion = { nombreoCorreo : actCorreo , password : data.oldPassword };
        const resp2 = validacionActualizacionUser( data, setErrorForm, setErrorFormTxt );
        const { resp, msj } = actualizacionPasswordUser( data );

        if ( resp2==="ok" && resp ) {
            inicioSesionUsuario( validacion ).then( info => {

                if ( info.status === 500 ) {
                    setErrorPassword([true, "La contraseña no es correcta"])
                }
                else if ( info.status === 200 ) {

                    let dataActualizacion = {
                        nombreUs : actNombre,
                        apellidoUs : actApellido,
                        telefonoUs : actTele,
                        sexoUs : actSexo,
                        correoUs : actCorreo,
                        imagenUsu : actImage,
                        passwordUs : data.newPassword
                    }

                    console.log("New Passwor: "+data.newPassword);
                    
                    setErrorPassword([false,""]);
                    usuarioUpdate( dataActualizacion, userData.documentoUs, token).then( info => {
                        console.log( info.status );
                        if ( info.status === 200 ) {
                            console.log( info );
                            setPasswordChanged([true, "Tu contraseña ha sido actualizada"])
                            setTimeout( () => {
                                setPasswordChanged([false, ""])
                            },3000)
                            setOldPassword("");
                            setNewPassword("");
                        }
                        else {
                            setErrorPassword([true,"Ha ocurrido un error inesperado, por favor intentalo más tarde o prueba refrescando la página"]);
                        }
                    });
                }
                else {
                    setErrorPassword([true,"Ha ocurrido un error inesperado, por favor intentalo más tarde"]);
                }
            })
        }
        else{
            setErrorPassword([ true, msj ])
        }


    }


    return (
        <>
        {
            loading && <div className='loading_sectionPerfil'><div id='login-spin-sectionPerfil' className='spiner'></div>Cargando Información...</div>
        }
        {
            !loading && 
            <div className='profile__right-perfil animate__animated animate__fadeIn'>
                <p className='profile__editarPerfil'>Información</p>
                <p className='profile__editarPerfil cc'>N° {userData.documentoUs}</p>
                <div className="profile__seccion1">
                    <div className='profile__img'>
                        <img src={actImage} alt="" />
                        <div onClick={handleImageEdit} className='perfil__editImage'><div><VscFiles /></div></div>
                    </div>
                    <div className='profile__info'>

                        <form ref={form} id='formUpdateUser'>
                            <label htmlFor='nombre' className='profile__perfil-label'>Nombre</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="nombre"
                                value={actNombre}
                                eventChange={handleNombre}
                            />
                            

                            <label htmlFor='apellido' className='profile__perfil-label'>Apellido</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="apellido"
                                value={actApellido}
                                eventChange={handleApellido}
                            />

                            <label htmlFor='nombre' className='profile__perfil-label'>Teléfono</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="telefono"
                                value={actTele}
                                eventChange={handleTelefono}
                            />

                            <select value={actSexo} name="sexo" id="select" style={{marginTop:"20px"}} onChange={handleSexo}>
                                <option value="none" id='option_disabled'>Selecciona tu sexo</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </select>

                            { errorForm && <p className='error_actualizar_usuario'>{errorFormTxt}</p> }
                            <ButtonUI 
                            style={"btnAgregarMascota mt-5"}
                            type={"submit"}
                            text={"Actualizar"}
                            event={handleSubmitInfo}
                        />

                        </form>

                    </div>
                    
                </div>
                <div className="profile__section2">
                    <p>Cambiar contraseña</p>
                    <div className="profile__cambioContasena">
                        <form ref={formPassword}>
                            <InputUI 
                                type={"password"}
                                txt={"Contraseña actual"}
                                style={"inputLogin mt-5"}
                                name={"oldPassword"}
                                value={oldPassword}
                                eventChange={handleOldPassword}
                            />
                            <InputUI 
                                type={"password"}
                                txt={"Contraseña nueva"}
                                style={"inputLogin mt-3"}
                                name={"newPassword"}
                                value={newPassword}
                                eventChange={handleNewPassword}
                            />
                            { errorPassword[0] && <p className='updatePasswordError'>{ errorPassword[1] }</p> }
                            { passwordChanged[0] && <p className='profile__editarPerfil cc'>{ passwordChanged[1] }</p> }
                            <ButtonUI 
                                style={"btnAgregarMascota mt-5"}
                                type="submit"
                                text={"Cambiar"}
                                event={handleSubmitPassword}
                            />
                        </form>
                    </div>
                </div>
            </div>
        }
        {
            verifyPassword &&
            <SimpleModal close={setVerifyPassword}>
                <form onSubmit={userValidation} className='verifyPassword' ref={formVerifyPassword} action="">
                    <p>Solo queremos estar seguros de que eres tú</p>
                    <div>
                        <label className='label' htmlFor="password">Contraseña</label>
                        <input className='inputLogin' type="password" name='password'/>
                    </div>
                    {
                        errorVerify[0] && <p style={{color:"red",fontSize:"15px"}}>{errorVerify[1]}</p> 
                    }
                    <button className='btnAgregarMascota' type='submit'>Enviar</button>
                    <p onClick={ () => setVerifyPassword( false )} className='cancelPasswordVerify'>x</p>
                </form>
            </SimpleModal>
        }
        </>
    )
}
