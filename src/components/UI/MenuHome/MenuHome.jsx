import React from 'react';
import './MenuHome.css';

const MenuHome = () => {

    const data = JSON.parse( localStorage.getItem("usuario") );

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        window.location = "/login";
    }

    const handlePerfil = () => {

        if ( data.aud === "[ROLE_CLINICA]" ) {
        
            window.location = "/tuClinica";
        }
        else if ( data.aud === "[ROLE_USER]" ) {

            window.location = "/perfil";
        }
        else if ( data.aud === "[ROLE_ADMIN]" ) {

            window.location = "/perfil";
        }
    }

    return (
        <div className='MenuHome__div animate__animated animate__flipInX'>
            <p onClick={handlePerfil} className='MenuHome__perfil'>Gestion</p>
            <p onClick={() => window.location = "/clinicas"} className='MenuHome__perfil cli'>Clínicas</p>
            { data.aud === "[ROLE_ADMIN]" && <p onClick={() => window.location = "/admin"} className='MenuHome__perfil cli'>Administrar</p> }
            <p onClick={handleLogout} className='MenuHome__logout'>Cerrar sesión</p>
        </div>
    )
}

export default MenuHome;