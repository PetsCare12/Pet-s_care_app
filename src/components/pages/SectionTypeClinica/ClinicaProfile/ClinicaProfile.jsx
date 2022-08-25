import React, { useEffect, useState } from 'react'
import { PhotoProfile } from '../../Profile/PhotoProfile';
import { FaHome } from 'react-icons/fa';
import { HorarioClinica } from './sectionsClinic/HorarioClinica';
import { HorarioVeterinarios } from './sectionsClinic/HorarioVeterinarios';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { getClinicaById } from '../../../../helpers/API Consumer/useClinicasConsumer';
import { NoAutenticado } from "../../NoAutenticado/NoAutenticado";
import { SectionPerfilClinica } from "../ClinicaProfile/sectionsClinic/SectionPerfilClinica";
import '../ClinicaProfile/ClinicaProfile.css';

export const ClinicaProfile = () => {

  let nameClinic = "";

  const [clinicObjt, setclinicObjt] = useState({});
  const [activeBtn, setActiveBtn] = useState("perfil");
  const [imagenCli, setimagenCli] = useState("");
  const [tokenUser, setTokenUser] = useState(JSON.parse(localStorage.getItem("usuario")));

  console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
  useEffect(() => {

    if ( !!tokenUser ) {

      console.log("No esta vacio");
      getClinicaById(tokenUser.id).then(data => {
        setimagenCli(data.data.imagenclinica);
        setclinicObjt(data.data);
      });
      
    }else{
      
      console.log("Esta vacio");
      
    }
    
  }, [tokenUser])
  
  nameClinic = clinicObjt.nombre;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("clinica");
    window.location = "/login";
    setActiveBtn("logout");
  }
  
  return (
    <div>
        {
          ( JSON.stringify(tokenUser) !== '{}' )
          ?
            <div className='profile_clinica animate__animated animate__fadeIn'>

              <header className="section_profile_3_clinics">

                <div className="title_profile_clinic">
                  <h1 style={{color:'white'}}>{"Administra tu Clinica"}</h1>
                  <h3 style={{color:'white'}}>{nameClinic}</h3>
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
                      <PhotoProfile img={ imagenCli }/>
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
                      <button onClick={() => {setActiveBtn("horario")}} className={`profile__btnProfile ${(activeBtn === "horario") && "perfil_active"}`}>
                          <div className='profile__titleBtn'>Horario Clinica</div>
                      </button>
                      <button onClick={() => {setActiveBtn("horario_veterinario")}} className={`profile__btnProfile ${(activeBtn === "horario_veterinario") && "perfil_active"}`}>
                          <div className='profile__titleBtn'>Horario Veterinarios</div>
                      </button>  
                      <button onClick={() => {setActiveBtn("gestion") 
                      window.location = "/gestionClinica"}} className={`profile__btnProfile mt-10 ${(activeBtn === "gestion") && "perfil_active"}`}>
                          <div className='profile__titleBtn gestion_space'><BsFillArrowRightCircleFill style={{fontSize:"20px"}} /><p>Gestiona tus Veterinarios</p></div>
                      </button>

                      <button id='perfil__logout' onClick={handleLogout} className={`profile__btnProfile ${(activeBtn === "logout") && "perfil_active"}`}>
                            <div className='profile__titleBtn'>Cerrar sesión</div>
                      </button>            

                    </div>

              </div>

                    <div className="section_profile_1_clinics animate__animated animate__fadeIn">

                      <div className={`horarios_define ${(activeBtn === "horario") ? "horarios_define_show" : "horarios_define_hidde"}`}>
                          
                          <HorarioClinica data={clinicObjt}/>

                      </div>

                      <div className={`horarios_define ${(activeBtn === "horario_veterinario") ? "horarios_define_show" : "horarios_define_hidde"}`}>

                          <HorarioVeterinarios data={clinicObjt} />

                      </div>
                      {
                        ( activeBtn === "perfil" ) && <SectionPerfilClinica userData={clinicObjt} imgCli={imagenCli}/>
                      }
                    </div>
                    
                </div>
            </div>
          :
            <NoAutenticado txt={"Al parecer no has iniciado sesión, te invitamos a hacerlo."} />
        }
    </div>
  )
}
