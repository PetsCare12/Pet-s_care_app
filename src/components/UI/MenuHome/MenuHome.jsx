import React from 'react';
import { useNavigate } from 'react-router';
import './MenuHome.css';

const MenuHome = () => {

    const data = JSON.parse( localStorage.getItem("usuario") );
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        window.location = "/login";
    }

    const handlePerfil = () => {

        if ( data.aud === "[ROLE_CLINICA]" ) {
        
            navigate("/tuClinica");
        }
        else if ( data.aud === "[ROLE_USER]" ) {

            navigate("/perfil");
        }
        else if ( data.aud === "[ROLE_ADMIN]" ) {

            navigate("/perfil");
        }
        else if ( data.aud === "[ROLE_VETERINARIO]" ) {

            navigate("/perfil_veterinario");
        }
    }

    return (
        <div className='MenuHome__div animate__animated animate__flipInX'>
            <p onClick={handlePerfil} className='MenuHome__perfil'>Gestion</p>
            <p onClick={() => navigate("/clinicas")} className='MenuHome__perfil cli'>Clínicas</p>
            { data.aud === "[ROLE_ADMIN]" && <p onClick={() => navigate("/admin")} className='MenuHome__perfil cli'>Administrar</p> }
            <p onClick={handleLogout} className='MenuHome__logout'>Cerrar sesión</p>
        </div>
    )
}

export default MenuHome;