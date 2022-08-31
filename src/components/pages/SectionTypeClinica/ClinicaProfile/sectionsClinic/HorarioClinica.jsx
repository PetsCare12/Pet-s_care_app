import React, { useEffect, useState } from 'react'
import { deleteHorarioGeneral, setHorarioClinica } from '../../../../../helpers/API Consumer/useHorariosConsumer';
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioClinica = ( {data} ) => {

  const token = localStorage.getItem('token');
  const [requestHour, setrequestHour] = useState("");
  

  let nit = data.nit;

    const setDates = (e) => {

      let errors = {};

        e.preventDefault();
        let hoursAvalibles = 
        [
            { 
              "idHorarios" : ``,
              "diaHorarios" : "Lunes",
              "horaInicio" : e.target[0].value,
              "horaSalida"  : e.target[1].value
            }
          ,
            {
              "idHorarios" : ``,
              "diaHorarios" : "Martes",
              "horaInicio" : e.target[2].value,
              "horaSalida"  : e.target[3].value
            }
          ,
            {
              "idHorarios" : ``,
              "diaHorarios" : "Miercoles",
              "horaInicio" : e.target[4].value,
              "horaSalida"  : e.target[5].value
            }
          ,
            {
              "idHorarios" : ``,
              "diaHorarios" : "Jueves",
              "horaInicio" : e.target[6].value,
              "horaSalida"  : e.target[7].value
            }
          ,
            {
              "idHorarios" : ``,
              "diaHorarios" : "Viernes",
              "horaInicio" : e.target[8].value,
              "horaSalida"  : e.target[9].value
            }
          ,
            {
              "idHorarios" : ``,
              "diaHorarios" : "Sabado",
              "horaInicio" : e.target[10].value,
              "horaSalida"  : e.target[11].value
            }
          ,
            {
              "idHorarios" : ``,
              "diaHorarios" : "Domingo",
              "horaInicio" : e.target[12].value,
              "horaSalida"  : e.target[13].value
            }
        ]

        for (let j in hoursAvalibles) {

          let obj1 = hoursAvalibles[j];

          if (obj1.horaInicio === "") {

            errors.validacion = `Campo Vacío Hora Entrada del día ${obj1.diaHorarios}`
            break;

          }else if (obj1.horaSalida === "") {
            
            errors.validacion = `Campo Vacío Hora Salida del día ${obj1.diaHorarios}`
            break;

          }
        }

        if (JSON.stringify(errors) === '{}') {
          
          for (let k in hoursAvalibles){

            let obj2 = hoursAvalibles[k];
            setHorarioClinica( obj2 , nit , token).then( data => {
              console.log(data);
            });

          }

        }else{

          console.log("No se puede registrar el horario");
          console.log(errors.validacion);

        }
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
          value={""}
        />

        <Dias_Horario_UI 
          dia={"Martes"}
          name_hour_in={"martes_in"}
          name_hour_out={"martes_out"}
          value={""}
        />
  
        <Dias_Horario_UI 
          dia={"Miercoles"}
          name_hour_in={"martes_in"}
          name_hour_out={"martes_out"}
          value={""}
        />
        
      </div>

     <div className="part2_horarios">

      <Dias_Horario_UI 
          dia={"Jueves"}
          name_hour_in={"jueves_in"}
          name_hour_out={"jueves_out"}
          value={""}
        />

        <Dias_Horario_UI 
          dia={"Viernes"}
          name_hour_in={"viernes_in"}
          name_hour_out={"viernes_out"}
          value={""}
        />

        <Dias_Horario_UI 
          dia={"Sabado"}
          name_hour_in={"sabado_in"}
          name_hour_out={"sabado_out"}
          value={""}
        />

        <Dias_Horario_UI 
          dia={"Domingo"}
          name_hour_in={"domingo_in"}
          name_hour_out={"domingo_out"}
          value={""}
        />

     </div>
     <div className="part1_horarios">
      <ButtonUI text="Actualizar"  type="submit" style="submit btn_marg"></ButtonUI>
     </div>
    </form>
  )
}