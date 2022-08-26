import React, { useState } from 'react';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import './style.css';

export const Agenda = () => {

    const [active, setActive] = useState();
    const [hour, setHour] = useState("")
    
    const schedules = [
        { hora : "1:45"},
        { hora : "2:45"},
        { hora : "3:45"},
        { hora : "4:45"},
        { hora : "5:45"},
        { hora : "6:45"},
        { hora : "7:45"},
        { hora : "8:45"},
        { hora : "9:45"},
        { hora : "10:45"},
        { hora : "11:45"},
        { hora : "12:45"},
    ]

    console.log( hour );

    return (
        <>
        <Header />
        <div className='agenda__container'>
            <div className='card'>
                <h1 className="title">Agenda</h1>
                    <div className="selectors">
                        <select id='select' name='mascota'>
                            <option value="none" >Selecciona una mascota</option>
                            <option value="sa">Optioon</option>
                            <option value="sa">Optioon</option>
                            <option value="sa">Optioon</option>
                        </select>

                        <select id='select' name='clinica'>
                            <option value="none">Selecciona una clínica</option>
                            <option value="sa">Optioon</option>
                            <option value="sa">Optioon</option>
                            <option value="sa">Optioon</option>
                        </select>

                        <div className="agenda__info-veterinarios mt-5">

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://i0.wp.com/revista.weepec.com/wp-content/uploads/2021/02/vet-and-pet-EESKSLX.jpg?fit=1200%2C800&ssl=1" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                                    
                                </div>
                            </button>

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://irp.cdn-website.com/8812c427/dms3rep/multi/DSC_0067-2a1ad164.JPG" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                                    
                                </div>
                            </button>

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://storage.contextoganadero.com/s3fs-public/ganaderia/field_image/2022-01/veterinarios-bienestar-animal-produccion-leche.jpeg" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                
                                </div>
                            </button>

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://www.edx.org/static/18afddae77f96175cd5aa3ecc456672c/Aprende_Veterinaria_y_etologi__a.jpg" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                
                                </div>
                            </button>

                        </div>

                    </div>
                    <div className="imgSchedule">
                        <div className="imgPet">
                            <img className='pet' src="https://www.prensalibre.com/wp-content/uploads/2019/05/Perro-1.jpg?quality=52" alt="img" />
                            <div className="info">
                                <div>
                                    <p className='titulo'>Trululu <span className='infodata'>perro</span></p>
                                    <p className="infodata">Raza Desconocida</p>
                                </div>
                                <div>
                                    <p className="infodata more">2 Años</p>
                                    <p className="infodata more">Macho</p>
                                    <p className="infodata more">Discapacidad: NO</p>
                                </div>

                            </div>
                        </div>
                        <div className="schedule">
                            <h1 className='day'>Lunes</h1>
                            <div className="momento">
                                <div className='columna mañana'>
                                    <h2 className='h2'>Mañana</h2>
                                    {
                                        schedules.map( (hour,index) => (

                                            <button
                                                className={`btn ${active === index && "hourActive"}`}
                                                onClick={ () => {
                                                    setActive( index );
                                                    setHour( hour.hora );
                                                }}
                                                key={ index }
                                            >
                                                { hour.hora }
                                            </button>
                                        ))
                                    }
                                    
                                    

                                </div>
                                <div className='columna tarde'>
                                    <h2 className='h2'>Tarde</h2>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                    <button className='btn'>8:45</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
