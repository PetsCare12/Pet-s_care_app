import { FooterHome } from "../../Layouts/FooterHome/FooterHome"
import { Header } from "../../Layouts/HeaderHome/HeaderHome"
import { Slide } from 'react-slideshow-image';
import { presentation } from "./data"
import { ImagenUI } from "../../UI/ImagenUI/ImagenUI";
//import { useEffect, useState } from "react";
import './styles.css'
import './Home.css'

export const Home = () => {

  return (
    <div>
        <Header></Header>
          <div className="home">
            <div className="sectionTop">
              <div className="sectionLeft">
                <div className='slide-container'>
                    <Slide>
                        {
                          presentation.map((item , index) => (
                            <div className="each-slide" key={index}>
                              <div className="contentSlide">
                                <div className="imgPresentationCont">
                                  <ImagenUI img={item.img} style="imgPresentation"></ImagenUI>
                                </div>
                                <h1 className="titlePresentation">{item.nombre}</h1>
                              </div>  
                            </div>
                          ))
                        }
                      </Slide>
                    </div>
                  </div>
                <div className="sectionRight"></div>
              </div>
            <div className="sectionBottom">
              <div className="cardBottom">
                <h1>Historia Clinica</h1>
                <br />
                <p>Sube la Historia clinica de tus mascotas para no volver a llevar papeles a tus citas.</p>
              </div>
              <div className="cardBottom">
                <h1>Para Clinicas</h1>
                <br />
                <p>Si eres dueño de una veterinaria, registrala y brinda tus servicios ahora.</p>
              </div>
              <div className="cardBottom">
                <h1>Para Veterinarios</h1>
                <br />
                <p>Si eres veterinario y tu clinica esta registrada hazte mienbro ahora mismo.</p>
              </div>
            </div>
          </div>
        <FooterHome></FooterHome>
    </div>
  )
}
