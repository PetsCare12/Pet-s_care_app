import React, { useState } from 'react'
import { SimpleModal } from '../../layout/Modals/SimpleModal'
import { MdCheckCircle,MdCancel } from "react-icons/md";
import { BsGenderMale,BsGenderFemale } from "react-icons/bs";
import {VscFiles} from 'react-icons/vsc';
import { HiPencil } from "react-icons/hi";
import { FaWeightHanging } from "react-icons/fa";
import { InputUI } from '../../UI/InputUI/InputUI'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { pets_images } from '../../../helpers/Pets_care_images';

export const MascotasCard = ({ name, age, raza, image, discapacidad, sexo, peso, tipo, color }) => {

    const [mascotaActive, setMascotaActive] = useState(false);
    const [edit, setEdit] = useState(false);
    const [disActive, setDisActive] = useState(discapacidad);

    const [inpNombre, setInpNombre] = useState(name);
    const [inpEdad, setInpEdad] = useState(age);
    const [inpRaza, setInpRaza] = useState(raza);
    const [inpDiscapacidad, setInpDiscapacidad] = useState(discapacidad);
    const [inpSexo, setInpSexo] = useState(sexo);
    const [inpPeso, setInpPeso] = useState(peso);
    const [inpColor, setInpColor] = useState(color);

    return (
        <>
        <button onClick={ () => setMascotaActive( true )} className='mascotaCard__button'>
            <div className="mascotaCard" 
            style={{
                background:`url("${image}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>

                <div className="mascotaCard__mascota">
                <div className="mascotaCard__info">
                    <h1>{name}</h1>
                    <h2 style={{color:"white"}}>{raza}</h2>
                    <h2 style={{color:"white"}}>{age} años</h2>
                </div>
                </div>

            </div>
        </button>
        {
            mascotaActive &&
            <SimpleModal>
                <div className='mascotaInfo__container'>
                    {/* ............. Sección para presentar ............. */}
                    {
                        !edit &&
                        <>
                        <img className='img animate__animated animate__fadeIn' src={image} />
                        <div className="specificInfo animate__animated animate__fadeIn">
                            <p className='name'>{name} <span className='tipo'>/ {tipo}</span></p>
                            <p>{raza}</p>

                            { age > 1 ? <p>{age} años</p> : <p>{age} año</p>}

                            <p className='peso'>{peso} Kg <FaWeightHanging id='iconPesoEdit'/></p>
                            <p className='color'>
                                {color} 
                                <img 
                                    style={{width:"17px", marginBottom:"-4px",marginLeft:"5px"}} 
                                    src={pets_images("./perfil/color-circle.png")} 
                                />
                            </p>

                            <p>Discapacidad {discapacidad === "SI" ? <MdCheckCircle id='icon' color='green'/> : <MdCancel id='icon' color='red'/>}</p>
                        </div>
                        <div className='gender animate__animated animate__fadeIn' >
                            {
                                sexo === "macho" ? <BsGenderMale color='#008eff' className='icon_gender'/> : <BsGenderFemale color='#ff6fd3' className='icon_gender'/>
                            }
                        </div>
                        </>
                    }
                    {/* ............. Sección para la edición (8) ............. */}
                    {
                        edit &&
                        <>
                        <img id='edit' className='img animate__animated animate__fadeIn' src={image} />
                        <div className='updateImg'><VscFiles size="50px" /></div>
                        <div className="specificInfo animate__animated animate__fadeIn">
                            <form action="" style={{gap:"0px"}}>
                                <div><label htmlFor="nombre">Nombre</label><InputUI name="nombre" type="text" style="inputEditMascota" value={inpNombre}/></div>
                                <div className="sameLine">
                                    <div><label htmlFor="raza">Raza</label><InputUI name="raza" type="text" style="inputEditMascota" value={inpRaza}/></div>
                                    <div><label htmlFor="color">Color</label><InputUI name="color" type="text" style="inputEditMascota" value={inpColor}/></div>
                                </div>

                                <div className="sameLine">
                                    <div className='input-w95'><label htmlFor="edad">Edad</label><InputUI name="edad" type="text" style="inputEditMascota input-w95" value={inpEdad}/></div>
                                    <div className='input-w95'><label htmlFor="peso">Peso</label><InputUI name="peso" type="text" style="inputEditMascota input-w95" value={inpPeso}/></div>
                                    <div className='input-w95'>
                                        <label htmlFor="peso">Sexo</label>
                                        <select name="sexo" id="sexoEdit" value={inpSexo}>
                                            <option value="macho">Macho</option>
                                            <option value="hembra">Hembra</option>
                                        </select>
                                    </div>
                                </div>

                                <p style={{fontSize:"13px",marginTop:"5px"}}>
                                    Discapacidad
                                    <MdCheckCircle onClick={ () => setDisActive( "SI" )} id='icon-edit' color={`${disActive === "SI" ? "green" : "gray" } `}/>  
                                    <MdCancel onClick={ () => setDisActive( "NO" )} id='icon-edit' color={`${disActive === "NO" ? "red" : "gray" } `}/>
                                </p>
                                <ButtonUI 
                                    style="btnActualizarMascota"
                                    text="Actualizar"
                                    type="submit"
                                />
                            </form>

                        </div>
                        <div className='gender animate__animated animate__fadeIn'>
                            {
                                sexo === "macho" ? <BsGenderMale color='#008eff' className='icon_gender'/> : <BsGenderFemale color='#ff6fd3' className='icon_gender'/>
                            }
                        </div>
                        </>
                    }
                    
                    <button onClick={ () => setMascotaActive( false ) } className="cancel">x</button>
                    <button onClick={ () => setEdit( !edit ) } className="edit"><HiPencil /></button>
                </div>
            </SimpleModal>
        }
        </>
    )
}
