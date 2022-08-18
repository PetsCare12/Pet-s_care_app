import React from 'react'
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import '../ClinicaProfile/ClinicaProfile.css';

export const ClinicaProfile = () => {

  const getDates = (e) => {
    e.preventDefault();
    console.log(e);
  }


  return (
    <div>
        <div className='profile_clinica'>

            <div className="section_profile_1_clinics">

                <div className="horarios_define">

                 <form onSubmit={getDates}>
                 <div className='table_horarios'>
                      <div className="header_table">

                        <div className="head head_1"><h3>{"Dias"}</h3></div>

                        <div className="head head_2"><h3>{"Hr. Entrada - Salida"}</h3></div>

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
                                    <input type="time" name="" id="" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                </div>

                                <div className="hours hours_martes">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                </div>

                                <div className="hours hours_miercoles">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                </div>

                                <div className="hours hours_jueves">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                </div>

                                <div className="hours hours_viernes">
                                  <div className="cont_hours_1">
                                    <h5><span>Entrada:</span></h5>
                                    <input type="time" name="" id="" />
                                  </div>
                                  <div className="cont_hours_2">
                                    <h5><span>Salida:</span></h5>
                                    <input type="time" name="" id="" />
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

            <div className="section_profile_2_clinics"></div>

            <div className="section_profile_3_clinics"></div>

            <div className="section_profile_4_clinics"></div>
            
        </div>
                
    </div>
  )
}
