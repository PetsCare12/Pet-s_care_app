import React from 'react'
import '../../pages/SectionTypeClinica/ClinicaProfile/ClinicaProfile.css'

export const Dias_Horario_UI = ( { dia , name_hour_in , name_hour_out , value_hora_entrada , value_hora_salida } ) => {
  return (
    <div className='card_dia'>
        <div className='head_dia'><h3 style={{color:'white'}}>{dia}</h3></div>
        <div className='dia'>
                <div className="hours">
                    
                    <div className="cont 1_hours">
                        <h4 style={{color:'#4a4a4a'}}>{"Entrada"}</h4>
                        <input type="time" name={name_hour_in} value={value_hora_entrada} className="input_time hour_in"/>
                    </div>

                    <div className="cont 2_hours">
                      <h4 style={{color:'#4a4a4a'}}>{"Salida"}</h4>
                      <input type="time" name={name_hour_out} value={value_hora_salida} className="input_time hour_out"/>
                    </div>

                </div>
        </div>
    </div>
  )
}
