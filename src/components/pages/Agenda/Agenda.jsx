import React from 'react'
import './agenda.css'
import { pets_images } from "../../../helpers/Pets_care_images";
import { InputUI } from '../../UI/InputUI/InputUI';

export const Agenda = () => {

    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + ' / ' + String(date.getMonth() + 1).padStart(2, '0') + ' / ' + date.getFullYear();

    return (
        <div className='agenda'>

        
            <div className='agenda__container'>
                <div className='agenda__header'>
                    <img src={pets_images("./agenda/agenda_title.png")} alt="tile" />
                    <p id="agenda__fecha">{ output }</p>
                </div>
                <div className='agenda__info'>
                    <div className="agenda__info-data">
                        <p className='agenda__suge'>Por favor, diligencia todos los campos. De esta manera podremos asignarte una cita como lo mereces.</p>
                        <InputUI 
                            type="text"
                            style="inputLogin inputRegistro"
                            txt="Documento del acudiente"
                        />

                        <select className='mt-3' name="mascota" id="select">
                            <option selected="true" disabled="true">Selecciona tu mascota</option>
                        </select>

                        <select className='mt-5' name="clinica" id="select">
                            <option selected="true" disabled="true">Seleccione una clínica</option>
                        </select>

                        <div className="agenda__info-veterinarios mt-5">

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://i0.wp.com/revista.weepec.com/wp-content/uploads/2021/02/vet-and-pet-EESKSLX.jpg?fit=1200%2C800&ssl=1" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                                    <p id='pDescriptionVet'>Especialista en ciudado de las mascotas domésticas</p>
                                </div>
                            </button>

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://irp.cdn-website.com/8812c427/dms3rep/multi/DSC_0067-2a1ad164.JPG" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                                    <p id='pDescriptionVet'>Especialista en ciudado de las mascotas domésticas</p>
                                </div>
                            </button>

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://storage.contextoganadero.com/s3fs-public/ganaderia/field_image/2022-01/veterinarios-bienestar-animal-produccion-leche.jpeg" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                                    <p id='pDescriptionVet'>Especialista en ciudado de las mascotas domésticas</p>
                                </div>
                            </button>

                            <button className='agenda__button-card'>
                                <div className="agenda__veterinarios-card">
                                    <img src="https://www.edx.org/static/18afddae77f96175cd5aa3ecc456672c/Aprende_Veterinaria_y_etologi__a.jpg" alt="" />
                                    <h1 id='h1Veterinario'>My name</h1>
                                    <p id='pDescriptionVet'>Especialista en ciudado de las mascotas domésticas</p>
                                </div>
                            </button>
                            
                        </div>
                
                    </div>
                    <div className="agenda__info-schedules">
                        <img src={pets_images("./agenda/agenda.png")} alt="agenda" />
                        <div className="agenda__shedules">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
