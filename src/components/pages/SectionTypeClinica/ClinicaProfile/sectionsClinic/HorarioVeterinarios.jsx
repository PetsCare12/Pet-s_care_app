import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getVeterinarios } from '../../../../../helpers/API Consumer/useVeterinariosConsumer';
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioVeterinarios = ( {data} ) => {

  const [vets, setvets] = useState([]);
  const [temp_horarios, settemp_horarios] = useState([]);
  const [ids_horarios_updated, setids_horarios_updated] = useState([]);
  const [toSetVets, settoSetVets] = useState(false);
  const [loader, setloader] = useState(false);
  const [vets_disp, setvets_disp] = useState(true);
  const [str_warn, setstr_warn] = useState("");

  const [lunes_in_hour, setlunes_in_hour] = useState("");
  const [lunes_out_hour, setlunes_out_hour] = useState("");
  const [martes_in_hour, setmartes_in_hour] = useState("");
  const [martes_out_hour, setmartes_out_hour] = useState("");
  const [miercoles_in_hour, setmiercoles_in_hour] = useState("");
  const [miercoles_out_hour, setmiercoles_out_hour] = useState("");
  const [jueves_in_hour, setjueves_in_hour] = useState("");
  const [jueves_out_hour, setjueves_out_hour] = useState("");
  const [viernes_in_hour, setviernes_in_hour] = useState("");
  const [viernes_out_hour, setviernes_out_hour] = useState("");
  const [sabado_in_hour, setsabado_in_hour] = useState("");
  const [sabado_out_hour, setsabado_out_hour] = useState("");
  const [domingo_in_hour, setdomingo_in_hour] = useState("");
  const [domingo_out_hour, setdomingo_out_hour] = useState("");

    let nit = data.nit;

  useEffect(() => {
    setloader(true);
    getVeterinarios( nit ).then(info => {
      let active_vets = [];
      if (info.status === 400) {
        settoSetVets(true);
        setloader(false);
        setvets_disp(false)
      }else{
        for (const key in info) {
          if (info[key].estadoVt === 1 ) {
            active_vets.push(info[key]);
          }
        }
        setvets_disp(true);
        setvets(active_vets);
        settoSetVets(false);
        setloader(false);
      }
    })
  }, [data])

  useEffect(() => {
    let horariosVets = {};
    for (const key in vets) {
      let k = vets[key].documento;
      horariosVets[k] = vets[key].horarios;
    }
  }, [vets])
  
  useEffect(() => {

    
      
    let arr = temp_horarios.horarios;

    for (let c in arr) {

      let obj3 = arr[c];
      // let arr_ids = ids_horarios_updated;
      // arr_ids.push(obj3.idHorarios);
      // setids_horarios_updated(arr_ids);

      if (obj3.diaHorarios === "lunes") {
        
        setlunes_in_hour(obj3.horaInicio);
        setlunes_out_hour(obj3.horaSalida);

      }else if (obj3.diaHorarios === "martes") {

        setmartes_in_hour(obj3.horaInicio);
        setmartes_out_hour(obj3.horaSalida);
        
      }else if (obj3.diaHorarios === "miercoles") {

        setmiercoles_in_hour(obj3.horaInicio);
        setmiercoles_out_hour(obj3.horaSalida);
        
      }else if (obj3.diaHorarios === "jueves") {

        setjueves_in_hour(obj3.horaInicio);
        setjueves_out_hour(obj3.horaSalida);
        
      }else if (obj3.diaHorarios === "viernes") {

        setviernes_in_hour(obj3.horaInicio);
        setviernes_out_hour(obj3.horaSalida);
        
      }else if (obj3.diaHorarios === "sabado") {

        setsabado_in_hour(obj3.horaInicio);
        setsabado_out_hour(obj3.horaSalida);
        
      }else if (obj3.diaHorarios === "domingo") {

        setdomingo_in_hour(obj3.horaInicio);
        setdomingo_out_hour(obj3.horaSalida);
        
      }

    }

    console.log(ids_horarios_updated);

  }, [temp_horarios])
  
  const get_horario_vet_byID = (e) => { 
    settemp_horarios(e); 
    // setids_horarios_updated([]);
  }

  const getDates = (e) => {

    e.preventDefault();

    if (temp_horarios.length === 0) {

      setstr_warn("Selecciona un veterinario!");
      setTimeout(() => setstr_warn(""), 3500);

    }else{

      let hoursAvalibles =  [
        { 
          "idHorarios" : ids_horarios_updated[0],
          "diaHorarios" : "lunes",
          "horaInicio" : e.target[2].value,
          "horaSalida"  : e.target[4].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated[1],
          "diaHorarios" : "martes",
          "horaInicio" : e.target[7].value,
          "horaSalida"  : e.target[9].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated[2],
          "diaHorarios" : "miercoles",
          "horaInicio" : e.target[12].value,
          "horaSalida"  : e.target[14].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated[3],
          "diaHorarios" : "jueves",
          "horaInicio" : e.target[17].value,
          "horaSalida"  : e.target[19].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated[4],
          "diaHorarios" : "viernes",
          "horaInicio" : e.target[22].value,
          "horaSalida"  : e.target[24].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated[5],
          "diaHorarios" : "sabado",
          "horaInicio" : e.target[27].value,
          "horaSalida"  : e.target[29].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated[6],
          "diaHorarios" : "domingo",
          "horaInicio" : e.target[32].value,
          "horaSalida"  : e.target[34].value
        }
      ]

    console.log(hoursAvalibles);

    }
  }

return (

  <div className='horarios_veterinarios_comp'>

    <form onSubmit={getDates} className="horario_form animate__animated animate__fadeIn">
      
    <div className="title_cont">
          <h3 className='profile__editarPerfil title_hour'>{"Horario Veterinarios"}</h3>

          { (loader) && <div id='login-spin-clinic' className='spiner'></div> }
          { (str_warn) && <p>{ str_warn }</p> }

    </div>
      <div className="part1_horarios">
        <Dias_Horario_UI 
          dia={"Lunes"}
          name_hour_in={"lunes_in"}
          name_hour_out={"lunes_out"}
          value_hora_entrada={lunes_in_hour}
          value_hora_salida={lunes_out_hour}
        />

        <Dias_Horario_UI 
          dia={"Martes"}
          name_hour_in={"martes_in"}
          name_hour_out={"martes_out"}
          value_hora_entrada={martes_in_hour}
          value_hora_salida={martes_out_hour}
        />

        <Dias_Horario_UI 
          dia={"Miercoles"}
          name_hour_in={"martes_in"}
          name_hour_out={"martes_out"}
          value_hora_entrada={miercoles_in_hour}
          value_hora_salida={miercoles_out_hour}
        />

        </div>

        <div className="part2_horarios">

        <Dias_Horario_UI 
          dia={"Jueves"}
          name_hour_in={"jueves_in"}
          name_hour_out={"jueves_out"}
          value_hora_entrada={jueves_in_hour}
          value_hora_salida={jueves_out_hour}
        />

        <Dias_Horario_UI 
          dia={"Viernes"}
          name_hour_in={"viernes_in"}
          name_hour_out={"viernes_out"}
          value_hora_entrada={viernes_in_hour}
          value_hora_salida={viernes_out_hour}
        />

        <Dias_Horario_UI 
          dia={"Sabado"}
          name_hour_in={"sabado_in"}
          name_hour_out={"sabado_out"}
          value_hora_entrada={sabado_in_hour}
          value_hora_salida={sabado_out_hour}
        />

        <Dias_Horario_UI 
          dia={"Domingo"}
          name_hour_in={"domingo_in"}
          name_hour_out={"domingo_out"}
          value_hora_entrada={domingo_in_hour}
          value_hora_salida={domingo_out_hour}
        />


        </div>
        <div className="part1_horarios">
        <ButtonUI text="Actualizar"  type="submit" style="submit btn_marg"></ButtonUI>
        </div>
    </form>

    <div className="list_vets">
      <h3 className='profile__editarPerfil title_hour'>{"Veterinarios Activos"}</h3>
      <ul>
          {
            (vets_disp == true) 
            ?
              vets.map((item , index) => (
                <li className="liVetSpace animate__animated animate__backInUp li_horarios" onClick={() => get_horario_vet_byID(item)}>
                  <div className="liVet space_li" >
                                      
                    <div className="cont_vet_li">
                      <p>{item.nombre}</p>
                    </div>

                    <div className="cont_vet_li">
                      <p>Doc. {item.documento}</p>
                    </div>

                    <div className="cont_vet_li">
                      <p style={{color:"#008eff"}}>{item.especialidad}</p>
                    </div>

                  </div>
                </li>
              ))
            :
              <li  className="liVetSpace animate__animated animate__backInUp li_horarios">
                <p className='profile__editarPerfil cc'>No hay Veterinarios Registrados</p>
              </li>
          }
      </ul>
    </div>
  
  </div>

  )
}

