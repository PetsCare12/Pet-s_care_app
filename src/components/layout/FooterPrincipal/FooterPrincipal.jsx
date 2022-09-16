import React from 'react'
import './FooterPrincipal.css'
import {FaFacebook}from 'react-icons/fa'
import {FaInstagramSquare}from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import hueso from '../../../assets/images/varios/huesito.png'
export const FooterPrincipal = () => {
  return (
    <>
        <footer>
            <div className='footerIcon'>

                <div className="sameLine">
                    <hr className='hr' />
                    <h2 style={{width:"300px",textAlign:"center"}}>Pet's Care</h2>
                    {/* <FaFacebook className='icon facebook' />
                    <FaInstagramSquare className='icon instagram' />
                    <FaGithubSquare className='icon git' />  */}
                    <hr className='hr' />
                </div>
            
            
             </div>
             
             
             
            <p className='copy'>&copy; <span>Pet's Care </span> Todos los derechos reservados.</p>
            <div className='politicas'>
             <a  href="">Informacion Legal</a>|<a href="">Politica de Privacidad</a>
             </div>
        </footer>
    </>
  )
}
