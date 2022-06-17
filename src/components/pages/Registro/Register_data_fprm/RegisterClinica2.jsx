import React, { useRef } from 'react'
import { GoArrowSmallLeft } from 'react-icons/go';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import './type_registers.css'

export const RegisterClinica2 = ( {change_step} ) => {

    const apertura_lunes = useRef(null);
    const cierre_lunes = useRef(null);
    const apertura_martes = useRef(null);
    const cierre_martes = useRef(null);
    const apertura_miercoles = useRef(null);
    const cierre_miercoles = useRef(null);
    const apertura_jueves = useRef(null);
    const cierre_jueves = useRef(null);
    const apertura_viernes = useRef(null);
    const cierre_viernes = useRef(null);
    const apertura_sabado = useRef(null);
    const cierre_sabado = useRef(null);
    const apertura_domingo = useRef(null);
    const cierre_domingo = useRef(null);
    const apertura_festivo = useRef(null);
    const cierre_festivo = useRef(null);

    const schedule_lu = useRef(null);
    const schedule_ma = useRef(null);
    const schedule_mi = useRef(null);
    const schedule_ju = useRef(null);
    const schedule_vi = useRef(null);
    const schedule_sa = useRef(null);
    const schedule_dom = useRef(null);
    const schedule_fes = useRef(null);
    const days_schedule = [
        schedule_lu,
        schedule_ma,
        schedule_mi,
        schedule_ju,
        schedule_vi,
        schedule_sa,
        schedule_dom,
        schedule_fes
    ]

    const btn_lunes = useRef(null);
    const btn_martes = useRef(null);
    const btn_miercoles = useRef(null);
    const btn_jueves = useRef(null);
    const btn_viernes = useRef(null);
    const btn_sabado = useRef(null);
    const btn_domingo = useRef(null);
    const btn_festivo = useRef(null);

    

    const getData = () => {

        const data_schedules = []

        for (let i = 0; i < days_schedule.length; i++) {

            const dia = days_schedule[i]

            if (!dia.current.classList[2]){
                
                switch (dia.current.classList[1]) {
                    
                    case "lunes":
                        let lunes = {
                            "day"      : "Lunes",
                            "apertura" : apertura_lunes.current.value,
                            "cierre"   : cierre_lunes.current.value
                        }
                        data_schedules.push(lunes)

                        break;
                    case "martes":
                        let martes = {
                            "day"      : "Martes",
                            "apertura" : apertura_martes.current.value,
                            "cierre"   : cierre_martes.current.value
                        }
                        data_schedules.push(martes)
                        break;
                    case "miercoles":
                        let miercoles = {
                            "day"      : "Miercoles",
                            "apertura" : apertura_miercoles.current.value,
                            "cierre"   : cierre_miercoles.current.value
                        }
                        data_schedules.push(miercoles)
                        break;
                    case "jueves":
                        let jueves = {
                            "day"      : "Jueves",
                            "apertura" : apertura_jueves.current.value,
                            "cierre"   : cierre_jueves.current.value
                        }
                        data_schedules.push(jueves)
                        break;
                    case "viernes":
                        let viernes = {
                            "day"      : "Viernes",
                            "apertura" : apertura_viernes.current.value,
                            "cierre"   : cierre_viernes.current.value
                        }
                        data_schedules.push(viernes)
                        break;
                    case "sabado":
                        let sabado = {
                            "day"      : "Sabado",
                            "apertura" : apertura_sabado.current.value,
                            "cierre"   : cierre_sabado.current.value
                        }
                        data_schedules.push(sabado)
                        break;
                    default:
                        break;
                    
                }
            }
            
        }

        console.log(data_schedules);
        for (let i = 0; i < data_schedules.length; i++) {
            
            if ( (data_schedules[i]["apertura"] === "") || ( data_schedules[i]["cierre"] === "" ) ) {
                console.error("Hay campos sin completar");
                break;
            }
            else {
                console.log("Proceso exitoso");
            }
            
        }
    }


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

            <h4 className='h4_register_clinica'>
                <div onClick={change_step} className='rows_register'>
                    <GoArrowSmallLeft />
                </div>
                Horario de atención
            </h4>
                
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
            <div className='contenedor__schedules'>
                <div ref={schedule_lu} className="days_time_register hidden lunes">
                    <p>Lunes</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_lunes} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_lunes} type="time"/>
                    </div>
                </div>
                <div ref={schedule_ma} className="days_time_register hidden martes">
                    <p>Martes</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_martes} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_martes} type="time"/>
                    </div>
                </div>
                <div ref={schedule_mi} className="days_time_register hidden miercoles">
                    <p>Miercoles</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_miercoles} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_miercoles} type="time"/>
                    </div>
                </div>
                <div ref={schedule_ju} className="days_time_register hidden jueves">
                    <p>Jueves</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_jueves} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_jueves} type="time"/>
                    </div>
                </div>
                <div ref={schedule_vi} className="days_time_register hidden viernes">
                    <p>Viernes</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_viernes} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_viernes} type="time"/>
                    </div>
                </div>
                <div ref={schedule_sa} className="days_time_register hidden sabado">
                    <p>Sabado</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_sabado} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_sabado} type="time"/>
                    </div>
                </div>
                <div ref={schedule_dom} className="days_time_register hidden domingo">
                    <p>Domingo</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_domingo} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_domingo} type="time"/>
                    </div>
                </div>
                <div ref={schedule_fes} className="days_time_register hidden festivo">
                    <p>Festivos</p>
                    <div className='time_register'>
                        Apertura
                        <input ref={apertura_festivo} type="time" />
                    </div>
                    <div className='time_register'>
                        Cierre
                        <input ref={cierre_festivo} type="time"/>
                    </div>
                </div>

            </div>
            <ButtonUI 
                event={getData}
                text={"Registrar"}
                style={"btnLogin mt-3"}
            />
            

            
        </>
    )
}
