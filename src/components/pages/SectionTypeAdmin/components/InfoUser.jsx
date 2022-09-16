import React, { useRef, useState } from 'react'
import { SimpleModal } from '../../../layout/Modals/SimpleModal';

import { HiOutlineIdentification,HiOutlineMail } from "react-icons/hi";
import { BsTelephoneForward } from "react-icons/bs";
import { MdPermIdentity,MdOutlineLocationOn } from "react-icons/md";
import { AiFillDelete,AiFillEye } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { cambiarEstadoUsuario } from '../../../../helpers/API Consumer/test';


const InfoUser = ( { id, nombre, apellido="" , correo, img, telefono, estado, direccion="", vetCli="", mascotas, especialidad, data } ) => {

    const [showInfo, setShowInfo] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [estadoUser, setEstadoUser] = useState(estado);
    const liDeleted = useRef(null);
    const formEstado = useRef(null);

    const handleEstado = e => {
        e.preventDefault();

        
        const formData = new FormData(formEstado.current);
        const data = {
            estadoUs: formData.get('estado'),
            documento: id
        }
        cambiarEstadoUsuario( data ).then( info => {

            if ( info.status === 200) {
                window.location = "/admin";
            }
            else return;
        })
    }

    const handleSelectEstado = e => {

        setEstadoUser( e.target.value );
    }

    
    const handleDelete = () => {
        
        setDeleteModal( true );
    }

    return (
        <>
            <li ref={liDeleted} className="table-row animate__animated">
                <div className="col col-1 doc" data-label="Job Id">{id}</div>
                <div className="col col-2 nom" data-label="Customer Name">{nombre}</div>
                <div className="col col-3 cor" data-label="Correo">{correo}</div>
                <div className="col col-4 but" data-label="Payment Status">
                    <button className='infoUser__managment'>
                        {
                            mascotas &&
                            <>
                                <p onClick={handleDelete} className='casilla delete'><AiFillDelete/></p>
                            </>
                        }
                        <p onClick={()=>setShowInfo(true)} className='casilla show' ><AiFillEye/></p>
                    </button>
                </div>
            </li>
            {
                showInfo &&
                <SimpleModal close={setShowInfo}>
                    <div className='infoUser-modal animate__animated animate__fadeIn'>
                        <div className='img-div'>
                            <img src={img} alt="img" />
                        </div>
                        <div className='info-div'>
                            {
                                vetCli && <p><RiBuilding2Line className='icon'/> { vetCli } </p>
                            }
                            <p><HiOutlineIdentification className='icon'/> { id } </p>
                            <p><MdPermIdentity className='icon'/> { nombre } { apellido }</p>
                            <p><HiOutlineMail className='icon'/> { correo } </p>
                            <p><BsTelephoneForward className='icon'/> { telefono } </p>
                            {
                                direccion && <p><MdOutlineLocationOn className='icon'/> { direccion } </p>
                            }
                        </div>
                    {
                        estado === 1 && <p className='status active'>{ estado }</p>
                    }
                    {
                        estado === 2 && <p className='status disabled'>{ estado }</p>
                    }
                    {
                        estado === 3 && <p className='status waiting'>{ estado }</p>
                    }

                    <p onClick={()=>setShowInfo( false )} className='status cancel'>x</p>
                    <div className='title_modal'>Información</div>
                    </div>
                </SimpleModal>
            }
            {
                deleteModal &&
                <SimpleModal close={setDeleteModal}>
                    <div className='delete-modal'>
                        <h3>Cambio de estado</h3>
                        {
                            estado === 1 ? <p>El estado del usuario actualmente está <span className='statusa'>ACTIVO</span></p>
                            : <p>El estado del usuario actualmente está <span className='statusb'>INACTIVO</span></p>
                        }
                    <form onSubmit={handleEstado} ref={formEstado}>
                        <select onChange={handleSelectEstado} name="estado" id="select" value={estadoUser}>
                            <option id='optionEstadoa' value="1">Activo</option>
                            <option id='optionEstadob' value="2">Inactivo</option>
                        </select>
                        <button type='submit' className='btnAgregarMascota'>Cambiar</button>
                    </form>
                    </div>
                </SimpleModal>
            }
        </>
    )
}

export default InfoUser;