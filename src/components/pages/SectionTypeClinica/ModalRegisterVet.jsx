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

              <img src="" alt="" />

              <div className='setImg_register_container'>
                <a onClick={showWidget} className="a_uploadImage">
                <img src={pets_images('./veterinarios/subir.png')} alt="Subir Imagen" className='upload_Image'/>
                </a>
              </div>

              <input type="number" placeholder='ID'/>
              <input type="text" placeholder='Nombre'/>
              <input type="text" placeholder='Apellido'/>
              <input type="text" placeholder='Telefono'/>

              <select name="" id="">
                <option value="none">Seleccione el sexo</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
                <option value="otro">Otro</option>
              </select>

              <input type="email" placeholder='Correo'/>
              <input type="text" placeholder='Especialidad'/>

              <select name="" id="">
                <option value="none">Seleccione un estado</option>
                <option value="1">Activo</option>
                <option value="2">Inactivo</option>
              </select>

              <input type="password" placeholder='Contraseña'/>

              <ButtonUI text="Registrar Veterinario"  type="submit" style="submit"></ButtonUI>

            </form>

          </div>

        </div>
    </div>
  )
}