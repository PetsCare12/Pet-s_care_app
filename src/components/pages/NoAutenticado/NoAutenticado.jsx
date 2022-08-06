import React from 'react';
import { Link } from 'react-router-dom';
import { pets_images } from '../../../helpers/Pets_care_images';
import './noAutenticado.css';

export const NoAutenticado = () => {
    return (
        <div className="modal_perfil_no_autorizado">
            <div className="modal_perfil_no_autorizado_info">
                <img src={pets_images("./perfil/perro-dormido.png")} alt="perros" />
                <h1>Al parecer no has iniciado sesión. <br/> Te invitamos a hacerlo.</h1>
                <div style={{width:"50%"}}>
                    <button onClick={()=> {window.location = "/login"}} className='btn200'>Login</button>
                    <div className='modal_perfil_no_autorizado-registro'>
                        ¿Aún no tienes una cuenta? Registrate
                        <Link to="/registro"> Aquí</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
