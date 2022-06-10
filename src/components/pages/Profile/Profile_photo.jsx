import React from 'react'
import { ImagenUI } from "../../UI/ImagenUI/ImagenUI";
import './Profile.css'
import { pets_images } from '../../../helpers/Pets_care_images';

export const Profile_photo = () => {
  let name_profile = 'Administrador';
  let id_profile = '76454354324'
  
  return (
    <div className='profile_photo'>
        <div>
            <div className='part1_photo'>
              <ImagenUI img={pets_images('./perfil/avatar.jpg')} style="imgProfile"></ImagenUI>
            </div>
          <div className='part2_photo'>
            <ImagenUI img={pets_images('./perfil/avatar.jpg')} style="imgProfile_min"></ImagenUI>
          </div>
          <div className='part3_photo'>
            <h1>{name_profile}</h1>
            <h3>ID {id_profile}</h3>
          </div>
        </div>
    </div>
  )
}
