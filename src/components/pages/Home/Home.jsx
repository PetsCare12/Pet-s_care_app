import { FooterHome } from "../../Layouts/FooterHome/FooterHome"
import { Header } from "../../Layouts/HeaderHome/HeaderHome"
import { Slide } from 'react-slideshow-image';
import { clinicas } from "./data"
import { ImagenUI } from "../../UI/ImagenUI/ImagenUI";
import 'react-slideshow-image/dist/styles.css'
import './Home.css'

export const Home = () => {
  return (
    <div>
        <Header></Header>
          <div className="home">
            <div className="sectionTop">
              <div className="sectionLeft">
                <div className='slide-container'>
                  <h3>Nuestras Clinicas Asociadas</h3>
                      <Slide>
                        {
                          clinicas.map((item , index) => (
                            <div className="each-slide" key={index}>
                              <div>
                                <h1>{item.id}</h1>
                                <ImagenUI img={item.img}></ImagenUI>
                                <h1>{item.direccion}</h1>
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
