import React, { useState } from 'react'
import { PhotoProfile } from '../../Profile/PhotoProfile';
import { FaHome } from 'react-icons/fa';
import { HorarioClinica } from './Horarios/HorarioClinica';
import { HorarioVeterinarios } from './Horarios/HorarioVeterinarios';
import { imageRandom } from "../../../../helpers/RandomImages/imagenessa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { useForm } from '../../../../helpers/useForm';
import '../ClinicaProfile/ClinicaProfile.css';
import { getClinicaById } from '../../../../helpers/API Consumer/useClinicasConsumer';

export const ClinicaProfile = () => {

  let nameClinic = "Veterinaria Salud Canina";
  const tokenClinic = localStorage.getItem('token');
  const user = localStorage.getItem('usuario');

  const [imgUrl, setimgUrl] = useState(imageRandom());
  const [activeBtn, setActiveBtn] = useState("perfil");
  const [useToken, setuseToken] = useState(tokenClinic)

  useEffect(() => {

    if (JSON.stringify(useToken) != "{}") {
      getClinicaById(user.id).then(data => {
        setuseToken = data;
        console.log(useToken);
      });
    }else{
      setuseToken({});
    }

  }, [])

  const { form,errors,loading,response,estatusResponse,handleChangeVet,handleBlur,handleSubmit } = useForm( initialForm , validateForm );

  const initialForm = {
    nit : "",
    nombre : "",
    direccion : "",
    telefono : "",
    correoCv : "",
    password : "",
    imagenclinica : "",
    estadoCli : 1
  };

  const validateForm = () => {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("clinica");
    window.location = "/login";
    setActiveBtn("logout");
  }

  const act_clinica = () => {};

  return (
    <div>
        {
          JSON.stringify(useToken) != '{}'

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
                    <PhotoProfile img={imgUrl}/>
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
                    window.location = "/gestionClinica"}}className={`profile__btnProfile mt-10 ${(activeBtn === "gestion") && "perfil_active"}`}>
                        <div className='profile__titleBtn gestion_space'><BsFillArrowRightCircleFill style={{fontSize:"20px"}} /><p>Gestiona tus Veterinarios</p></div>
                    </button>

                    <button id='perfil__logout' onClick={handleLogout} className={`profile__btnProfile ${(activeBtn === "logout") && "perfil_active"}`}>
                          <div className='profile__titleBtn'>Cerrar sesión</div>
                    </button>            

                  </div>

            </div>

                  <div className="section_profile_1_clinics animate__animated animate__fadeIn">

                    <div className={`horarios_define ${(activeBtn === "horario") ? "horarios_define_show" : "horarios_define_hidde"}`}>
                        
                        <HorarioClinica />

                    </div>

                    <div className={`horarios_define ${(activeBtn === "horario_veterinario") ? "horarios_define_show" : "horarios_define_hidde"}`}>

                        <HorarioVeterinarios />

                    </div>

                    <div className={`perfil ${(activeBtn === "perfil") ? "perfil_show" : "perfil_hidde"}`}>

                        <h3>PErfil juasjjuas</h3>

                        <form onSubmit={act_clinica}>

                          <input type="text" className='input'/>
                          <input type="text" className='input'/>
                          <input type="text" className='input'/>
                          <input type="text" className='input'/>

                          <input type="password" className='input'/>
                          <input type="password" className='input'/>

                          <ButtonUI type="submit" style="submit" text="Actualizar"></ButtonUI>
                        </form>
                    </div>
                  </div>
              </div>
          </div>

          : 
            ()
          
        }
    </div>
  )
}
