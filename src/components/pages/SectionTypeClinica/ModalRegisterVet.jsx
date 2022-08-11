import React, { useState } from 'react'
import "./ModalRegisterVet.css";
import { MdOutlineCancel } from 'react-icons/md';
import { pets_images } from '../../../helpers/Pets_care_images';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';

export const ModalRegisterVet = ({ children, isOpen, closeModal }) => {

  const {myWidgetVeter,urlImage} = useSendImage();
  const [imgProfile, setimgProfile] = useState();
  const showWidget = () => {myWidgetVeter.open();};

  return (
    <div className={`modal ${isOpen && 'modalOpen'}`}>
        <div className='modalContainer animate__animated animate__fadeIn'>
          <div id='MdOutlineCancelVet' onClick={closeModal}><MdOutlineCancel /></div>

          <div className="input_registerVet_container">

            <form action="" className='formVet_register animate__animated animate__fadeIn'>

              <div className="img_cont_vet">
                <img src={pets_images("./veterinarios/usuario.png")} alt="" id='imgForm'/>
              </div>

              <div className='setImg_register_container'>
                <a onClick={showWidget} className="">
                <img src={pets_images('./veterinarios/subir.png')} alt="Subir Imagen" className='upload_Image_regs'/>
                </a>
              </div>

              <div className="part1">
                <input type="text" placeholder='ID' className='input regs'/>
                <input type="text" placeholder='Nombre' className='input regs'/>
              </div>

              <div className="part2">
                <input type="text" placeholder='Apellido' className='input regs'/>
                <input type="text" placeholder='Telefono' className='input regs'/>
              </div>

              <div className="selects_conatiner">
                <select name="" id="" className='input selects'>
                  <option value="none">Seleccione el sexo</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                  <option value="otro">Otro</option>
                </select>
                <select name="" id="" className='input selects'>
                  <option value="none">Seleccione un estado</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>
              </div>

              <div className="part3">
                <input type="email" placeholder='Correo' className='input regs'/>
                <input type="text" placeholder='Especialidad' className='input regs'/>
              </div>
              <input type="password" placeholder='Contraseña' className='input'/>

              <ButtonUI text="Registrar Veterinario"  type="submit" style="submit"></ButtonUI>

            </form>
          </div>
        </div>
    </div>
  )
}