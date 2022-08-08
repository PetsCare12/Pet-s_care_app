import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsuarioId } from '../../../helpers/API Consumer/test';
import { pets_images } from '../../../helpers/Pets_care_images';
import './HeaderHome.css'

export const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [userData, setUserData] = useState({});
  let token = localStorage.getItem("token"); 

    useEffect(()=>{

        getUsuarioId( user.jti )
        .then( data => setUserData( data.data ));
        
    }, [user])
    

  return (
    <div className='headerHome'>
        <div className="logo">
          <img src={pets_images('./varios/title_white.png')} alt="logo" id='header__title' />
        </div>

        <div className="options">
          {
            ( token.length > 2 ) ?
              <button onClick={()=> window.location = "/perfil"}>
                <div className='home__autenticado'>
                  <h1>{ userData.nombreUs }</h1>

                  <img src={pets_images("./home/perroperfil.png")} alt="perfil" />

                </div>
              </button>
          :
              <nav className='nav_Home'>
                <li id='liHome'><Link className='aNavHome logIn' to={"/login"}>Log in</Link></li>
                <li id='liHome'><Link className='aNavHome signIn' to={"/registro"}>Sign up</Link></li>
              </nav>
          }
        </div>  
    </div>
  )
}