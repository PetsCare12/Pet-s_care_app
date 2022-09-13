import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getVeterinarios } from '../../../../../helpers/API Consumer/useVeterinariosConsumer';
import { ButtonUI } from '../../../../UI/ButtonUI/ButtonUI';
import { Dias_Horario_UI } from '../../../../UI/Dias_Horario_UI/Dias_Horario_UI';

export const HorarioVeterinarios = ( {data} ) => {

  const [vets, setvets] = useState([]);
  const [toSetVets, settoSetVets] = useState(false);
  const [loader, setloader] = useState(false);
  const [str_warn, setstr_warn] = useState("");
  const [checkedState, setCheckedState] = useState([]);

    let nit = data.nit;

  useEffect(() => {
    setloader(true);
    getVeterinarios( nit ).then(info => {
      let active_vets = [];
      if (info.length === 1 || info.status === 400) {
        settoSetVets(true);
        setloader(false);
      }else{
        for (const key in info) {
          if (info[key].estadoVt === 1 ) {
            active_vets.push(info[key]);
          }
        }
        setvets(active_vets);
        settoSetVets(false);
        setloader(false);
      }
    })
  }, [data])

  const isChecked = (e) => { 
    console.log(e); 
  }

  const handleOnClick = ( item ) => { 
    console.log(item); 
  }

  const getDates = (e) => {

    e.preventDefault();

    console.log("Horario por veterinarios");

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

    console.log(hoursAvalibles);
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

    <div className="list_vets">
      <h3 className='profile__editarPerfil title_hour'>{"Veterinarios Activos"}</h3>
      <ul>
          {
            vets.map((item , index) => (
              <li className='liVetSpace animate__animated animate__backInUp li_horarios'>
                <div className="liVet space_li">
                                    
                  <div className="cont_vet_li">
                    <p style={{ color:"#0072ff",fontSize:"13px" }}>Nombre: </p>
                    <p>{item.nombre}</p>
                  </div>

                  <div className="cont_vet_li">
                    <p style={{ color:"#0072ff",fontSize:"13px" }}>Doc: </p>
                    <p>{item.documento}</p>
                  </div>

                </div>
              </li>
            ))
          }
      </ul>
    </div>
  
  </div>

  )
}

