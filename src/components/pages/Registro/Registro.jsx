import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import { MdOutlineCancel, MdNavigateNext } from 'react-icons/md';
import { InputUI } from '../../UI/InputUI/InputUI'
import { Login } from '../Login/Login'
import './RegistroStyle.css'
import { useState } from 'react';
import { RegistroStep1 } from './RegistroStep1';
import { RegistroStep2 } from './RegistroStep2';

export const Registro = () => {

    const [steps, setSteps] = useState(1);

  return (
      
        <div>

            {
                ( steps == 1 )
                ? <RegistroStep1 />
                : <RegistroStep2 />
            }
            <Login />
        </div>

        
        
  )
}