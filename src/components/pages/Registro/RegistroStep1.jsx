import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUserNurse, FaHospitalUser } from 'react-icons/fa';
import { ImWarning } from 'react-icons/im';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const RegistroStep1 = ( {step_change} ) => {

    const [user_type, setUser_type] = useState("none")

    const warn = useRef(null);

    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);

    const type1 = useRef(null);
    const type2 = useRef(null);
    const type3 = useRef(null);

    const handleButton = () => {
        step_change(2)
    }

    const check_type = () => {
        if ( user_type === "none" ) {

            warn.current.classList.remove('hidden');
        }
        else {
            handleButton();
            warn.current.classList.add('hidden');
        }
    }

    useEffect( () => {
        ( user_type != "none" )
        ? warn.current.classList.add('hidden')
        : warn.current.classList.remove('hidden');
    }, [user_type])

    const handleType = ( {target} ) => {

        const div_card = document.getElementById(target.id);

        
        if ( target.id == 'type1' ){
            setUser_type( "usuario" );
            type2.current.classList.remove('color_card_type_user');
            type3.current.classList.remove('color_card_type_user');
            type1.current.classList.add('color_card_type_user');

            img2.current.classList.remove('color_img_type_register');
            img3.current.classList.remove('color_img_type_register');
            img1.current.classList.add('color_img_type_register');

        }
        else if ( target.id == 'type2' ) {
            setUser_type( "veterinario" );
            type1.current.classList.remove('color_card_type_user');
            type3.current.classList.remove('color_card_type_user');
            type2.current.classList.add('color_card_type_user');

            img1.current.classList.remove('color_img_type_register');
            img3.current.classList.remove('color_img_type_register');
            img2.current.classList.add('color_img_type_register');

        }
        else if ( target.id == 'type3' ) {
            setUser_type( "clinica" );
            type1.current.classList.remove('color_card_type_user');
            type2.current.classList.remove('color_card_type_user');
            type3.current.classList.add('color_card_type_user');

            img1.current.classList.remove('color_img_type_register');
            img2.current.classList.remove('color_img_type_register');
            img3.current.classList.add('color_img_type_register');

        }

    }

    return (
        <>
          
            <div className="register_container">
                <div className="registerData animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel'>
                        
                        <h2 >
                            Selecciona tu Rol
                        </h2>
                        <Link to='/login'>
                            <div id='MdOutlineCancel'>
                                <MdOutlineCancel />
                            </div>
                        </Link>
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

                    <div className="types_users">

                        <div onClick={handleType} ref={type1} id='type1' className="card_type_user">
                            <h3>Usuario</h3>
                            <p id='p_type_user'>Te permite agendar las citas para tus mascotas</p>
                            <div ref={img1} id="img1" className="img_type_register">
                                <AiOutlineUser />
                            </div>
                        </div>

                        <div onClick={handleType} ref={type2} id='type2' className="card_type_user">
                            <h3>Veterinario</h3>
                            <p id='p_type_user'>Podrás participar como colaborador en nuestras clínicas</p>
                            <div ref={img2} id="img2" className="img_type_register">
                                <FaUserNurse />
                            </div>
                        </div>

                        <div onClick={handleType} ref={type3} id='type3' className="card_type_user">
                            <h3>Clínica</h3>
                            <p id='p_type_user'>Contarás con nuestro sistema de gestion de citas</p>
                            <div ref={img3} id="img3" className="img_type_register">
                                <FaHospitalUser />
                            </div>
                        </div>
                    </div>

                    <div className='hr'>
                        <hr />
                        o
                        <hr />
                    </div>

                    <ButtonUI 
                        text={'Siguiente'}
                        style={'btnLoginCrear'}
                        event={check_type}
                    />

                    <p ref={warn} className='warn_check hidden'>
                        <div id='ImWarning'>
                            <ImWarning />
                        </div>
                        Por favor, selecciona un rol antes de continuar
                    </p>

                </div>
            </div>
        </>
    )
}
