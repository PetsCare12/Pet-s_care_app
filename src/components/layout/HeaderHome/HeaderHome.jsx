import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsuarioId } from '../../../helpers/API Consumer/test';
import { pets_images } from '../../../helpers/Pets_care_images';
import MenuHome from '../../UI/MenuHome/MenuHome';
import './HeaderHome.css'

export const Header = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [userData, setUserData] = useState({});
  const [toggle, setToggle] = useState(false);
  let token = localStorage.getItem("token"); 

  useEffect(()=>{
      if ( user ) {
        getUsuarioId( user.id )
        .then( data => setUserData( data.data ));
        
      }
      else{
        console.log("No hay autenticación");
      }
      
  }, [user])

  const handleToggle = () => {
    setToggle( !toggle );
  }
    

  return (
    <div className='headerHome'>
        <div className="logo">
          <img onClick={ () => window.location = "/"} src={pets_images('./varios/titleWhite.png')} alt="logo" id='header__title' />
        </div>

        <div className="options">
          {
            ( !!token ) ?
              <button onClick={handleToggle}>
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
        { toggle && <MenuHome /> }
    </div>
  )
}