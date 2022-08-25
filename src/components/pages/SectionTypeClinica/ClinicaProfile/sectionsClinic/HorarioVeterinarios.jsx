import React from 'react'
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';

export const HorarioVeterinarios = () => {

  const getDates = (e) => {
    e.preventDefault();
    console.log("Horario Veterinaria");
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
      ,
      "Sabado" : 
        {
          "Entrada" : e.target[10].value,
          "Salida"  : e.target[11].value
        }
      ,
      "Domingos - Festivos" : 
        {
          "Entrada" : e.target[12].value,
          "Salida"  : e.target[13].value
        }
    }

    console.log(hoursAvalibles);
  }

return (
<form onSubmit={getDates} className="animate__animated animate__fadeIn">
    <div className="tableUsuarios margintop">
      <ul className="responsive-table">
          <>
          <h2>{"Horario Veterinarios"}</h2>   
          <li className="table-header">
            <div className="col col-1">Dias</div>
            <div className="col col-2">Horas</div>
          </li>
          </>
          <li class="table-row">
            <div class="col col-1">
              <h4>{"Lunes"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="lunes_hours_in" id="lunes_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                  <h5><span>Salida:</span></h5>
                  <input type="time" name="lunes_hours_leave" id="lunes_leave" />
              </div>
            </div>
          </li>

          <li class="table-row">
            <div class="col col-1">
              <h4>{"Martes"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="martes_hours_in" id="martes_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                <h5><span>Salida:</span></h5>
                <input type="time" name="martes_hours_leave" id="martes_leave" />
              </div>
            </div>
          </li>

          <li class="table-row">
            <div class="col col-1">
              <h4>{"Miercoles"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="miercoles_hours_in" id="miercoles_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                <h5><span>Salida:</span></h5>
                <input type="time" name="miercoles_hours_leave" id="miercoles_leave" />
              </div>
            </div>
          </li>

          <li class="table-row">
            <div class="col col-1">
              <h4>{"Jueves"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="jueves_hours_in" id="jueves_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                <h5><span>Salida:</span></h5>
                <input type="time" name="jueves_hours_leave" id="jueves_leave" />
              </div>
            </div>
          </li>

          <li class="table-row">
            <div class="col col-1">
              <h4>{"Viernes"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="viernes_hours_in" id="viernes_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                <h5><span>Salida:</span></h5>
                <input type="time" name="viernes_hours_leave" id="viernes_leave" />
              </div>
            </div>
          </li>

          <li class="table-row">
            <div class="col col-1">
              <h4>{"Sabado"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="sabado_hours_in" id="sabado_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                <h5><span>Salida:</span></h5>
                <input type="time" name="sabado_hours_leave" id="sabado_leave" />
              </div>
            </div>
          </li>

          <li class="table-row">
            <div class="col col-1">
              <h4>{"Domingos y festivos"}</h4>
            </div>

            <div class="col col-2">

              <div className="cont_hours_1">
                <h5><span>Entrada:</span></h5>
                <input type="time" name="dom_fest_hours_in" id="dom_fest_in" />
              </div>
            </div>

            <div className="col col-2">
              <div className="cont_hours_2">
                <h5><span>Salida:</span></h5>
                <input type="time" name="dom_fest_hours_leave" id="dom_fest_leave" />
              </div>
            </div>
          </li>
      </ul>
      <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
  </div>
</form>
)
}

