import React, { useState, useEffect } from 'react';
import { PhotoProfile } from './PhotoProfile';
import { SectionMascotas } from './sections/SectionMascotas';
import { SectionPerfil } from './sections/SectionPerfil';
import { FaHome } from 'react-icons/fa';
import { citas } from '../Citas/dataCitas';
import { CitaCard } from "../Citas/CitaCard";
import { NoAutenticado } from '../NoAutenticado/NoAutenticado';
import { getUsuarioId } from '../../../helpers/API Consumer/test';
import './Profile.css';

export const Profile = () => {

    const [activeBtn, setActiveBtn] = useState("perfil");
    const [citasAll, setCitasAll] = useState( citas );
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({}); 


    useEffect(()=>{
        if ( !!user ) {
            getUsuarioId( user.id )
            .then( data => setUserData( data.data ));
        }
        else {
            console.log("No se ha autenticado");
        }
        
    }, [user])

    const handleLogout = () => {
         localStorage.removeItem("token");
         localStorage.removeItem("usuario");
         setActiveBtn("logout");
         window.location = "/login";
    }
    
    
    return (
        <div className='profile__contenedor animate__animated animate__fadeIn'>
            { ( !!token ) &&
                <div className='profile'>
                    <div className="profile__left">

                        <PhotoProfile 
                            img={userData.imagenUsu}
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
                            <div className='profile__titleBtn'>Citas pendientes</div>
                        </button>
                    </div>
                    <button id='perfil__logout' onClick={handleLogout} className={`profile__btnProfile ${(activeBtn === "logout") && "perfil_active"}`}>
                        <div className='profile__titleBtn'>Cerrar sesión</div>
                    </button>
                    <div className="profile__right">
                    {
                        ( activeBtn === "home" ) && 
                        <div id='spiner-home' className='spiner'></div>
                    }
                    {
                        ( activeBtn === "mascotas") && <SectionMascotas userData={userData}/>
                    }
                    {
                        ( activeBtn === "perfil" ) && <SectionPerfil userData={userData}/>
                    }    
                    { 
                        ( activeBtn === "citas" ) &&
                        <>
                        <h1 className='profile__section' style={{marginBottom:"50px"}}>Citas pendientes</h1>
                        <div className='profile__citas'>
                            {
                            citasAll.map( cita => (
                                <CitaCard
                                    key={cita.id}
                                    id={cita.id}
                                    date = {cita.date}
                                    time = {cita.time}
                                    nombreMc = {cita.nombreMc}
                                    nombreDn = {cita.nombreDn}
                                    telDn = {cita.telDn}
                                    raza = {cita.raza}
                                    anios = {cita.anios}
                                    veterinario = {cita.veterinario}
                                    gender = {cita.gender}
                                    imgUrl = {cita.imgUrl}
                                />
                            ))
                            }
                        </div>
                        </>
                    }
                    </div>     
                </div> 
            }
            {
                ( !token || !user ) &&
                <NoAutenticado txt={"Al parecer no has iniciado sesión, te invitamos a hacerlo."} />
            }
        </div>
        
    )
}



