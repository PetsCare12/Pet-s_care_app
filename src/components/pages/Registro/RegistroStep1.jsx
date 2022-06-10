import { Link } from 'react-router-dom'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { MdOutlineCancel, MdNavigateNext } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUserNurse, FaHospitalUser } from 'react-icons/fa';


export const RegistroStep1 = () => {

    const handleType = ( {target} ) => {

        const img = document.getElementById('img_type_register');


    }

    return (
        <>
          
            <div className="register_container">
                <div className="registerData animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel'>
                        
                        <h2 >
                            Selecciona tu rol
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
                        <div className="card_type_user">
                            <h3>Usuario</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <div onClick={handleType} id='type1' className="img_type_register">
                                <AiOutlineUser />
                            </div>
                        </div>
                        <div className="card_type_user">
                            <h3>Veterinario</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <div onClick={handleType} id='type2' className="img_type_register">
                                <FaUserNurse />
                            </div>
                        </div>
                        <div className="card_type_user">
                            <h3>Clínica</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <div onClick={handleType} id='type3' className="img_type_register">
                                <FaHospitalUser />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
