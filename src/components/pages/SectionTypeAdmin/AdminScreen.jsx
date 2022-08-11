import React from 'react';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import './AdminScreen.css';
import InfoUser from './components/InfoUser';

const AdminScreen = () => {
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
                    <button className='btnAdmin peticiones'>Peticiones</button>
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
        </>
    )
}

export default AdminScreen;