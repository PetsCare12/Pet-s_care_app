import { FooterHome } from "../../Layouts/FooterHome/FooterHome"
import { Header } from "../../Layouts/HeaderHome/HeaderHome"
import './Home.css'

export const Home = () => {
  return (
    <div>
        <Header></Header>
          <div className="home">
            <div className="sectionTop">
              <div className="sectionLeft"></div>
              <div className="sectionRight"></div>
            </div>
            <div className="sectionBottom"></div>
          </div>
        <FooterHome></FooterHome>
    </div>
  )
}
