import React from 'react'
import { useState } from 'react';
import { MdFreeCancellation } from "react-icons/md";
import { cancelarAgenda } from '../../../helpers/API Consumer/useAgendaConsumer';
import { SimpleModal } from '../../layout/Modals/SimpleModal';
import { MdDescription } from "react-icons/md";


export const CitaCard = ( props ) => { 

    const { msj, setReload, reload, data={}} = props;

    const [cancelModal, setCancelModal] = useState(false);

    let hora = data.horaInicio;

    if ( data.horaInicio.split(':')[1] === "0" ) {

        hora = data.horaInicio.split(':')[0]+":00";
    }

    const cancelDate = () => {

        cancelarAgenda( data.codigoA ).then( info => {

            if ( info.status === 200) {
                setCancelModal( false );
                setReload( !reload );
                msj( "La cita ha sido eliminada" )
                setTimeout( () => {
                    msj("")
                }, 5000 )
                
            }
            console.log( info );
        })

    }

    return (
        <div>
            <div className='cita_card'>
                <img className='img' src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg" alt="vet" />
                <h1 className='h1'>Vt. {data.documentovt.nombre} {data.documentovt.apellidos}</h1>
                <h2 className='h2'>{data.documentovt.especialidad}</h2>
                <p className='p'>{data.fecha}</p>
                <p className='p hour'>{hora}</p>
                <MdFreeCancellation className='cancelCita' onClick={ () => setCancelModal( true )}/>
                <div className='cancelCita_warn animate__animated animate__fadeIn'>
                    Cancelar cita
                </div>
                <MdDescription className='icon'/>
                <div className="description animate__animated animate__fadeIn">
                    { data.notas }
                </div>
            </div>
            {
                cancelModal &&
                <SimpleModal close={setCancelModal}>
                    <div className='verificar-cancelacion animate__animated animate__fadeIn'>
                        <h3>Cancelar cita</h3>
                        <p>¿Estás seguro que deseas cancelar tu cita?</p>

                        <div className='buttons'>
                            <button onClick={cancelDate} className='btnActualizarMascota no'>Eliminar</button>
                            <button onClick={ () => setCancelModal( false )} className='btnActualizarMascota si'>Volver</button>
                        </div>
                    </div>
                </SimpleModal>
            }
        </div>
    )
}
