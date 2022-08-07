import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { monthDays } from '../../../../helpers/getDays';


export const SectionPerfil = ( {userData} ) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    
    // console.log(monthDays( 2022, 8 ));

    return (
        <div className='profile__right-perfil animate__animated animate__fadeIn'>
            <p className='profile__editarPerfil'>Información</p>
            <div className="profile__seccion1">
                <div className='profile__img'><img src={userData.imagenUsu} alt="" /></div>
                <div className='profile__info'>

                    <p>CC. {userData.documentoUs}</p>

                    <label htmlFor='nombre' className='profile__perfil-label'>Nombre</label>
                    <InputUI 
                        type={"text"}
                        value={userData.nombreUs}
                        style={"inputLogin"}
                        name={"nombre"}
                    />
                    <label htmlFor='apellido' className='profile__perfil-label'>Apellido</label>
                    <InputUI 
                        type={"text"}
                        value={userData.apellidoUs}
                        style={"inputLogin"}
                        name={"apellido"}
                    />
                    <label htmlFor='telefono' className='profile__perfil-label'>Teléfono</label>
                    <InputUI 
                        type={"text"}
                        value={"(+57) "+userData.telefonoUs}
                        style={"inputLogin"}
                        name={"telefono"}
                    />
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
                        text={"Actualizar"}
                    />
                </div>
            </div>
        </div>
    )
}
