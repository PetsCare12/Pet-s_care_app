import React, { useEffect, useState } from 'react';
import { getPeticionesClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import { BiRefresh } from "react-icons/bi";
import './AdminScreen.css';
import InfoUser from './components/InfoUser';
import PeticionClinica from './components/PeticionClinica';
import { usuariosTodos } from '../../../helpers/API Consumer/test';

const AdminScreen = () => {

    // 1 ~ Usuario
    // 2 ~ Veterinario
    // 3 ~ Clinica

    const [solicitudesScreen, setSolicitudesScreen] = useState(false);
    const [requestCli, setRequestCli] = useState([]);
    const token = localStorage.getItem("token");
    const [userType, setUserType] = useState(0);
    const [data, setData] = useState([]);

    const handleSelect = ( type ) => {

        if ( type === 1 ) {
            usuariosTodos().then( info => setData( info ));
            setUserType( 1 );
        }
        else if ( type === 2 ) {
            // usuariosTodos().then( info => setData( info ));
            setUserType(2);
        }

    }

    console.log( data );


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
                        <button onClick={()=>{handleSelect(1)}} className={`btnAdmin ${userType === 1 && "active"}`}>Usuarios</button>
                        <button onClick={()=>{handleSelect(2)}} className={`btnAdmin ${userType === 2 && "active"}`}>Veterinarios</button>
                        <button onClick={()=>{handleSelect(3)}} className={`btnAdmin ${userType === 3 && "active"}`}>Clínicas</button>
                    </div>
                    <button onClick={handleRequest} className='btnAdmin peticiones'>Peticiones</button>
                </div>
                
                {
                    userType===1 &&
                    <form className='admin__filter' action="">
                        <label htmlFor="documento">N° Documento</label>
                        <input type="text" name='documento'/>
                        <button id='search' className='btnAdmin'>Buscar</button>
                    </form>
                }

                <div className="tableUsuarios">
                    <h2>Usuarios</h2>
                    <ul className="responsive-table">
                        <li className="table-header">
                        <div className="col col-1">Id</div>
                        <div className="col col-2">Nombre</div>
                        <div className="col col-3">Correo</div>
                        <div className="col col-4">Acciones</div>
                        </li>
                        {
                            userType===1 &&
                            
                            data.map( user => 

                                    <InfoUser
                                        { ... user }
                                    />

                                )
                        }
                    </ul>
                </div>

            </div>
            {
                solicitudesScreen && 
                <SimpleModal>
                    <div className='admin__peticiones-modal animate__animated animate__fadeIn'>
                        <div onClick={()=>setSolicitudesScreen( false )} className="cancel"><p>x</p></div>

                        <h1 className='titulo'>Peticiones</h1>
                        <BiRefresh onClick={handleRequest} className='peticiones__refreh' />
                        <p className='descripcion'>Las siguientes clinicas están pendientes.</p>

                        <div className="peticiones">
                            {
                                ( requestCli.length > 0 ) ?
                                requestCli.map( cli => <PeticionClinica key={cli.nit} token={token} dataCli={cli} nit={cli.nit} nombre={cli.nombre} />)
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