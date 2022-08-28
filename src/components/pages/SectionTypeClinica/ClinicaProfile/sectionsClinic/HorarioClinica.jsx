import React from 'react'
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioClinica = () => {

    const getDates = (e) => {
        e.preventDefault();
        console.log("Horario Clinica");
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
    <form onSubmit={getDates} className="horario_form animate__animated animate__fadeIn">

      <div className="part1_horarios">

        <Dias_Horario_UI 
          dia={"Lunes"}
          name_hour_in={"lunes_in"}
          name_hour_out={"lunes_out"}
        />

        <Dias_Horario_UI 
          dia={"Martes"}
          name_hour_in={"martes_in"}
          name_hour_out={"martes_out"}
        />
  
        <Dias_Horario_UI 
          dia={"Miercoles"}
          name_hour_in={"martes_in"}
          name_hour_out={"martes_out"}
        />
        
      </div>

     <div className="part2_horarios">

      <Dias_Horario_UI 
          dia={"Jueves"}
          name_hour_in={"jueves_in"}
          name_hour_out={"jueves_out"}
        />

        <Dias_Horario_UI 
          dia={"Viernes"}
          name_hour_in={"viernes_in"}
          name_hour_out={"viernes_out"}
        />

        <Dias_Horario_UI 
          dia={"Sabado"}
          name_hour_in={"sabado_in"}
          name_hour_out={"sabado_out"}
        />

        <Dias_Horario_UI 
          dia={"Domingo"}
          name_hour_in={"domingo_in"}
          name_hour_out={"domingo_out"}
        />

     </div>
     <div className="part1_horarios">
      <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
     </div>
    </form>
  )
}