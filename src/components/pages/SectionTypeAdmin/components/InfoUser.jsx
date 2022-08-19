import React, { useState } from 'react'
import { SimpleModal } from '../../../layout/Modals/SimpleModal';

import { HiOutlineIdentification,HiOutlineMail } from "react-icons/hi";
import { BsTelephoneForward } from "react-icons/bs";
import { MdPermIdentity } from "react-icons/md";
import { TbPencil } from "react-icons/tb";
import { AiFillDelete,AiFillEye } from "react-icons/ai";



const InfoUser = ( props ) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            <div className='infoUser__container animate__animated animate__fadeIn'>
                <div className='infoUser__data'>
                    <h2>{ props.id }</h2>
                    <h1>{ props.nombre }</h1>
                </div>
                <button className='infoUser__managment'>
                    <p className='casilla edit'><TbPencil/></p>
                    <p className='casilla delete'><AiFillDelete/></p>
                    <p className='casilla show' onClick={()=>setShowInfo(true)}><AiFillEye/></p>
                </button>
            </div>
            {
                showInfo &&
                <SimpleModal>
                    <div className='infoUser-modal animate__animated animate__fadeIn'>
                        <div className='img-div'>
                            <img src={props.img} alt="img" />
                        </div>
                        <div className='info-div'>
                            <p><HiOutlineIdentification className='icon'/> { props.id } </p>
                            <p><MdPermIdentity className='icon'/> { props.nombre } { props.apellido }</p>
                            <p><HiOutlineMail className='icon'/> { props.correo } </p>
                            <p><BsTelephoneForward className='icon'/> { props.telefono } </p>
                        </div>
                    {
                        props.status === 1 && <p className='status active'>{ props.status }</p>
                    }
                    {
                        props.status === 2 && <p className='status disabled'>{ props.status }</p>
                    }
                    {
                        props.status === 3 && <p className='status waiting'>{ props.status }</p>
                    }

                    <p onClick={()=>setShowInfo( false )} className='status cancel'>x</p>
                    <div className='title_modal'>Información</div>
                    </div>
                </SimpleModal>
            }
        </>
    )
}

export default InfoUser;