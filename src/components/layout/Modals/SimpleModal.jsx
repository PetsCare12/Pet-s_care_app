import React from 'react'
import ReactDOM from 'react-dom'
import './simpleModal.css';

export function SimpleModal ( {children} )  {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            
            {children}

        </div>,
        document.getElementById('modal')
    );
}
