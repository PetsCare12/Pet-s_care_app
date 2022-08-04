import React from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI';


export const SectionPerfil = () => {
    return (
        <div className='profile__right-perfil animate__animated animate__fadeIn'>
            <p className='profile__editarPerfil'>Información</p>
            <div className="profile__seccion1">
                <div className='profile__img'><img src="https://cdn1.matadornetwork.com/blogs/2/2019/03/frases-sobre-mujeres-shutterstock_400610314-560x420.jpg" alt="" /></div>
                <div className='profile__info'>

                    <p>CC. 100 000 000000</p>

                    <label htmlFor='nombre' className='profile__perfil-label'>Nombre</label>
                    <InputUI 
                        type={"text"}
                        value={"Sandra Luz"}
                        style={"inputLogin"}
                        name={"nombre"}
                    />
                    <label htmlFor='apellido' className='profile__perfil-label'>Apellido</label>
                    <InputUI 
                        type={"text"}
                        value={"Castelar Martinez"}
                        style={"inputLogin"}
                        name={"apellido"}
                    />
                    <label htmlFor='telefono' className='profile__perfil-label'>Teléfono</label>
                    <InputUI 
                        type={"text"}
                        value={"(+57) 301 2157828"}
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
                </div>
            </div>
        </div>
    )
}
