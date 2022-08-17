import React, { useEffect, useRef, useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import {VscFiles} from 'react-icons/vsc';
import { getUsuarioId, usuarioUpdate } from '../../../../helpers/API Consumer/test';
import  validacionActualizacionUser  from "../../../../helpers/validacionesInput/validacionActualizacionUser";
import { useSendImage } from '../../../../helpers/Cloudinary_Images/useSendImages';



export const SectionPerfil = ( {userData} ) => {

    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const [errorFormTxt, setErrorFormTxt] = useState("");
    const [errorForm, setErrorForm] = useState(false);
    
    const form = useRef(null);

    const {myWidgetUser,urlImage} = useSendImage();

    console.log(urlImage);

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


    const handleNombre = ( e ) => { setActNombre( e.target.value ) }
    const handleApellido = ( e ) => { setActApellido( e.target.value ) }
    const handleTelefono = ( e ) => { setActTele( e.target.value ) }
    const handleSexo = ( e ) => { setActSexo( e.target.value ) }

    useEffect( () => {
        setActImage( urlImage );
    }, [urlImage])

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
        console.log( resp );

        if ( resp === "ok" ) {
            data.correoUs = actCorreo;
            data.imagenUsu = actImage;
            data.passwordUs = actPass;
            usuarioUpdate( data, userData.documentoUs, token).then( info => console.log(info));
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
                        <InputUI 
                            type={"text"}
                            txt={"Contraseña actual"}
                            style={"inputLogin mt-5"}
                            name={"oldPassword"}
                        />
                        <InputUI 
                            type={"text"}
                            txt={"Contraseña nueva"}
                            style={"inputLogin mt-3"}
                            name={"newPassword"}
                        />
                        <ButtonUI 
                            style={"btnAgregarMascota mt-5"}
                            text={"Cambiar"}
                        />
                    </div>
                </div>
            </div>
        }
        </>
    )
}
