import React from 'react'
import ReactDOM from 'react-dom'
import './simpleModal.css';

export function SimpleModal ( {children, close} )  {

    const handleClose= () => {
        close( false );
    }

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            
            {children}

            <div onClick={handleClose} className='cierre'></div>
        </div>,
        document.getElementById('modal')
    );
}
