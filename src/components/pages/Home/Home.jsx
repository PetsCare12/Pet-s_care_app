import { FooterHome } from "../../Layouts/FooterHome/FooterHome"
import { Header } from "../../Layouts/HeaderHome/HeaderHome"
import { Slide } from 'react-slideshow-image';
import { presentation } from "./data"
import { ImagenUI } from "../../UI/ImagenUI/ImagenUI";
import './styles.css'
import './Home.css'
import { pets_images } from "../../../helpers/Pets_care_images";

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
                <div className="sectionRight">

                </div>
              </div>
            <div className="sectionBottom">
              <div className="cardBottom">
                <ImagenUI img={pets_images("./home/historia-clinica.png")}></ImagenUI>
                <h1>Historia Clinica</h1>
                <br />
                <p>Registra la Historia clinica de tus mascotas para no volver a llevar papeles a tus citas.</p>
              </div>
              <div className="cardBottom">
                <ImagenUI img={pets_images("./home/hospital.png")}></ImagenUI>
                <h1>Clinicas</h1>
                <br />
                <p>Si eres dueño de una veterinaria, registrala y brinda tus servicios ahora.</p>
              </div>
              <div className="cardBottom">
                <ImagenUI img={pets_images("./home/medico.png")}></ImagenUI>
                <h1>Veterinarios</h1>
                <br />
                <p>Si eres veterinario y tu clinica esta registrada hazte miembro ahora mismo.</p>
              </div>
            </div>
          </div>
        <FooterHome></FooterHome>
    </div>
  )
}
