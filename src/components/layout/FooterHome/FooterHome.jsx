import React from 'react'
import { Link } from 'react-router-dom';
import { pets_images } from '../../../helpers/Pets_care_images';
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI';
import './FooterHome.css'

export const FooterHome = () => {
  return (
    <footer className='footerHome'>
        <div className='logos'>
            <nav className='navFoo'>
                <li><Link className='a' to={""}><ImagenUI img={pets_images('./home/facebook.png')} style="imgFoo"></ImagenUI></Link></li>
                <li><Link className='a' to={""}><ImagenUI img={pets_images('./home/instagram.png')} style="imgFoo"></ImagenUI></Link></li>
                <li><Link className='a' to={""}><ImagenUI img={pets_images('./home/gmail.png')} style="imgFoo"></ImagenUI></Link></li>
            </nav>
        </div>
        <div className='info'>
            <h3>Pet's Care &copy; 2022</h3>
            <h3>Contacto: +57 300 5555555</h3>
        </div>
    </footer>
  )
}
