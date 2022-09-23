import React, { useEffect, useState } from 'react'
import { getHorarioClinica, putHorarioGeneral, setHorarioClinica } from '../../../../../helpers/API Consumer/useHorariosConsumer';
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioClinica = ( {data} ) => {

      const token = localStorage.getItem('token');

      const [horarios, sethorarios] = useState([]);
      const [loader, setloader] = useState(false);
      const [toSetHorarios, settoSetHorarios] = useState(false);
      const [str_warn, setstr_warn] = useState("");
      const [response_update, setresponse_update] = useState("");

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
      getHorarioClinica(nit).then(info => {
        if (info.length === 0) {
          settoSetHorarios(true);
          setloader(false);
        }else{
          sethorarios([info]);
          settoSetHorarios(false);
          setloader(false);
        }
      });
    }, [data])

    useEffect(() => {
      if (str_warn === "Horario actualizada con exito") { setTimeout(() => { window.location = "/tuClinica" }, 3500); }
    }, [str_warn])

    useEffect(() => {
      
      let arr = horarios[0]

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

    }, [horarios])

    const setDates = (e) => {

      e.preventDefault();

      if (toSetHorarios === false) {

        console.log("Actualizar");
        update_horario(e);

      }else if (toSetHorarios === true) {
        
        console.log("Registra");
        build_horario(e);

      }

    } 

    const build_horario = (e) => {

      setloader(true);

      let errors = {};

      let hoursAvalibles =  [
        { 
          "idHorarios" : ``,
          "diaHorarios" : "lunes",
          "horaInicio" : e.target[2].value,
          "horaSalida"  : e.target[4].value
        }
      ,
        {
          "idHorarios" : ``,
          "diaHorarios" : "martes",
          "horaInicio" : e.target[7].value,
          "horaSalida"  : e.target[9].value
        }
      ,
        {
          "idHorarios" : ``,
          "diaHorarios" : "miercoles",
          "horaInicio" : e.target[12].value,
          "horaSalida"  : e.target[14].value
        }
      ,
        {
          "idHorarios" : ``,
          "diaHorarios" : "jueves",
          "horaInicio" : e.target[17].value,
          "horaSalida"  : e.target[19].value
        }
      ,
        {
          "idHorarios" : ``,
          "diaHorarios" : "viernes",
          "horaInicio" : e.target[22].value,
          "horaSalida"  : e.target[24].value
        }
      ,
        {
          "idHorarios" : ``,
          "diaHorarios" : "sabado",
          "horaInicio" : e.target[27].value,
          "horaSalida"  : e.target[29].value
        }
      ,
        {
          "idHorarios" : ``,
          "diaHorarios" : "domingo",
          "horaInicio" : e.target[32].value,
          "horaSalida"  : e.target[34].value
        }
      ]

      for (let j in hoursAvalibles) {

        let obj1 = hoursAvalibles[j];

        if (obj1.horaInicio === "") {

          errors.validacion = `Campo Vacío Hora Entrada del día ${obj1.diaHorarios}`
          setloader(false);
          setstr_warn(errors.validacion);

        }else if (obj1.horaSalida === "") {
          
          errors.validacion = `Campo Vacío Hora Salida del día ${obj1.diaHorarios}`
          setloader(false);
          setstr_warn(errors.validacion);

        }
      }

      if (JSON.stringify(errors) === '{}') {

        for (let k in hoursAvalibles){

          let obj2 = hoursAvalibles[k];
<<<<<<< HEAD
          setHorarioClinica( obj2 , nit , token).then( data => {
            setresponse_update(data);
            console.log(data);
          });
          console.log(obj2);
=======
          setHorarioClinica( obj2 , nit , token).then( data => {setresponse_update(data)});
>>>>>>> main
        }

        setloader(false);
        window.location = "/tuClinica";

      }else{

        console.log("No se puede Registrar el horario");
        setloader(false);
        setstr_warn(errors.validacion);

      }

      return hoursAvalibles;

    }

    const update_horario = (e) => {

      let arr = horarios[0];
      let keys = {};
      
      arr.forEach(element => { 

        let day = element.diaHorarios;
  
        switch (day) {
          
          case "lunes"    :keys.lunes = element.idHorarios;     break;
          case "martes"   :keys.martes = element.idHorarios;    break;
          case "miercoles":keys.miercoles = element.idHorarios; break;
          case "jueves"   :keys.jueves = element.idHorarios;    break;
          case "viernes"  :keys.viernes = element.idHorarios;   break;
          case "sabado"   :keys.sabado = element.idHorarios;    break;
          case "domingo"  :keys.domingo = element.idHorarios;   break;
        
          default         :break;
        }
  
      });

      let hoursAvalibles =  [

        { 
          "idHorarios" : keys.lunes,
          "diaHorarios" : "lunes",
          "horaInicio" : e.target[2].value,
          "horaSalida"  : e.target[4].value
        }
      ,
        {
          "idHorarios" : keys.martes,
          "diaHorarios" : "martes",
          "horaInicio" : e.target[7].value,
          "horaSalida"  : e.target[9].value
        }
      ,
        {
          "idHorarios" : keys.miercoles,
          "diaHorarios" : "miercoles",
          "horaInicio" : e.target[12].value,
          "horaSalida"  : e.target[14].value
        }
      ,
        {
          "idHorarios" : keys.jueves,
          "diaHorarios" : "jueves",
          "horaInicio" : e.target[17].value,
          "horaSalida"  : e.target[19].value
        }
      ,
        {
          "idHorarios" : keys.viernes,
          "diaHorarios" : "viernes",
          "horaInicio" : e.target[22].value,
          "horaSalida"  : e.target[24].value
        }
      ,
        {
          "idHorarios" : keys.sabado,
          "diaHorarios" : "sabado",
          "horaInicio" : e.target[27].value,
          "horaSalida"  : e.target[29].value
        }
      ,
        {
          "idHorarios" : keys.domingo,
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

      setloader(true);

      let index_days_val = 0;

      for (let index in days) { if ( days[index] === false ) { index_days_val = index_days_val + 1; } }

      if (index_days_val !== 7) {

        let errors = {};

        for (let p in days){

          if (days[p] === true) {
            
            let var_val_day = "";
            hoursAvalibles.forEach(element => {if (element.diaHorarios === p) {var_val_day = element;}});
            
            console.log("Se actualiza: " + p);

            if (var_val_day.horaInicio === "") {

              errors.validacion = `Campo Vacío Hora Entrada del día ${var_val_day.diaHorarios}`
              setloader(false);
    
            }else if (var_val_day.horaSalida === "") {
              
              errors.validacion = `Campo Vacío Hora Salida del día ${var_val_day.diaHorarios}`
              setloader(false);
    
            }
            if (JSON.stringify(errors) === '{}') {

              putHorarioGeneral( var_val_day , var_val_day.idHorarios , token).then( data => {
                setstr_warn(data);
                setTimeout(() => setstr_warn(""), 3500);
                console.log(data);
              });
              
            }else{

              setloader(false);
              setstr_warn(errors.validacion);
              setTimeout(() => setstr_warn(""), 3500);
              console.log(errors.validacion);
              
            }
            setloader(false);

          }else{ console.log("No se actualiza el dia " + p); }
        }
        
      }else if (index_days_val === 7) {

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

        setloader(false);

      }
    }

    return (
      <form onSubmit={setDates} className="horario_form animate__animated animate__fadeIn">
        <p className='profile__editarPerfil cc'>Si tu servicio es de 24 horas, por favor selecciona la apertura 00:00 y el cierre 23:59</p>
        <div className="title_cont">

          <h3 className='profile__editarPerfil title_hour'>{"Horario Clinica"}</h3>
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
                    {
                      (!!toSetHorarios)

                        ? <ButtonUI text="Registrar"  type="submit" style="submit btn_marg"></ButtonUI>

                        : <ButtonUI text="Actualizar"  type="submit" style="submit btn_marg"></ButtonUI>

                    }
                  </div>
      </form>
    )
}