import { FooterHome } from "../../Layouts/FooterHome/FooterHome"
import { Header } from "../../Layouts/HeaderHome/HeaderHome"
import { Slide } from 'react-slideshow-image';
import { presentation } from "./data"
import { ImagenUI } from "../../UI/ImagenUI/ImagenUI";
import { useEffect, useState } from "react";
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
                                <ImagenUI img={item.img} style="imgPresentation"></ImagenUI>
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
            <div className="sectionBottom"></div>
          </div>
        <FooterHome></FooterHome>
    </div>
  )
}
