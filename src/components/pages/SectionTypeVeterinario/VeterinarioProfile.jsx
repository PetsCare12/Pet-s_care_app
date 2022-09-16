import React, { useEffect, useState } from 'react'
import { PhotoProfile } from '../Profile/PhotoProfile';
import { FaHome } from 'react-icons/fa';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NoAutenticado } from '../NoAutenticado/NoAutenticado';
import { LoaderCards } from '../../UI/LoaderCards/LoaderCards';
import { getVeterinarioById } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import { Perfil } from './components/Perfil';
import { Agendas } from './components/Agendas';

export const VeterinarioProfile = () => {

  const [activeBtn, setActiveBtn] = useState("perfil");
  const token =localStorage.getItem("token");
  const [loader, setLoader] = useState(true);
  const [veterinario, setVeterinario] = useState([]);


  const { id } = JSON.parse(localStorage.getItem("usuario"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("clinica");
    window.location = "/login";
    setActiveBtn("logout");
  }

  useEffect( () => {

    getVeterinarioById( id ).then( info => {

      setVeterinario( info );
      setLoader( false );


    })

  }, [])
  
  return (
    <div>
        {
          ( token )
          ?
          <>
              <div className='profile_clinica animate__animated animate__fadeIn'>

                <header className="section_profile_3_clinics">

                  <div className="title_profile_clinic">
                    <h1 style={{color:'white'}}>{"Veterinario"}</h1>
                    <h3 style={{color:'white'}}>{veterinario.nombre} {veterinario.apellidos}</h3>
                  </div>

                  <div className="wave wave1"></div>
                  <div className="wave wave2"></div>
                  <div className="wave wave3"></div>
                  <div className="wave wave4"></div>

                </header>

                <div className="section_bottom">

                <div className="section_profile_4_clinics">

                    <div className="img_profile_clinic">

                      <div className="img_cont">
                        <PhotoProfile img={ veterinario.imagenVete }/>
                      </div>

                      </div>

                      <div className="section_profile_2_clinics">
                        <button onClick={() => {setActiveBtn("home") 
                        window.location = "/"}}className={`profile__btnProfile mt-10 ${(activeBtn === "home") && "perfil_active"}`}>
                            <div className='profile__titleBtn'><FaHome style={{fontSize:"20px"}} /></div>
                        </button>
                        
                        <button onClick={() => {setActiveBtn("perfil")}} className={`profile__btnProfile ${(activeBtn === "perfil") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Perfil</div>
                        </button>
                        <button onClick={() => {setActiveBtn("agenda")}} className={`profile__btnProfile ${(activeBtn === "agenda") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Citas pendientes</div>
                        </button>

                        <button id='perfil__logout' onClick={handleLogout} className={`profile__btnProfile ${(activeBtn === "logout") && "perfil_active"}`}>
                              <div className='profile__titleBtn'>Cerrar sesión</div>
                        </button>            

                      </div>

                </div>
                      <div className="section_profile_1_clinics animate__animated animate__fadeIn">

                      {
                        loader ? <div style={{marginLeft: "45%",marginTop: "10%"}}><LoaderCards /></div>
                        : 
                        <>
                          {
                            activeBtn==="perfil" ? <Perfil data={{...veterinario}}/>  : activeBtn==="agenda" ? <Agendas id={id} /> : null
                          }
                        </>
                      }

                      </div>
                      
                  </div>
              </div>
            
          </>
          :
            <NoAutenticado txt={"Al parecer no has iniciado sesión, te invitamos a hacerlo."} />
        }
    </div>
  )
}
