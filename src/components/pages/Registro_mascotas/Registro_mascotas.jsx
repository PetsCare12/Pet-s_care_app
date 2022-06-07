import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { ImagenUI } from '../../UI/ImagenUI/ImagenUI'
import { InputUI } from '../../UI/InputUI/InputUI'
import { BsGenderMale, BsGenderFemale, BsPatchQuestion } from 'react-icons/bs';
import './Registro_mascotas.css'
import imagePerro from './img/perro.png'
import imageGato from './img/gato.png'
import imageLupa from './img/lupa.png'
import imageOtro from './img/varios.png'




export const Registro_mascotas = () => {

    const [type_pet, setType_pet] = useState(imageLupa)
    const [gender, setGender] = useState("")

    const handlePet = ( {target} ) => {

        if ( target.value === "perro" ) {
            setType_pet( imagePerro );
        }
        else if ( target.value === "gato" ) {
            setType_pet( imageGato )
        } else if ( target.value === "otro") {
            setType_pet( imageOtro )
        } else {
            setType_pet( imageLupa )
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
        <div className="loginContainer">
            <div className="login_cont_iz animate__animated animate__fadeInLeftBig">
                <img id='type_animal' src={type_pet} alt="" />
            </div>
            <div className='login_cont_dr'>
                <ImagenUI />
                <div className="loginData registro_mascota">
                    <p>Registro Mascotas</p>
                    <div className='div_registro_mascotas_select'>
                        <p id='p_registro_mascotas'>Tipo</p>
                        <select onChange={ handlePet } name="pet" id="pet">
                            <option selected disabled>Selecciona tu tipo de mascota</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    
                    <InputUI 
                        type='text'
                        style = 'inputLogin'
                        txt = 'Nombre mascota'
                    />
                    <InputUI 
                        type='text'
                        style = 'inputLogin'
                        txt = 'ID '
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
                    <div className='div_registro_mascotas_select'>
                        {
                            (gender === "macho")
                            ? <p id='p_registro_mascotas'>Sexo <span id='genderMale'><BsGenderMale /></span></p>
                            : ( gender === "hembra") 
                            ? <p id='p_registro_mascotas'>Sexo <span id='genderFemale'><BsGenderFemale /></span></p>
                            : <p id='p_registro_mascotas'>Sexo <span><BsPatchQuestion /></span></p>
                        }
                        
                        <select onChange={ handleGenderPet } name="pet" id="pet">
                            <option selected disabled>Selecciona el sexo</option>
                            <option value="macho">Macho</option>
                            <option value="hembra">Hembra</option>
                        </select>
                    </div>
                    <ButtonUI 
                        style='btnLogin'
                        text='Registrar'
                    />
                    <div className='hr'>
                        <hr />
                        o
                        <hr />
                    </div>
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
