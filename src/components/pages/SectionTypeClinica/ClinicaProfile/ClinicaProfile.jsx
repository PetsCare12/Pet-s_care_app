import React, { useState } from 'react'
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import { PhotoProfile } from '../../Profile/PhotoProfile';
import { FaHome } from 'react-icons/fa';
import '../ClinicaProfile/ClinicaProfile.css';

export const ClinicaProfile = () => {

  let nameClinic = "Veterinaria Salud Canina";

  const [activeBtn, setActiveBtn] = useState("")

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("clinica");
    window.location = "/login";
    setActiveBtn("logout");
  }

  const getDates = (e) => {
    e.preventDefault();

    let hoursAvalibles = 
    {
      "Lunes" : 
        {
          "Entrada" : e.target[0].value,
          "Salida"  : e.target[1].value
        }
      ,
      "Martes" : 
        {
          "Entrada" : e.target[2].value,
          "Salida"  : e.target[3].value
        }
      ,
      "Miercoles" : 
        {
          "Entrada" : e.target[4].value,
          "Salida"  : e.target[5].value
        }
      ,
      "Jueves" : 
        {
          "Entrada" : e.target[6].value,
          "Salida"  : e.target[7].value
        }
      ,
      "Viernes" : 
        {
          "Entrada" : e.target[8].value,
          "Salida"  : e.target[9].value
        }
    }

    console.log(hoursAvalibles);
  }


  return (
    <div>
        <div className='profile_clinica'>

            <header className="section_profile_3_clinics">

              <div className="title_profile_clinic">
                <h1 style={{color:'white'}}>{"Administra tu clinica"}</h1>
                <h3 style={{color:'white'}}>{nameClinic}</h3>
              </div>

              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>

            </header>

            <div className="section_profile_4_clinics">

              <div className="img_profile_clinic">

                <div className="img_cont">
                  <PhotoProfile img={"https://img.lalr.co/cms/2020/07/14130856/Cl%C3%ADnica-Azul.jpg?size=xl"}/>
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
                <button onClick={() => {setActiveBtn("mascotas")}} className={`profile__btnProfile ${(activeBtn === "mascotas") && "perfil_active"}`}>
                    <div className='profile__titleBtn'>Mascotas</div>
                </button>
                <button onClick={() => {setActiveBtn("citas")}} className={`profile__btnProfile ${(activeBtn === "citas") && "perfil_active"}`}>
                    <div className='profile__titleBtn'>Citas pendientes</div>
                </button>  

                <button id='perfil__logout' onClick={handleLogout} className={`profile__btnProfile ${(activeBtn === "logout") && "perfil_active"}`}>
                      <div className='profile__titleBtn'>Cerrar sesión</div>
                </button>            

              </div>

            </div>

            <div className="section_profile_1_clinics">

                <div className="horarios_define">

                 <form onSubmit={getDates}>
                 <div className='table_horarios'>
                      <div className="header_table">

                        <div className="head head_1"><h3>{"Dias"}</h3></div>

                        <div className="head head_2"><h3>{"Horas"}</h3></div>

                        </div>

                        <div className="body_table">

                          <div className="days_table">

                              <div className="days days_lunes"><h4><span>{"Lunes"}</span></h4></div>
                              <div className="days days_martes"><h4><span>{"Martes"}</span></h4></div>
                              <div className="days days_miercoles"><h4><span>{"Miercoles"}</span></h4></div>
                              <div className="days days_jueves"><h4><span>{"Jueves"}</span></h4></div>
                              <div className="days days_viernes"><h4><span>{"Viernes"}</span></h4></div>

                          </div>

                          <div className="hours_table">

                              <div className="hora_entrada">

                                <div className="hours hours_lunes">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="lunes_hours_in" id="lunes_in" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="lunes_hours_leave" id="lunes_leave" />
                                  </div>
                                </div>

                                <div className="hours hours_martes">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="martes_hours_in" id="martes_in" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="martes_hours_leave" id="martes_leave" />
                                  </div>
                                </div>

                                <div className="hours hours_miercoles">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="miercoles_hours_in" id="miercoles_in" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="miercoles_hours_leave" id="miercoles_leave" />
                                  </div>
                                </div>

                                <div className="hours hours_jueves">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="jueves_hours_in" id="jueves_in" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="lunes_hours_in" id="jueves_leave" />
                                  </div>
                                </div>

                                <div className="hours hours_viernes">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="viernes_hours_in" id="viernes_in" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="viernes_hours_in" id="viernes_leave" />
                                  </div>
                                </div>

                              </div>

                          </div>
                      </div>
                      <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
                    </div>
                 </form>

                </div>

            </div>
        </div>
    </div>
  )
}
