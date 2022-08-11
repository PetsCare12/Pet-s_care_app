import React from 'react';
import './MenuHome.css';

const MenuHome = () => {

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        window.location = "/login";
    }

    const handlePerfil = () => {
        window.location = "/perfil";
    }

    return (
        <div className='MenuHome__div animate__animated animate__fadeInRight'>
            <p onClick={handlePerfil} className='MenuHome__perfil'>Gestion</p>
            <hr/>
            <p onClick={handleLogout} className='MenuHome__logout'>Cerrar sesión</p>
        </div>
    )
}

export default MenuHome;