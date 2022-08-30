import React from 'react'
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioClinica = ( {data} ) => {

  let nit = data.nit;
  console.log(nit);
    const setDates = (e) => {
        e.preventDefault();
        let hoursAvalibles = 
        [
            { 
              "idHorarios" : `${nit+1}`,
              "diaHorarios" : "Lunes",
              "horaInicio" : e.target[0].value,
              "horaSalida"  : e.target[1].value
            }
          ,
            {
              "idHorarios" : `${nit+2}`,
              "diaHorarios" : "Martes",
              "horaInicio" : e.target[2].value,
              "horaSalida"  : e.target[3].value
            }
          ,
            {
              "idHorarios" : `${nit+3}`,
              "diaHorarios" : "Miercoles",
              "horaInicio" : e.target[4].value,
              "horaSalida"  : e.target[5].value
            }
          ,
            {
              "idHorarios" : `${nit+4}`,
              "diaHorarios" : "Jueves",
              "horaInicio" : e.target[6].value,
              "horaSalida"  : e.target[7].value
            }
          ,
            {
              "idHorarios" : `${nit+5}`,
              "diaHorarios" : "Viernes",
              "horaInicio" : e.target[8].value,
              "horaSalida"  : e.target[9].value
            }
          ,
            {
              "idHorarios" : `${nit+6}`,
              "diaHorarios" : "Sabado",
              "horaInicio" : e.target[10].value,
              "horaSalida"  : e.target[11].value
            }
          ,
            {
              "idHorarios" : `${nit+7}`,
              "diaHorarios" : "Domingo",
              "horaInicio" : e.target[12].value,
              "horaSalida"  : e.target[13].value
            }
        ]
    
        console.log(hoursAvalibles);
      }

  return (
    <form onSubmit={setDates} className="horario_form animate__animated animate__fadeIn">

      <div className="title_cont">
        <h3 className='profile__editarPerfil title_hour'>{"Horario Clinica"}</h3><div id='login-spin-clinic' className='spiner'></div>
      </div>
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
      <ButtonUI text="Actualizar"  type="submit" style="submit btn_marg"></ButtonUI>
     </div>
    </form>
  )
}