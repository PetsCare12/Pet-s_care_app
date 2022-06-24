import React from 'react'
import { Link } from 'react-router-dom';
import { pets_images } from '../../../helpers/Pets_care_images';
import { ImagenUI } from "../../UI/ImagenUI/ImagenUI";
import './HeaderHome.css'

export const Header = () => {
  return (
    <div className='headerHome'>
        <div className="logo">
          <ImagenUI img={pets_images('./home/logo.png')} style="logoHome"></ImagenUI>
          <ImagenUI img={pets_images('./home/title.png')} style="tituloHome"></ImagenUI>
        </div>

        <div className="options">
          <nav className='nav_Home'>
            <li id="liHome"><i>Prueba la facilidad Ahora!!</i></li>
            <li id='liHome'><Link className='aNavHome logIn' to={"/login"}>Log in!</Link></li>
            <li id='liHome'><Link className='aNavHome signIn' to={"/registro"}>Sign up!</Link></li>
          </nav>
        </div>  
    </div>
  )
}