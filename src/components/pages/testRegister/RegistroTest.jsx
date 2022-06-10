import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { AiOutlineUser } from 'react-icons/ai';
import { FaUserNurse, FaHospitalUser } from 'react-icons/fa';
import { InputUI } from '../../UI/InputUI/InputUI'
import { Login } from '../Login/Login'
import './regitrotes.css'
import { useEffect, useRef, useState } from 'react';

export const RegistroTest = () => {

    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

    const handleCard = (e) => {

        console.log(e.target.parentNode);
        
        // card1.current.classList.add('');
        // console.log(card1.current);

        // if ( num == 1){
            
        //     // card1.current.classList.add('color_card');
        // }
        // else if ( num == 2 ){
        //     // card2.current.classList.add('color_card')
        // }
        // else {
        //     // card3.current.classList.add('color_card')
        // }

    }

  return (
        <div>          
            <div className="register_container">
                <div className="registerData animate__animated animate__fadeIn">
                    
                    <div className="users_types">
                        <a ref={card1} onClick={handleCard}>
                            <div className="type_card_users">
                                <h3>Usuario</h3>
                                <p>Como usuario, podrás tener la oportunidad de vincular tus mascotas y poder agender tus citas.</p>
                                <span><AiOutlineUser /></span>
                            </div>
                        </a>
                        <a onClick={handleCard( 2 )}>
                            <div ref={card2} className="type_card_users">
                                <h3>Veterinario</h3>
                                <p>Como veterinario, deberás vincularte a una clínica donde prestarás un servicio.</p>
                                <span><FaUserNurse /></span>
                            </div>
                        </a>
                        
                        <button onClick={handleCard}>
                            <div ref={card3} className="type_card_users">
                                <h3>Clínica</h3>
                                <p>Como clínica, prestaras los servicio de clínica veterinaria para las citas agendadas.</p>
                                <span><FaHospitalUser /></span>                                
                            </div>
                        </button>
                        
                    </div>

                </div>
            </div>
            <Login />
        </div>

        
        
  )
}