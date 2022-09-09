import React from 'react'
import '../../pages/SectionTypeClinica/ClinicaProfile/ClinicaProfile.css'

export const Dias_Horario_UI = ( { dia , name_hour_in , name_hour_out , value_hora_entrada , value_hora_salida } ) => {
  return (
    <div className='card_dia'>
        <div className='head_dia'><h3 style={{color:'white'}}>{dia}</h3></div>
        <div className='dia'>
                <div className="hours">
                    
                    <div className='cont_chb_input'><input type="checkbox" className='checkbox_input'/></div>

                    <div className="cont hours_1">
                        <h4 style={{color:'#4a4a4a'}}>{"Entrada: "}</h4>
                        <input type="time" value={value_hora_entrada} disabled={true} className="input_text_p"/>
                        <input type="time" name={name_hour_in} className="input_time hour_in" max="23:59:00"/>
                    </div>

                    <div className="cont hours_2">
                      <h4 style={{color:'#4a4a4a'}}>{"Salida: "}</h4>
                      <input type="time" value={value_hora_salida} disabled={true} className="input_text_p"/>
                      <input type="time" name={name_hour_out} className="input_time hour_out" max="23:59:00"/>
                    </div>

                </div>
        </div>
    </div>
  )
}
