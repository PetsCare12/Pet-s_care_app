import React, { useEffect, useState } from 'react'
import { getAgendasVeterinario } from '../../../../helpers/API Consumer/useAgendaConsumer';
import { LoaderCards } from '../../../UI/LoaderCards/LoaderCards';

export const Agendas = ( {id} ) => {

    const [loader, setLoader] = useState(true);
    const [agendas, setAgendas] = useState([]);

    useEffect( () => {

        getAgendasVeterinario( id ).then( info => {

            if ( info.status === 200) {

                setLoader( false );
                setAgendas( info.data );

            }

        })

    },[])

    return (
        <>
            <h1 style={{position:"absolute"}}>Mis citas pendientes</h1>
            <div className='agendasVeterinario'>
            {
                loader ? 
                <LoaderCards />
                :
                <>
                {
                    agendas.length === 0 ? 
                    <div className='citasempty'>
                        Actualmente no tienes citas
                    </div>
                    :
                    <div>

                    </div>
                }
                </>
            }
            </div>
        </>
    )
}
