import React from 'react'
import "./ModalRegisterVet.css";

export const ModalRegisterVet = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && 'modalOpen'}`}>
        <div className='modalContainer animate__animated animate__fadeIn'>
            <button className='modalClose' onClick={closeModal}>X</button>
            {children}
        </div>
    </div>
  )
}