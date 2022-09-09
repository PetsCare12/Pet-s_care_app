import React, { useRef, useState } from 'react'
import { SimpleModal } from '../../../layout/Modals/SimpleModal';

import { HiOutlineIdentification,HiOutlineMail } from "react-icons/hi";
import { BsTelephoneForward } from "react-icons/bs";
import { MdPermIdentity,MdOutlineLocationOn } from "react-icons/md";
import { TbPencil } from "react-icons/tb";
import { AiFillDelete,AiFillEye } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { UserUpdate } from './UserUpdate';
import { VeterinarioUpdate } from './VeterinarioUpdate';
import { ClinicaUpdate } from './ClinicaUpdate';



const InfoUser = ( { id, nombre, apellido="" , correo, img, telefono, estado, direccion="", vetCli="", mascotas, especialidad, data } ) => {

    const [showInfo, setShowInfo] = useState(false);
    let edit = 0;
    const liDeleted = useRef(null);
    const [editable, setEditable] = useState(0);
    
    const handleDelete = () => {
        
        
    }
    const handleEdit = () => {

        mascotas ? edit = 1 : especialidad ? edit = 2 : direccion ? edit = 3 : edit = 0;

        if ( edit === 1 ) {
            setEditable( 1 );
        }
        else if ( edit === 2 ){
            setEditable( 2 );
        }
        else if ( edit === 3 ){
            setEditable( 3 );
        }
    }

    return (
        <>
            <li ref={liDeleted} className="table-row animate__animated">
                <div className="col col-1 doc" data-label="Job Id">{id}</div>
                <div className="col col-2 nom" data-label="Customer Name">{nombre}</div>
                <div className="col col-3 cor" data-label="Correo">{correo}</div>
                <div className="col col-4 but" data-label="Payment Status">
                    <button className='infoUser__managment'>
                        <p onClick={handleEdit} className='casilla edit'><TbPencil/></p>
                        <p onClick={handleDelete} className='casilla delete'><AiFillDelete/></p>
                        <p onClick={()=>setShowInfo(true)} className='casilla show' ><AiFillEye/></p>
                    </button>
                </div>
            </li>
            {
                showInfo &&
                <SimpleModal>
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
                editable === 1
                ? <UserUpdate user={data} />
                : editable === 2
                ? <VeterinarioUpdate user={data} />
                : editable === 3
                ? <ClinicaUpdate user={data} />
                : null
            }
        </>
    )
}

export default InfoUser;