import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHospitalUser } from 'react-icons/fa';
import { useRef, useState } from 'react';


export const RegistroStep1 = ( {step_change, setUserType } ) => {

    const navigate = useNavigate();

    const [active, setActive] = useState(0);

    const handleExit = () => {
        navigate ( -1 );
    }

    const handleButton = () => {
        step_change(2);
    }

    return (
        <>
          
            <div className="register_container">
                <div id='registerType' className="registerData animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel1'>
                        
                        <h2 >
                            Rol       
                        </h2>
                        {/* <Link to='/login'> */}
                            <div id='MdOutlineCancel' onClick={handleExit}>
                                <MdOutlineCancel />
                            </div>
                        {/* </Link> */}
                    </div>
                    
                    
                    <div id='register_steps'>
                        <div className='step color_step'>
                            1
                        </div >
                        <div className='linea_step linea_step1' >——</div>
                        <div className='step'>
                            2
                        </div>
                    </div>
                    <div className='hr'>
                        <hr />
                    </div>
                    { (active===3) && <p className='registerClinica__info animate__animated animate__fadeIn'>Ten en cuenta que al registrarte como clínica se enviará la petición de tu registro al administrador. Allí se revisarán tus credenciales</p>}
                    <p className='warn_check'>
                        Por favor, selecciona un rol antes de continuar
                    </p>

                    <div className="types_users">

                        <button 
                        id={active === 2 && "type__user-active"}
                        onClick={()=> {
                            setUserType(2)
                            setActive(2)
                        }}
                        
                            className='type__user-button type__user-user'>
                            <AiOutlineUser className='type__user-button-icon'/>
                            <h1 className='type__user-button-h1' >Usuario</h1>
                        </button>

                        <button 
                        id={active === 3 && "type__user-active"}
                        onClick={()=> {
                            setUserType(3)
                            setActive(3)
                        }}
                        
                            className='type__user-button type__user-clinica'>
                            <FaHospitalUser className='type__user-button-icon'/>
                            <h1 className='type__user-button-h1' >Clínica</h1>
                        </button>

                    </div>

                    

                    <ButtonUI 
                        text={'Siguiente'}
                        style="btn200"
                        id={`${ active === 0 && "btnBlocked" }`}
                        event={handleButton}
                    />

                    {/* ---------------- WARNING ---------------- */}


                </div>
            </div>
        </>
    )
}
