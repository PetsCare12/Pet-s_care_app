import React, { useRef } from 'react'
import './type_registers.css'

export const RegisterClinica2 = () => {

    // day_register_active
    const btn_lunes = useRef(null);
    const btn_martes = useRef(null);
    const btn_miercoles = useRef(null);
    const btn_jueves = useRef(null);
    const btn_viernes = useRef(null);
    const btn_sabado = useRef(null);
    const btn_domingo = useRef(null);
    const btn_festivo = useRef(null);

    const active_day = ( {target} ) => {

        ( target.outerText === "Lunes" )
        ? btn_lunes.current.classList.toggle("day_register_active")
        : ( target.outerText === "Martes" )
        ? btn_martes.current.classList.toggle("day_register_active")
        : ( target.outerText === "Miercoles" )
        ? btn_miercoles.current.classList.toggle("day_register_active")
        : ( target.outerText === "Jueves" )
        ? btn_jueves.current.classList.toggle("day_register_active")
        : ( target.outerText === "Viernes" )
        ? btn_viernes.current.classList.toggle("day_register_active")
        : ( target.outerText === "Sabado" )
        ? btn_sabado.current.classList.toggle("day_register_active")
        : ( target.outerText === "Domingo" )
        ? btn_domingo.current.classList.toggle("day_register_active")
        : btn_festivo.current.classList.toggle("day_register_active")
        

    }
    

    return (
        <>

            <div id='register_steps'>
                <div className='step color_step'>
                    1
                </div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>
                    2
                </div>
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>
                    3
                </div>
            </div>
            <div className='hr'>
                <hr />
            </div>

            <h4 style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "#004f66"
            }}>Horario de atención</h4>
            <p style={{width:"100%",color:"#1d2129",letterSpacing:"2px",textAlign:"center"}}>Selecciona los días en los que prestas tus servicios</p>
            <div className="div_select_days_register">
                <div onClick={active_day} ref={btn_lunes} className="day_option_register">Lunes</div>
                <div onClick={active_day} ref={btn_martes} className="day_option_register">Martes</div>
                <div onClick={active_day} ref={btn_miercoles} className="day_option_register">Miercoles</div>
                <div onClick={active_day} ref={btn_jueves} className="day_option_register">Jueves</div>
                <div onClick={active_day} ref={btn_viernes} className="day_option_register">Viernes</div>
                <div onClick={active_day} ref={btn_sabado} className="day_option_register">Sabado</div>
                <div onClick={active_day} ref={btn_domingo} className="day_option_register">Domingo</div>
                <div onClick={active_day} ref={btn_festivo} className="day_option_register">Festivos</div>
            </div>
        </>
    )
}
