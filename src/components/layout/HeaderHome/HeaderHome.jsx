import React from 'react'
import { Link } from 'react-router-dom';
import { pets_images } from '../../../helpers/Pets_care_images';
import './HeaderHome.css'

export const Header = () => {
  return (
    <div className='headerHome'>
        <div className="logo">
          <img src={pets_images('./home/logotitlenone.png')} alt="logo" id='header__logo' />
          <img src={pets_images('./varios/title_white.png')} alt="logo" id='header__title' />
        </div>

        <div className="options">
          <nav className='nav_Home'>
            <li id='liHome'><Link className='aNavHome logIn' to={"/login"}>Log in</Link></li>
            <li id='liHome'><Link className='aNavHome signIn' to={"/registro"}>Sign up</Link></li>
          </nav>
        </div>  
    </div>
  )
}