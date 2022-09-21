import React from 'react'
import './FooterPrincipal.css'

export const FooterPrincipal = () => {
  return (
    
        <footer>
            <div className='footerIcon'>

                <div className="sameLine">
                    <hr className='hr' />
                    <h2 style={{width:"300px",textAlign:"center"}}>Pet's Care</h2>
                   
                    <hr className='hr' />
                </div>
            
            
             </div>
             
             
             
            <p className='copy'>&copy; <span>Pet's Care </span> Todos los derechos reservados.</p>
            <div className='politicas'>
             <a href="/politicas">Politicas de Privacidad</a>|<a href="/informacionLegal">Informacion Legal</a>
             </div>
        </footer>
    
  )
}
