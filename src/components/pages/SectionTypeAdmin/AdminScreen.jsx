import React, { useEffect, useState } from 'react';
import { getAllClinicas, getPeticionesClinicas } from '../../../helpers/API Consumer/useClinicasConsumer';
import {Header} from '../../layout/HeaderHome/HeaderHome';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import { BiRefresh } from "react-icons/bi";
import { BiArrowToLeft,BiArrowToRight } from "react-icons/bi";
import './AdminScreen.css';
import InfoUser from './components/InfoUser';
import PeticionClinica from './components/PeticionClinica';
import { usuariosTodos } from '../../../helpers/API Consumer/test';
import { NoAutenticado } from '../NoAutenticado/NoAutenticado';
import { getAllVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';

const AdminScreen = () => {

    const isAuth = localStorage.getItem("token");
    let aud = "";

    if ( !!isAuth ) {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        aud = usuario.aud;
    }

    // 1 ~ Usuario
    // 2 ~ Veterinario
    // 3 ~ Clinica

    const [solicitudesScreen, setSolicitudesScreen] = useState(false);
    const [requestCli, setRequestCli] = useState([]);
    const token = localStorage.getItem("token");
    const [userType, setUserType] = useState(0);
    const [data, setData] = useState([]);
    const [dataToShow, setDataToShow] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const handleSelect = ( type ) => {

        setCurrentPage( 0 );

        setLoadingData( true );

        if ( type === 1 ) {
            usuariosTodos().then( info => {
                setData( info );
                setDataToShow( [...info].slice(0,itemsPerPage) )
                setLoadingData( false );
            });
            setUserType( 1 );
        }
        else if ( type === 2 ) {
            getAllVeterinarios().then( info => {
                setData( info.data )
                setDataToShow( [...info.data].slice(0,itemsPerPage) );
                setLoadingData( false );
            });
            setUserType(2);
        }
        else if( type === 3 ) {
            getAllClinicas().then( info => {

                setData(info.data);
                setDataToShow( [...info.data].slice(0,itemsPerPage) )
                setLoadingData( false );

            });
            setUserType(3);
        }

    }

    const prevtHandler = () => {

        const prevPage = currentPage - 1;
        
        if ( prevPage < 0 ) return;

        const firstIndex = prevPage * itemsPerPage;

        setDataToShow([...data].splice(firstIndex, itemsPerPage));
        setCurrentPage( prevPage );
        
    }
    const nextHandler = () => {

        const totalElements = data.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPerPage;

        if ( firstIndex >= totalElements ) return;

        setDataToShow([...data].splice(firstIndex, itemsPerPage));
        setCurrentPage( nextPage );

    }

    const handleRequest = () => {
        getPeticionesClinicas()
            .then( data => setRequestCli(data))
        setSolicitudesScreen( true );
    }

    const handlePaginacion = ( e ) => {

        setItemsPerPage( e.target.value );
    }

    return (
        <>
            {
                (!!isAuth && aud === "[ROLE_ADMIN]") &&
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
                            <>
                                {    userType===1 &&
                                    <>
                                        <form className='admin__filter' action="">
                                            <label htmlFor="documento">N° Documento</label>
                                            <input type="text" name='documento'/>
                                            <button id='search' className='btnAdmin'>Buscar</button>
                                        </form>
                                    </>
                                }
                            </>
                        }    
                        
                        {
                            <>
                            {    userType===2 &&
                                <>

                                <form className='admin__filter' action="">
                                    <label htmlFor="documento">N° Documento</label>
                                    <input type="text" name='documento'/>
                                    <button id='search' className='btnAdmin'>Buscar</button>
                                </form>
                                </>
                            }
                            </>
                        }    
                        
                        {
                            <>
                            {    userType===3 &&
                                <>

                                <form className='admin__filter' action="">
                                    <label htmlFor="documento">N° NIT</label>
                                    <input type="text" name='documento'/>
                                    <button id='search' className='btnAdmin'>Buscar</button>
                                </form>
                                </>
                            }
                            </>
                        }    
                        
                        {
                            loadingData && <div id='login-spin-adminScreen' className='spiner'></div>
                        }
                        {
                            !loadingData &&
                                <div className="tableUsuarios">
                                    <ul className="responsive-table">
                                        {
                                            userType===1 && 
                                            <>
                                            <h2>Usuarios</h2>   
                                            <li className="table-header">
                                            <div className="col col-1">Id</div>
                                            <div className="col col-2">Nombre</div>
                                            <div className="col col-3">Correo</div>
                                            <div className="col col-4">Acciones</div>
                                            </li>
                                            </>
                                        }
                                        
                                        {
                                            userType===1 &&
                                        
                                            dataToShow.map( (user,key) => 

                                            user.correoUs !== "admin@gmail.com" &&
                                                
                                            <InfoUser
                                                key={key}
                                                id={user.documentoUs}
                                                nombre={user.nombreUs}
                                                correo={user.correoUs}
                                                img = {user.imagenUsu}
                                                telefono={user.telefonoUs}
                                                estado={user.estadoUs}
                                                mascotas={user.mascotas}
                                                data={user}
                                        />
                                                
                                                )
                                        }
                                        {
                                            userType===2 && 
                                            <>
                                            <h2>Veterinarios</h2>   
                                            <li className="table-header">
                                            <div className="col col-1">Id</div>
                                            <div className="col col-2">Nombre</div>
                                            <div className="col col-3">Correo</div>
                                            <div className="col col-4">Acciones</div>
                                            </li>
                                            </>
                                        }
                                        {
                                            userType===2 &&
                                            
                                            dataToShow.map( (user,key) => 
                                                
                                                <InfoUser
                                                    key={key}
                                                    id={user.documento}
                                                    img={user.imagenVete}
                                                    estado={user.estadoVt}
                                                    vetCli={user.clinica.nombre}
                                                    especialidad = {user.especialidad}
                                                    { ... user }
                                                    data={user}
                                                />
                                                
                                                )
                                        }
                                        {
                                            userType===3 && 
                                            <>
                                            <h2>Clínicas</h2>   
                                            <li className="table-header">
                                            <div className="col col-1">Id</div>
                                            <div className="col col-2">Nombre</div>
                                            <div className="col col-3">Correo</div>
                                            <div className="col col-4">Acciones</div>
                                            </li>
                                            </>
                                        }
                                        {
                                            userType===3 &&

                                            dataToShow.map( (user,key) => 
                                                
                                                <InfoUser
                                                    key={key}
                                                    id={user.nit} 
                                                    direccion={user.direccion}
                                                    nombre={user.nombre} 
                                                    correo={user.correoCv} 
                                                    img = {user.imagenclinica}
                                                    telefono={user.telefono} 
                                                    estado={user.estadoCli} 
                                                    data={user}
                                                />
                                                
                                                )
                                            
                                        }
                                        {
                                            userType !== 0 &&
                                            <>
                                                <div className="buttonPaginacion">
                                                    <button className='btn' onClick={ prevtHandler }><BiArrowToLeft /></button>
                                                        { currentPage }
                                                    <button className='btn' onClick={ nextHandler }><BiArrowToRight /></button>
                                                </div>
                                            </>
                                        }                                                    
                                        
                                    </ul>
                                </div>
                        }

                    </div>
                </>
            }
            {
                (!isAuth || aud !== "[ROLE_ADMIN]") &&
                <NoAutenticado txt="Al parecer no tienes permiso para entrar a este lugar."/>
            }

            {
                solicitudesScreen && 
                <SimpleModal close={setSolicitudesScreen}>
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