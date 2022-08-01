import { pets_images } from "../../../helpers/Pets_care_images";
import { Header} from '../../layout/HeaderHome/HeaderHome'
import './Home.css';

export const Home = () => {

  return (
    <div>
      <div>
        <Header />
        <header>
          <div className="headerHome__left">
              <h1>TU <span className="headerHome__span">MASCOTA</span><br/> ES NUESTRA<br/> PRIORIDAD</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, ea!voluptatibus fuodi, adipisci natus deleniti? Nemo, quis?</p>
          </div>
          <div className="headerHome__right">
              <img src={pets_images("./home/undraw_good_doggy_re_eet7.svg")} alt="header-img" />
          </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </header>
      </div>
      <div className="home__aboutUs">
          <div className="home__aboutUs-img">
            <img src="https://lamenteesmaravillosa.com/wp-content/uploads/2014/05/grupo-personas-trabajando.jpg" alt="about-us" />
          </div>
          <div className="home__aboutUs-text">
            <h1>Equipo de <br/><span>desarrollo</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sint consequatur odio officiis, quisquam pariatur necessitatibus nisi, optio tempore perspiciatis debitis consectetur! Consequuntur incidunt adipisci voluptate assumenda nihil ex.</p>
          </div>
      </div>
      <div className="home__proyecto home__aboutUs">
          <div className="home__proyecto-text">
            <h1>Nuestro proyecto <br/><span>Pet's Care</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sint consequatur odio officiis, quisquam pariatur necessitatibus nisi, optio tempore perspiciatis debitis consectetur! Consequuntur incidunt adipisci voluptate assumenda nihil ex.</p>
          </div>
          <div className="home__proyecto-img">
            <img src={pets_images("./home/undraw_scrum_board_re_wk7v.svg")} alt="about-us" />
          </div>
      </div>
      <div className="home__tiempo home__aboutUs">
          <div className="home__tiempo home__aboutUs-img">
            <img className="home__tiempo-img" src={pets_images("./home/undraw_time_management_re_tk5w.svg")} alt="about-us" />
          </div>
          <div className="home__tiempo home__aboutUs-text">
            <h1>No <span>pierdas</span> más<br/> tu tiempo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sint consequatur odio officiis, quisquam pariatur necessitatibus nisi, optio tempore perspiciatis debitis consectetur! Consequuntur incidunt adipisci voluptate assumenda nihil ex.</p>
          </div>
      </div>
      <svg className="wave__contactUs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#61bbd6" fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,112C480,117,600,203,720,213.3C840,224,960,160,1080,149.3C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <h1 className="home__contactUs-title">Contáctanos</h1>
      <div className="home__contactUs">

        <div className="home__contactUs-card">
          <div className="home__contactUs-card-img">
            <img src="https://media.istockphoto.com/photos/cheerful-ethnic-man-with-laptop-on-bright-backdrop-picture-id1226663876?b=1&k=20&m=1226663876&s=170667a&w=0&h=qaYWoe8k6AeyLxoFxgAClJYtWx-57hCCqB_sQMVtpTM=" alt="" />
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
            <img src="https://t3.ftcdn.net/jpg/03/36/97/32/360_F_336973263_QTBn9GvqIIJ86LS0hFAObqujuqFH8XWP.jpg" alt="" />
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
            <img src="https://img.freepik.com/foto-gratis/joven-guapo-rizado-escribiendo-telefono-sobre-aislado-pared-azul_231208-1231.jpg?w=2000" alt="" />
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
            <img src="https://www.hovedentalclinic.co.uk/wp-content/uploads/2021/03/bigstock-Young-handsome-hispanic-man-st-403013393.jpg" alt="" />
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
            <img src="https://t4.ftcdn.net/jpg/03/01/57/27/360_F_301572702_QOJGtwZ9an8H9oYtGcI8SFgypwVWA8TR.jpg" alt="" />
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
        <path fill="#61bbd6" fill-opacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,144C274.3,149,343,139,411,154.7C480,171,549,213,617,208C685.7,203,754,149,823,133.3C891.4,117,960,139,1029,160C1097.1,181,1166,203,1234,197.3C1302.9,192,1371,160,1406,144L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
    </div>
    
  )
}
