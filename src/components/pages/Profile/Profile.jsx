import React from 'react'
import { Profile_nav } from "../Profile/Profile_nav";
import { Profile_photo } from "./Profile_photo";
import './Profile.css'
import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Profile = () => {
  
  const [pet, setPet] = useState([]) //Consulta de mascotas a renderizar
  
  const printPets = () => {}  //fetch EndPoint consulta de mascotas
  
  useEffect(() => {}, []) //Iniciar renderizado
  
  let testArr = ["pepe","cabesiamarillo","verde",3,"no","loro"]

  console.log(testArr);
  return (
    <div className='profile'>
        <div className='section_profile_left'>
            <Profile_photo />
            <Profile_nav />
        </div>
        <div className='section_profile_right'>
          <h1 className='titlePage title'>Mis Mascotas</h1>
          <Link to="/registro_mascotas" className='a am'><ButtonUI event={printPets} text="Agregar Mascota" style="btnLoginCrear btnAgregarMascota"></ButtonUI></Link>
          <br />
          <hr />
        </div>
    </div>
  )
}
