import { Link } from 'react-router-dom';
import { MdOutlineCancel, MdNavigateNext } from 'react-icons/md';
import { RegisterClinica } from './Register_data_fprm/RegisterClinica';
import { RegisterUser } from './Register_data_fprm/RegisterUser';

export const RegistroStep2 = ( {steps, step_change, userType} ) => {


    const handleChangeStepBack = () => {
        step_change(1)
    }


    return (
        <>
          
            <div className="register_container">
                <div className="registerDataAuto animate__animated animate__fadeIn">
                    <div id='titulo_MdOutlineCancel'>
                        
                        <h2 >
                            Ingresa los datos
                        </h2>
                        <Link to='/login'>
                            <div id='MdOutlineCancel'>
                                <MdOutlineCancel />
                            </div>
                        </Link>
                    </div>

                    {

                        ( userType === 3 )
                        ? <RegisterClinica change_step={handleChangeStepBack}/>
                        : <RegisterUser change_step={handleChangeStepBack}/>
                    }

                </div>
            </div>
        </>
    )
}
