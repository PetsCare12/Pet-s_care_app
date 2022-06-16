import React, { useRef } from 'react'
import './type_registers.css'

export const RegisterClinica2 = () => {

    const schedule_lu = useRef(null);
    const schedule_ma = useRef(null);
    const schedule_mi = useRef(null);
    const schedule_ju = useRef(null);
    const schedule_vi = useRef(null);
    const schedule_sa = useRef(null);
    const schedule_dom = useRef(null);
    const schedule_fes = useRef(null);

    const btn_lunes = useRef(null);
    const btn_martes = useRef(null);
    const btn_miercoles = useRef(null);
    const btn_jueves = useRef(null);
    const btn_viernes = useRef(null);
    const btn_sabado = useRef(null);
    const btn_domingo = useRef(null);
    const btn_festivo = useRef(null);
    const days_schedule = []

    const active_day = ( {target} ) => {

        if ( target.outerText === "Lunes" ){
            schedule_lu.current.classList.toggle("hidden");
            btn_lunes.current.classList.toggle("day_register_active");
        } else if ( target.outerText === "Martes" ){
            schedule_ma.current.classList.toggle("hidden");
            btn_martes.current.classList.toggle("day_register_active");
        } else if ( target.outerText === "Miercoles" ){
            schedule_mi.current.classList.toggle("hidden");
            btn_miercoles.current.classList.toggle("day_register_active");
        } else if ( target.outerText === "Jueves" ){
            schedule_ju.current.classList.toggle("hidden");
            btn_jueves.current.classList.toggle("day_register_active");
        } else if ( target.outerText === "Viernes" ){
            schedule_vi.current.classList.toggle("hidden");
            btn_viernes.current.classList.toggle("day_register_active");
        } else if ( target.outerText === "Sabado" ){
            schedule_sa.current.classList.toggle("hidden");
            btn_sabado.current.classList.toggle("day_register_active");
        } else if ( target.outerText === "Domingo" ){
            schedule_dom.current.classList.toggle("hidden");
            btn_domingo.current.classList.toggle("day_register_active");
        } else {
            schedule_fes.current.classList.toggle("hidden");
            btn_festivo.current.classList.toggle("day_register_active");
        }

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
            <div ref={schedule_lu} className="days_time_register hidden">
                <p>Lunes</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_ma} className="days_time_register hidden">
                <p>Martes</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_mi} className="days_time_register hidden">
                <p>Miercoles</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_ju} className="days_time_register hidden">
                <p>Jueves</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_vi} className="days_time_register hidden">
                <p>Viernes</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_sa} className="days_time_register hidden">
                <p>Sabado</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_dom} className="days_time_register hidden">
                <p>Domingo</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>
            <div ref={schedule_fes} className="days_time_register hidden">
                <p>Festivos</p>
                <div className='time_register'>
                    Apertura
                    <input type="time" />
                </div>
                <div className='time_register'>
                    Cierre
                    <input type="time"/>
                </div>
            </div>

            
        </>
    )
}
