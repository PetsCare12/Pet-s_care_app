import React, { useEffect, useState } from 'react';
import { getPeticionesClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import './AdminScreen.css';
import InfoUser from './components/InfoUser';
import PeticionClinica from './components/PeticionClinica';

const AdminScreen = () => {

    const [solicitudesScreen, setSolicitudesScreen] = useState(false);
    const [requestCli, setRequestCli] = useState([]);


    const handleRequest = () => {
        getPeticionesClinicas()
            .then( data => setRequestCli(data))
        setSolicitudesScreen( true );
    }

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
                    <button onClick={handleRequest} className='btnAdmin peticiones'>Peticiones</button>
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
                            {
                                ( requestCli ) ?
                                requestCli.map( cli => <PeticionClinica key={cli.nit} nit={cli.nit} nombre={cli.nombre} />)
                                : <p>No hay peticiones pendientes</p>
                            }

                        </div>
                    </div>
                </SimpleModal>
            }
        </>
    )
}

export default AdminScreen;