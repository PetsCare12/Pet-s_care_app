import { pets_images } from "../../../helpers/Pets_care_images";
import { FooterPrincipal } from "../../layout/FooterPrincipal/FooterPrincipal";
import nave from '../../../assets/images/varios/cohete.png'
import { Header} from '../../layout/HeaderHome/HeaderHome'
import './Home.css';
import './query.css';

import kevyn from './kevyn.jpg'
import samuel from './samuel.jpg'
import vera from './yo.jpg'
import andres from './andres.jpg'
import juan from './juan.jpg'


export const Home = () => {

  return (

    <div id="home__contenedor" className="home__contenedor animate__animated animate__fadeIn">
      <div>
        <Header />
        <header>
          <div className="headerHome__left">
              <h1>TU <span className="headerHome__span">MASCOTA</span><br/> ES NUESTRA<br/> PRIORIDAD</h1>
              <p>Tenemos la mejor atención, control y manejo para el cuidado y salud de tus mascotas.</p>
          </div>
          <div className="headerHome__right">
              <img src={pets_images("./home/test.svg")} alt="header-img" />
          </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </header>
      </div>
      <div className="home__aboutUs">
          <div className="home__aboutUs-img">
            <img src={pets_images("./home/teamwork.svg")} alt="images" />
          </div>
          <div className="home__aboutUs-text">
            <h1>Equipo de <br/><span>desarrollo</span></h1>
            <p>Nuestro equipo de desarrollo está conformado por 5 personas, las cuales se encargaron de crear la mejor herramienta de gestión de citas, para el beneficio de nuestros clientes.</p>
          </div>
      </div>
      <div className="home__proyecto home__aboutUs nuestro q600">
          <div className="home__proyecto-text">
            <h1>Nuestro proyecto <br/><span>Pet's Care</span></h1>
            <p>El proyecto PET 'S CARE es un aplicativo WEB, el cual llega como una nueva alternativa para facilitar el proceso de un agendamiento de citas para las mascotas, a la que los dueños de mascotas puedan interactuar en una interfaz amigable con el objetivo de solicitar el servicio desde su casa, y los dueños de las mascotas puedan agendar una cita con la veterinaria de su preferencia. </p>
          </div>
          <div className="home__proyecto-img">
            <img src={pets_images("./home/undraw_real_time_analytics_re_yliv.svg")} alt="about-us" />
          </div>
      </div>
      <div className="home__tiempo home__aboutUs q800">
          <div className="home__tiempo home__aboutUs-img">
            <img className="home__tiempo-img qimg800" src={pets_images("./home/time.svg")} alt="about-us" />
          </div>
          <div className="home__tiempo home__aboutUs-text">
            <h1>No <span>pierdas</span> más<br/> tu tiempo</h1>
            <p>Los usuarios de las veterinarias, se queja al agendar citas, ya sea por hacer tanta fila o demasiada demora para que atiendan a sus mascotas, en nuestro sitio web daremos una solución que será un agendamiento de citas más organizado para que nuestros usuarios manejen la hora y el día para la cita que desee; nuestros servicios también serán brindados a las veterinarias y clínicas de animales para la gestión y desarrollo de estas citas.</p>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0072ff" fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,218.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <h1 className="home__contactUs-title">Contáctanos</h1>
      <div className="home__contactUs">

        <div className="home__contactUs-card">
          <div className="home__contactUs-card-img">
            <img id="image-team" src={samuel} alt="" />
          </div>
          <div className="home__contactUs-card-info">
            <div className="home__contactUs-card-info-personal">
              <h1>Samuel Rodríguez</h1>
              <br/>
              <p>(+57) 301 2105346</p>
              <p>Frontend</p>
              <br/>
              <img src={pets_images("./home/colombia.png")} alt="" />
              
            </div>
            <div className="home__contactUs-card-info-media">
              <a href="https://www.facebook.com/" target={"blank"}><img src={pets_images("./home/facebook.png")} alt="facebook" /></a>
              <a href="mailto:samuelrm20025@gmail.com" target={"blank"}><img src={pets_images("./home/correo-electronico.png")} alt="gmail" /></a>
              <a href="https://github.com/samuelrm5" target={"blank"}><img src={pets_images("./home/github.png")} alt="github" /></a>
            </div>
          </div>
        </div>

        <div className="home__contactUs-card">
          <div className="home__contactUs-card-img">
            <img id="image-team" src={kevyn} alt="" />
          </div>
          <div className="home__contactUs-card-info">
            <div className="home__contactUs-card-info-personal">
              <h1>Kevyn Santiago Pineda</h1>
              <br/>
              <p>(+57) 315 3303056</p>
              <p>Backend</p>
              <br/>
              <img src={pets_images("./home/colombia.png")} alt="" />
              
            </div>
            <div className="home__contactUs-card-info-media">
              <a href="https://web.facebook.com/kevin.montenegro.50" target={"blank"}><img src={pets_images("./home/facebook.png")} alt="facebook" /></a>
              <a href="mailto:pinedamontenegro1234@gmail.com" target={"blank"}><img src={pets_images("./home/correo-electronico.png")} alt="gmail" /></a>
              <a href="https://github.com/kevynpinedasena" target={"blank"}><img src={pets_images("./home/github.png")} alt="github" /></a>
            </div>
          </div>
        </div>

        <div className="home__contactUs-card">
          <div className="home__contactUs-card-img">
          <img id="image-team" src={juan} alt="" />
          </div>
          <div className="home__contactUs-card-info">
            <div className="home__contactUs-card-info-personal">
              <h1>Juan David Marín</h1>
              <br/>
              <p>(+57) 323 3617844</p>
              <p>Backend</p>
              <br/>
              <img src={pets_images("./home/colombia.png")} alt="" />
              
            </div>
            <div className="home__contactUs-card-info-media">
              <a href="mailto:juaanmarin2007@gmail.com" target={"blank"}><img src={pets_images("./home/correo-electronico.png")} alt="gmail" /></a>
              <a href="https://github.com/juaanmarin" target={"blank"}><img src={pets_images("./home/github.png")} alt="github" /></a>
            </div>
          </div>
        </div>
        
        <div className="home__contactUs-card">
          <div className="home__contactUs-card-img">
          <img id="image-team" src={andres} alt="" />
          </div>
          <div className="home__contactUs-card-info">
            <div className="home__contactUs-card-info-personal">
              <h1>Andres Felipe Alvarez</h1>
              <br/>
              <p>(+57) 305 8115383</p>
              <p>Backend</p>
              <br/>
              <img src={pets_images("./home/colombia.png")} alt="" />
              
            </div>
            <div className="home__contactUs-card-info-media">
              <a href="https://web.facebook.com/pipe.alvarez.129" target={"blank"}><img src={pets_images("./home/facebook.png")} alt="facebook" /></a>
              <a href="mailto:andresfelipealvarezchavez5@gmail.com" target={"blank"}><img src={pets_images("./home/correo-electronico.png")} alt="gmail" /></a>
              <a href="https://github.com/Andresito18" target={"blank"}><img src={pets_images("./home/github.png")} alt="github" /></a>
            </div>
          </div>
        </div>
        
        <div className="home__contactUs-card">
          <div className="home__contactUs-card-img">
          <img id="image-team" src={vera} alt="" />
          </div>
          <div className="home__contactUs-card-info">
            <div className="home__contactUs-card-info-personal">
              <h1>Juan José Vera</h1>
              <br/>
              <p>(+57) 316 8270074</p>
              <p>Frontend</p>
              <br/>
              <img src={pets_images("./home/colombia.png")} alt="" />
              
            </div>
            <div className="home__contactUs-card-info-media">
              <a href="https://web.facebook.com/profile.php?id=100004381028074" target={"blank"}><img src={pets_images("./home/facebook.png")} alt="facebook" /></a>
              <a href="mailto:josejuanchov@gmail.com" target={"blank"}><img src={pets_images("./home/correo-electronico.png")} alt="gmail" /></a>
              <a href="https://github.com/juanvera326" target={"blank"}><img src={pets_images("./home/github.png")} alt="github" /></a>
            </div>
          </div>
        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0072ff" fillOpacity="1" d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,218.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <a className="nave"  href="#home__contenedor" ><img src={nave} alt="nave" /></a>

     <FooterPrincipal/>
    </div>
    
    
  )
}
