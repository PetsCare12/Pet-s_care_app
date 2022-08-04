import React from 'react'
import "./Modal.css";

export const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && 'modalOpen'}`}>
        <div className='modalContainer'>
            <button className='modalClose' onClick={closeModal}>X</button>
            <h1>Modal Test</h1  >
            {children}
        </div>
    </div>
  )
}