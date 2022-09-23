import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { putHorarioGeneral } from '../../../../../helpers/API Consumer/useHorariosConsumer';
import { getVeterinarios } from '../../../../../helpers/API Consumer/useVeterinariosConsumer';
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioVeterinarios = ( {data} ) => {

  const token = localStorage.getItem('token');

  const [vets, setvets] = useState([]);
  const [temp_horarios, settemp_horarios] = useState([]);
  const [toSetVets, settoSetVets] = useState(false);
  const [loader, setloader] = useState(true);
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
    if (str_warn === "Horario actualizada con exito") { setTimeout(() => { window.location = "/tuClinica" }, 3500); }
  }, [str_warn])
  
  useEffect(() => {

    let arr = temp_horarios.horarios;

    for (let c in arr) {

      let obj3 = arr[c];

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
  }, [temp_horarios])
  
  const get_horario_vet_byID = (e) => { settemp_horarios(e); }

  const getDates = (e) => {

    e.preventDefault();

    if (temp_horarios.length === 0) {

      setstr_warn("Selecciona un veterinario!");
      setTimeout(() => setstr_warn(""), 3500);

    }else{

      let ids_horarios_updated = {};
      let days_to_send = 0;

      temp_horarios.horarios.forEach(element => { 

        let day = element.diaHorarios;

        switch (day) {
          
          case "lunes"    :ids_horarios_updated.lunes = element.idHorarios;     break;
          case "martes"   :ids_horarios_updated.martes = element.idHorarios;    break;
          case "miercoles":ids_horarios_updated.miercoles = element.idHorarios; break;
          case "jueves"   :ids_horarios_updated.jueves = element.idHorarios;    break;
          case "viernes"  :ids_horarios_updated.viernes = element.idHorarios;   break;
          case "sabado"   :ids_horarios_updated.sabado = element.idHorarios;    break;
          case "domingo"  :ids_horarios_updated.domingo = element.idHorarios;   break;
        
          default         :break;
        }

      });

      let hoursAvalibles =  [
        { 
          "idHorarios" : ids_horarios_updated.lunes,
          "diaHorarios" : "lunes",
          "horaInicio" : e.target[2].value,
          "horaSalida"  : e.target[4].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated.martes,
          "diaHorarios" : "martes",
          "horaInicio" : e.target[7].value,
          "horaSalida"  : e.target[9].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated.miercoles,
          "diaHorarios" : "miercoles",
          "horaInicio" : e.target[12].value,
          "horaSalida"  : e.target[14].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated.jueves,
          "diaHorarios" : "jueves",
          "horaInicio" : e.target[17].value,
          "horaSalida"  : e.target[19].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated.viernes,
          "diaHorarios" : "viernes",
          "horaInicio" : e.target[22].value,
          "horaSalida"  : e.target[24].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated.sabado,
          "diaHorarios" : "sabado",
          "horaInicio" : e.target[27].value,
          "horaSalida"  : e.target[29].value
        }
      ,
        {
          "idHorarios" : ids_horarios_updated.domingo,
          "diaHorarios" : "domingo",
          "horaInicio" : e.target[32].value,
          "horaSalida"  : e.target[34].value
        }
      ]

      const days = {

        "lunes" : e.target[0].checked,
        "martes" : e.target[5].checked,
        "miercoles" : e.target[10].checked,
        "jueves" : e.target[15].checked,
        "viernes" : e.target[20].checked,
        "sabado" : e.target[25].checked,
        "domingo" : e.target[30].checked,

      }

      for (const key in days) { if (days[key] === false) { days_to_send = days_to_send + 1; } }

      if (days_to_send !== 7) {
        
        let errors = {};
          
        for (const j in days) {
          
          if (days[j] === true) {

            let var_day = "";
            hoursAvalibles.forEach(element => {if (element.diaHorarios === j) {var_day = element;}});

            console.log("Se actualiza el dia " + j);
            
            if (var_day.horaInicio === "") {

              errors.validacion = `Campo Vacío Hora Entrada del día ${var_day.diaHorarios}`
              setloader(false);
    
            }else if (var_day.horaSalida === "") {
              
              errors.validacion = `Campo Vacío Hora Salida del día ${var_day.diaHorarios}`
              setloader(false);
    
            }

            if (JSON.stringify(errors) === '{}') {

              putHorarioGeneral( var_day , var_day.idHorarios , token).then( data => {
                setstr_warn(data);
                setTimeout(() => setstr_warn(""), 3500);
              });
              
            }else{

              setloader(false);
              setstr_warn(errors.validacion);
              setTimeout(() => setstr_warn(""), 3500);
              console.log(errors.validacion);
            }

          }else{ console.log("No se actualiza el dia " + j); }
        }

      }else if (days_to_send === 7) {

        let errors = {};
        let day = "";

        hoursAvalibles.forEach(element => { 

          day = element; 
          
          if (day.horaInicio === "") {

            errors.validacion = `Hay Campos Vacios`
            setloader(false);
  
          }else if (day.horaSalida === "") {
            
            errors.validacion = `Hay Campos Vacíos`
            setloader(false);
  
          }
        })

        if (JSON.stringify(errors) === '{}') {

          hoursAvalibles.forEach(element => {

            putHorarioGeneral( element , element.idHorarios , token).then( data => {
              setstr_warn(data);
              setTimeout(() => setstr_warn(""), 3500);
            });

          });
          
        }else{

          setloader(false);
          setstr_warn(errors.validacion);
          setTimeout(() => setstr_warn(""), 3500);
          console.log(errors.validacion);
        }
      }
    }
  }
return (

  <div className='horarios_veterinarios_comp'>

    <form onSubmit={getDates} className="horario_form animate__animated animate__fadeIn">
    <div className="title_cont">
      <h3 className='profile__editarPerfil title_hour'>{"Horario Veterinarios"}</h3>
      { (temp_horarios.length !== 0) && <p className='profile__editarPerfil title_hour'>{ "Horario de " }{ temp_horarios.nombre } { temp_horarios.apellidos }</p> }
      { (loader === true) && <div id='login-spin-clinic' className='spiner'></div> }
      { (str_warn) && <p className='profile__editarPerfil title_hour'>{ str_warn }</p> }
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
            (vets_disp === true) 
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

