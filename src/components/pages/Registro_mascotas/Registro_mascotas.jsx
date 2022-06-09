import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import { TbGenderMale, TbGenderFemale } from 'react-icons/tb';
import { FaInfoCircle } from 'react-icons/fa';
import './Registro_mascotas.css'
import { pets_images } from '../../../helpers/Pets_care_images';




export const Registro_mascotas = () => {

    const [type_pet, setType_pet] = useState(pets_images('./registro_mascotas/lupa.png'))
    const [gender, setGender] = useState("")

    // TODO - Agregar una función para hacer un setTimeout y minimizar lineas de codigo

    const handlePet = ( {target} ) => {

        const option_type = document.getElementById('otro_type');
        option_type.classList.add('option_hidden')

        if ( target.value === "perro" ) {
            setType_pet( pets_images('./registro_mascotas/perro.png') );
        }
        else if ( target.value === "gato" ) {
            setType_pet( pets_images('./registro_mascotas/gato.png') );
        } 
        else if ( target.value === "loro") {
            setType_pet( pets_images('./registro_mascotas/loro.png') );
        } 
        else if ( target.value === "otro") {

            option_type.classList.remove('option_hidden');
            setType_pet( pets_images('./registro_mascotas/varios.png') );
        } 
        else {
            setType_pet( pets_images('./registro_mascotas/lupa.png') );
        }
        
    }

    const handleGenderPet = ( {target} ) => {

        if ( target.value === "macho" ) {
            setGender( "macho" );
        }
        else if ( target.value === "hembra" ) {
            setGender( "hembra" );
        }
        else {
            setGender( "undefined" );
        }

    }

    return (
        <div className="loginContainer animate__animated animate__fadeIn">
            <div className="login_cont_iz animate__animated animate__fadeInLeftBig">
                <img id='type_animal' src={type_pet} alt="" />
            </div>
            <div className='login_cont_dr'>
                <img src={pets_images('./registro_mascotas/titulo.png')} className='img_registro_mascotas' />
                <div className="loginData registro_mascota">
                    <div className='div_registro_mascotas_select'>
                        <div className='div_select_type'>
                            <p id='p_registro_mascotas'>Tipo</p>
                            <select onChange={handlePet} name="type" id="select_type">
                                <option id="option_disabled">Selecciona el tipo de mascota</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="loro">Ave</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <InputUI 
                            type='text'
                            style='inputLogin option_hidden'
                            txt='Especifica el tipo'
                            id='otro_type'
                        />
                    </div>

                    
                    <InputUI 
                        type='text'
                        style = 'inputLogin'
                        txt = 'Nombre mascota'
                    />
                    <div className='div_registro_mascotas_input'>
                        <InputUI 
                            type='text'
                            style = 'inputLogin'
                            txt = 'Raza'
                        />
                        <InputUI 
                            type='text'
                            style = 'inputLogin'
                            txt = 'Color'
                        />

                    </div>
                    <div className='div_registro_mascotas_select_gender'>
                        {
                            (gender === "macho")
                            ? <p id='p_registro_mascotas'>Sexo <span className='animate__animated animate__fadeInDown' id='genderMale'><TbGenderMale /></span></p>
                            : ( gender === "hembra") 
                            ? <p id='p_registro_mascotas'>Sexo <span className='animate__animated animate__fadeInUp' id='genderFemale'><TbGenderFemale /></span></p>
                            : <p id='p_registro_mascotas'>Sexo</p>
                        }
                        
                        <select onChange={ handleGenderPet } name="gender" id="select_gender">
                            <option id='option_disabled'>Selecciona el sexo</option>
                            <option value="macho">Macho</option>
                            <option value="hembra">Hembra</option>
                        </select>
                    </div>
                    <ButtonUI 
                        style='btnLogin'
                        text='Registrar'
                    />
                    <Link to="/registro"className='enlaceBtn'>
                        <ButtonUI 
                            style='btnLoginCrear'
                            text='Cancelar'
                        />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
