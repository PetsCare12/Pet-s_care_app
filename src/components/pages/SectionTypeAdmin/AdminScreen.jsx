import React, { useEffect, useState } from 'react';
import { getPeticionesClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import './AdminScreen.css';
import InfoUser from './components/InfoUser';
import PeticionClinica from './components/PeticionClinica';

const AdminScreen = () => {

    const [solicitudesScreen, setSolicitudesScreen] = useState(false);

    useEffect(()=>{
        if ( solicitudesScreen ) {
            // TODO - Clínicas con estado en 3
            getPeticionesClinicas()
                .then( data => console.log(data))
        }
    }, [setSolicitudesScreen])

    return (
        <>
            <Header />
            <div className="admin__container animate__animated animate__fadeIn">
                <div className="admin__nav">
                    <div className='admin__nav-izquierdo'>
                        <button className='btnAdmin'>Usuarios</button>
                        <button className='btnAdmin'>Veterinarios</button>
                        <button className='btnAdmin'>Clínicas</button>
                    </div>
                    <button onClick={()=> setSolicitudesScreen( true )} className='btnAdmin peticiones'>Peticiones</button>
                </div>
                <form className='admin__filter' action="">
                    <label htmlFor="documento">N° Documento</label>
                    <input type="text" name='documento'/>
                    <button id='search' className='btnAdmin'>Buscar</button>
                </form>
                <div className="admin__container-info">
                    <InfoUser />
                </div>
            </div>
            {
                solicitudesScreen && 
                <SimpleModal>
                    <div className='admin__peticiones-modal animate__animated animate__fadeIn'>
                        <div className="cancel"><p>x</p></div>

                        <h1 className='titulo'>Peticiones</h1>
                        <p className='descripcion'>Las siguientes clinicas están pendientes.</p>

                        <div className="peticiones">

                            <PeticionClinica nit={""} nombre={""} />

                        </div>
                    </div>
                </SimpleModal>
            }
        </>
    )
}

export default AdminScreen;