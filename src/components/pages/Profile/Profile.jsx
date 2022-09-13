import React, { useState, useEffect } from 'react';
import { PhotoProfile } from './PhotoProfile';
import { SectionMascotas } from './sections/SectionMascotas';
import { SectionPerfil } from './sections/SectionPerfil';
import { FaHome } from 'react-icons/fa';
import { CitaCard } from "../Citas/CitaCard";
import { NoAutenticado } from '../NoAutenticado/NoAutenticado';
import { getUsuarioId } from '../../../helpers/API Consumer/test';
import { CgMenu } from "react-icons/cg";
import { BiLeftArrowCircle } from "react-icons/bi";
import './Profile.css';
import './query.css';
import { useNavigate } from 'react-router';
import { Citas } from '../Citas/Citas';

export const Profile = () => {

    const [activeBtn, setActiveBtn] = useState("perfil");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [userData, setUserData] = useState({});
    const [desplegar, setDesplegar] = useState(false);

    const navigate = useNavigate();


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
                    <div className={`profile__left ${desplegar ? "mostrar animate__animated animate__fadeInLeft" : "" }`}>
                        {desplegar && <div onClick={ () => setDesplegar( false )}><BiLeftArrowCircle size={'30px'} className='left-row'/></div>}

                        <PhotoProfile 
                            img={userData.imagenUsu}
                        />
                        <button onClick={() => {setActiveBtn("home") 
                                                navigate("/")
                                                }} 
                        className={`profile__btnProfile mt-10 ${(activeBtn === "home") && "perfil_active"}`}>

                            <div className='profile__titleBtn'><FaHome style={{fontSize:"20px"}} /></div>
                        </button>
                        <button onClick={() => {
                            setActiveBtn("perfil")
                            setDesplegar( false )
                            }} className={`profile__btnProfile ${(activeBtn === "perfil") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Perfil</div>
                        </button>
                        <button onClick={() => {
                            setActiveBtn("mascotas")
                            setDesplegar( false )
                            }} className={`profile__btnProfile ${(activeBtn === "mascotas") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Mascotas</div>
                        </button>
                        <button onClick={() => {
                            setActiveBtn("citas");
                            setDesplegar( false );
                        }} className={`profile__btnProfile ${(activeBtn === "citas") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Citas pendientes</div>
                        </button>
                        <button onClick={() => {
                                navigate("/clinicas")
                                setActiveBtn("clinicas")
                            }} className={`profile__btnProfile ${(activeBtn === "clinicas") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Clínicas</div>
                        </button>

                    </div>
                    <button id='perfil__logout' onClick={handleLogout} className={`profile__btnProfile ${(activeBtn === "logout") && "perfil_active"}`}>
                        <div className='profile__titleBtn'>Cerrar sesión</div>
                    </button>
                    <div className={`profile__right ${ desplegar && "ocultar"}`}>
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
                            <Citas />
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

                <div onClick={ () => setDesplegar(true)} className="boton_despliegue-profile block">
                    <CgMenu />
                </div>

        </div>
        
    )
}



