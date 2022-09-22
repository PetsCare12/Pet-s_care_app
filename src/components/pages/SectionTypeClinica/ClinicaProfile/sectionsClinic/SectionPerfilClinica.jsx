import React, { useEffect, useRef, useState } from 'react'
import { InputUI } from '../../../../UI/InputUI/InputUI';
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import {VscFiles} from 'react-icons/vsc';
import { inicioSesionUsuario } from '../../../../../helpers/API Consumer/test';
import { actualizacionPasswordUser }  from "../../../../../helpers/validacionesInput/validacionActualizacionUser";
import { useSendImage } from '../../../../../helpers/Cloudinary_Images/useSendImages';
import { putClinica } from '../../../../../helpers/API Consumer/useClinicasConsumer';
import { validacionActClinica } from '../../../../../helpers/validacionesInput/validacionesClinica';



export const SectionPerfilClinica = ( {userData , imgCli} ) => {

    const token = localStorage.getItem("token");

    const [loading, setLoading] = useState(false);
    const [errorFormTxt, setErrorFormTxt] = useState("");
    const [errorForm, setErrorForm] = useState(false);
    const [errorPassword, setErrorPassword] = useState([false,""])
    const [passwordChanged, setPasswordChanged] = useState([false,""]);
    
    const form = useRef(null);
    const formPassword = useRef(null);

    const {myWidgetClinics,urlImage} = useSendImage();


    const [actTele, setActTele] = useState("");
    const [actImage, setActImage] = useState("");
    const [actCorreo, setActCorreo] = useState("");
    const [actDireccion, setActDireccion] = useState("");
    const [actTarifa, setactTarifa] = useState("");
    const [actPass, setActPass] = useState("");
    
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    useEffect( () => {

        if (!userData.nit) {    
            setLoading( true );
        }
        else {
            setLoading( false );
            setActTele(userData.telefono);
            setActCorreo(userData.correoCv);
            setActDireccion(userData.direccion);
            setActPass(userData.password);
            setactTarifa(userData.tarifa)
            setActImage(imgCli);
        }
    }, [userData])

    const handleImageEdit = () => {
        myWidgetClinics.open();
    }

    const handleTelefono = ( e ) => { setActTele( e.target.value ) }
    const handleDireccion = ( e ) => { setActDireccion( e.target.value ) }
    const handleCorreo = ( e ) => { setActCorreo( e.target.value ) }
    const handleTarifa = ( e ) => { setactTarifa( e.target.value ) }
    const handleOldPassword = ( e ) => { setOldPassword( e.target.value ) }
    const handleNewPassword = ( e ) => { setNewPassword( e.target.value ) }

    useEffect( () => {
        if ( !!urlImage.length ) {
            setActImage( urlImage );
        }
    }, [urlImage])

    const handleSubmitInfo = ( e ) => {
        e.preventDefault();
        
        const formData = new FormData(form.current);
        const data = {
            nit: userData.nit,
            nombre: userData.nombre,
            direccion: formData.get('direccion'),
            telefono: formData.get('telefono'),
            correoCv: formData.get('correoCv'),
            password: userData.password,
            imagenclinica: userData.imagenclinica,
            estadoCli: 1,
            tarifa: formData.get('tarifa')
        }
        const resp = validacionActClinica( data, setErrorForm, setErrorFormTxt );

        if ( resp === "ok" ) {
            data.telefono = actTele;
            data.correoCv = actCorreo;
            data.direccion = actDireccion;
            data.tarifa = actTarifa
            putClinica( data, userData.nit, token ).then( info => {
                if ( info.status === 200 ) {
                    window.location = "/tuClinica"
                }
            });
        }
    }

    const handleSubmitPassword = ( e ) => {

        e.preventDefault();

        const formData = new FormData(formPassword.current);
        const data = {
            oldPassword: formData.get('oldPassword'),
            newPassword: formData.get('newPassword'),
            correoCv: actCorreo,
            direccion: actDireccion,
            telefono: actTele,
            tarifa: actTarifa
        }
        
        const validacion = { nombreoCorreo : actCorreo , password : data.oldPassword };
        const resp2 = validacionActClinica( data, setErrorForm, setErrorFormTxt );
        const { resp, msj } = actualizacionPasswordUser( data );

        if ( resp2==="ok" && resp ) {
            inicioSesionUsuario( validacion ).then( info => {

                if ( info.status === 500 ) {
                    setErrorPassword([true, "La contraseña no es correcta"])
                }
                else if ( info.status === 200 ) {

                    let dataActualizacion = {
                        nit: userData.nit,
                        nombre: userData.nombre,
                        direccion : actDireccion,
                        telefono : actTele,
                        correoCv : actCorreo,
                        imagenclinica : actImage,
                        estadoCli: 1,
                        tarifa: actTarifa,
                        password : data.newPassword
                    }
                    
                    setErrorPassword([false,""]);
                    putClinica( dataActualizacion, userData.nit, token ).then( info => {
                        console.log( info.status );
                        if ( info.status === 200 ) {
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
                <p className='profile__editarPerfil cc'>Nit° {userData.nit}</p>
                <div className="profile__seccion1">
                    <div className='profile__img'>
                        <img src={imgCli} alt="" />
                        <div onClick={handleImageEdit} className='perfil__editImage'><div><VscFiles /></div></div>
                    </div>
                    <div className='profile__info'>

                        <form ref={form} id='formUpdateUser'>

                            <label htmlFor='direccion' className='profile__perfil-label'>Dirección</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="direccion"
                                value={actDireccion}
                                eventChange={handleDireccion}
                            />

                            <label htmlFor='nombre' className='profile__perfil-label'>Teléfono</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="telefono"
                                value={actTele}
                                eventChange={handleTelefono}
                            />

                            <label htmlFor='correo' className='profile__perfil-label'>Correo</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="correoCv"
                                value={actCorreo}
                                eventChange={handleCorreo}
                            />

                            <label htmlFor='correo' className='profile__perfil-label'>Tarifa</label>
                            <InputUI 
                                style="inputLogin"
                                type="text"
                                name="tarifa"
                                value={actTarifa}
                                eventChange={handleTarifa}
                            />

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
        </>
    )
}
