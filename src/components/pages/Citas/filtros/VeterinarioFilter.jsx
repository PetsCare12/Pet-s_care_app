import React, { useRef } from 'react';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import './filter.css'
export const VeterinarioFilter = ( {setGender} ) => {

    const filters = useRef(null);

    const hideFilters = () => {

        filters.current.classList.toggle("animate__fadeOutDown");

    }

    return (
        <div className='filterCitas'>
            <h1 onClick={hideFilters} className='filterCitas__title'>Búsqueda 🔽</h1>
            <div ref={filters} className='filterCitas__cont animate__animated'>
                <div className='filterCitas__filters'>
                        <button onClick={() => {setGender("Masculino")}} className='btnFilter-macho'><BsGenderMale /></button>
                        <button onClick={() => {setGender("Femenino")}} className='btnFilter-hembra ml-3'><BsGenderFemale /></button>
                        <input style={{height:"35px"}} type="text" className='ml-3 inputLogin inputRegistro' placeholder='Nombre de la mascota'/>
                </div>
            </div>
        </div>
    )
}
