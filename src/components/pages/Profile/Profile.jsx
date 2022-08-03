import React, { useState } from 'react'
import { PhotoProfile } from './PhotoProfile';
import './Profile.css';
import { SectionMascotas } from './sections/SectionMascotas';
import { SectionPerfil } from './sections/SectionPerfil';
import { FaHome } from 'react-icons/fa';
import { Citas } from "../Citas/Citas";

export const Profile = () => {

    const [activeBtn, setActiveBtn] = useState("perfil");

    return (
        <div className='profile__contenedor'>
            <div className='profile'>
                <div className="profile__left">

                    <PhotoProfile 
                        img={"https://cdn1.matadornetwork.com/blogs/2/2019/03/frases-sobre-mujeres-shutterstock_400610314-560x420.jpg"}
                    />
                    <button onClick={() => {setActiveBtn("home") 
                                            window.location = "/"
                                            }} 
                    className={`profile__btnProfile mt-10 ${(activeBtn === "home") && "perfil_active"}`}>

                        <div className='profile__titleBtn'><FaHome style={{fontSize:"20px"}} /></div>
                    </button>
                    <button onClick={() => {setActiveBtn("perfil")}} className={`profile__btnProfile ${(activeBtn === "perfil") && "perfil_active"}`}>
                        <div className='profile__titleBtn'>Perfil</div>
                    </button>
                    <button onClick={() => {setActiveBtn("mascotas")}} className={`profile__btnProfile ${(activeBtn === "mascotas") && "perfil_active"}`}>
                        <div className='profile__titleBtn'>Mascotas</div>
                    </button>
                    <button onClick={() => {setActiveBtn("citas")}} className={`profile__btnProfile ${(activeBtn === "citas") && "perfil_active"}`}>
                        <div className='profile__titleBtn'>Citas</div>
                    </button>
                </div>
                <div className="profile__right">
                {
                    ( activeBtn === "home" ) && 
                    <div id='spiner-home' className='spiner'></div>
                }
                {
                    ( activeBtn === "mascotas") && <SectionMascotas />
                }
                {
                    ( activeBtn === "perfil" ) && <SectionPerfil />
                }    
                {
                    ( activeBtn === "citas" ) && <Citas />
                }
                </div>     
            </div> 
        </div>
        
    )
}



