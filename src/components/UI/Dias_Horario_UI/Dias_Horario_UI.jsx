import React from 'react'
import '../../pages/SectionTypeClinica/ClinicaProfile/ClinicaProfile.css'

export const Dias_Horario_UI = ( { dia , name_hour_in , name_hour_out } ) => {
  return (
    <div className='card_dia'>
        <div className='head_dia'><h3 style={{color:'white'}}>{dia}</h3></div>
        <div className='dia'>
                <div className="hours">
                    
                    <div className="cont 1_hours">
                        <h4 style={{color:'black'}}>{"Entrada"}</h4>
                        <input type="time" name={name_hour_in} className="input_time hour_in"/>
                    </div>

                    <div className="cont 2_hours">
                      <h4 style={{color:'black'}}>{"Salida"}</h4>
                      <input type="time" name={name_hour_out} className="input_time hour_out"/>
                    </div>

                </div>
        </div>
    </div>
  )
}