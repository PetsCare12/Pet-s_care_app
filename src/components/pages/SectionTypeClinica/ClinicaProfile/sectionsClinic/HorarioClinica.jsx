import React from 'react'
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';

export const HorarioClinica = () => {

    const getDates = (e) => {
        e.preventDefault();
        console.log("Horario CLinica");
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
    <form onSubmit={getDates} className="animate__animated animate__fadeIn">
    <div className='table_horarios'>
        <h2>{"Horario Clinica"}</h2>
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

  )
}
