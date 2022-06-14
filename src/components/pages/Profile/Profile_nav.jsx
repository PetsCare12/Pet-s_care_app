import React from 'react'
import './Profile.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdPaper } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

export const Profile_nav = () => {

  // const li1 = useRef(null);
  // const li2 = useRef(null);
  // const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const li6 = useRef(null);
  // const li7 = useRef(null);
  // const li8 = useRef(null);

  const cleanCLass = () => {
      // li8.current.classList.remove('active_li');
      // li7.current.classList.remove('active_li');
      li6.current.classList.remove('active_li');
      li5.current.classList.remove('active_li');
      li4.current.classList.remove('active_li');
      // li3.current.classList.remove('active_li');
      // li2.current.classList.remove('active_li');
      // li1.current.classList.remove('active_li');
  }

  const paint_A = ( e ) => {

    cleanCLass();

    // if (e.currentTarget.id === "li1") {
    //   li1.current.classList.add("active_li");
    //   console.log(li1);
    // } 
    // else if (e.currentTarget.id === "li2") {
    //   li2.current.classList.add("active_li");
    //   console.log(li2);
    // }
    // else if (e.currentTarget.id === "li3") {
    //   li3.current.classList.add("active_li");
    //   console.log(li3);
    // }
    if (e.currentTarget.id === "li4") {
      li4.current.classList.add("active_li");
      console.log(li5);
    }
    else if (e.currentTarget.id === "li5") {
      li5.current.classList.add("active_li");
      console.log(li5);
    }
    else if (e.currentTarget.id === "li6") {
      li6.current.classList.add("active_li");
      console.log(li6);
    }
    // else if (e.currentTarget.id === "li7") {
    //   li7.current.classList.add("active_li");
    //   console.log(li7);
    // }
    // else if (e.currentTarget.id === "li8") {
    //   li8.current.classList.add("active_li");
    //   console.log(li8);
    // }
  }

  return (
    <div className='profile_nav'>
      <nav className='navi_menu_profile'>
        {/* <li onClick={paint_A} id="li1" ref={li1}><Link className='a' to={""}>Actualizar Mascota</Link></li>
        <li onClick={paint_A} id="li2" ref={li2}><Link className='a' to={""}>Consultar Mascota</Link></li>
        <li onClick={paint_A} id="li3" ref={li3}><Link className='a' to={""}>Eliminar Mascota</Link></li> */}
        <li onClick={paint_A} id="li4" ref={li4}><Link className='a' to={""}> <i><GrDocumentUpdate /></i> Actualizar Perfil</Link></li>
        <li onClick={paint_A} id="li5" ref={li5}><Link className='a' to={""}> <i><IoMdPaper /></i> Historias Clinicas</Link></li>
        <li onClick={paint_A} id="li6" ref={li6}><Link className='a' to={""}> <i><MdDateRange /></i> Citas</Link></li>
        {/* <li onClick={paint_A} id="li7" ref={li7}><Link className='a' to={""}>Mascotas Func 7</Link></li>
        <li onClick={paint_A} id="li8" ref={li8}><Link className='a' to={""}>Mascotas Func 8</Link></li> */}
      </nav>
    </div>
  )
}
