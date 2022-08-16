import React, { useEffect, useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import {VscFiles} from 'react-icons/vsc';
import { useSendImage } from '../../../../helpers/Cloudinary_Images/useSendImages';
import { getUsuarioId } from '../../../../helpers/API Consumer/test';



export const SectionPerfil = ( {userData} ) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const {myWidgetUser,urlImage} = useSendImage();
    const [myUser, setMyUser] = useState({});

    console.log( userData);

    useEffect(()=>{
        getUsuarioId( user.id )
            .then( data => setMyUser( data.data ));
        
    }, [userData])

    const handleImageEdit = () => {
        myWidgetUser.open();
    }
    
    // console.log(monthDays( 2022, 8 ));

    const [actNombre, setActNombre] = useState("");
    const [actApellido, setActApellido] = useState("");
    const [actTele, setActTele] = useState("");
    const [actSexo, setActSexo] = useState("");

    const handleNombre = ( e ) => { setActNombre( e.target.value ) }
    const handleApellido = ( e ) => {  }
    const handleTelefono = ( e ) => {  }
    const handleSexo = ( e ) => {  }


    return (
        <div className='profile__right-perfil animate__animated animate__fadeIn'>
            <p className='profile__editarPerfil'>Información</p>
            <p className='profile__editarPerfil cc'>N° {userData.documentoUs}</p>
            <div className="profile__seccion1">
                <div className='profile__img'>
                    <img src={userData.imagenUsu} alt="" />
                    <div onClick={handleImageEdit} className='perfil__editImage'><div><VscFiles /></div></div>
                </div>
                <div className='profile__info'>

                    <form id='formUpdateUser'>
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

                        <select name="sexo" id="select" style={{marginTop:"20px"}} onChange={handleSexo}>
                            <option value="none" id='option_disabled'>Selecciona tu sexo</option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="otro">Otro</option>
                        </select>

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
    )
}
