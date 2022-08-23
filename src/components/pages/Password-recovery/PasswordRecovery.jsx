import React, { useRef, useState } from 'react'
import {HiOutlineMailOpen} from 'react-icons/hi';
import {RiLockPasswordFill} from 'react-icons/ri';
import {MdCancel} from 'react-icons/md';
import { generateCode } from '../../../helpers/API Consumer/recovery-password';
import { pets_images } from '../../../helpers/Pets_care_images'
import { validacionCorreo, validacionPassword } from '../../../helpers/validacionesInput/validacionGeneral';
import emailjs from '@emailjs/browser';
import './style.css'

export const PasswordRecovery = () => {

    const [step, setStep] = useState(2);
    const [loading, setLoading] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [validacion, setValidacion] = useState([false,""]);
    const [error, setError] = useState(false);

    const [newPassword, setNewpassword] = useState("");
    const [samePassword, setSamePassword] = useState("");

    const formCode = useRef(null);
    const formPassword = useRef(null);

    const handleEmail = ( e ) => {

        setUserEmail( e.target.value );
        const { resp, msj} = validacionCorreo( userEmail );
        setValidacion([!resp,msj]);
    }

    const handlePassword = ( e ) => {

        setNewpassword( e.target.value );
        const { resp , msj } = validacionPassword( e.target.value );
        setValidacion([!resp,msj]);
    }

    const handleRetryPassword = ( e ) => {

        setSamePassword( e.target.value );
        if ( e.target.value !== newPassword ) {
            setValidacion([true,"Las contraseñas no coinciden"]);
        }
        else {
            setValidacion([false, ""])
        }
    }

    const handleSubmitCorreo = () => {

        setLoading( true );

        if ( !validacion[0] ) {
            generateCode( userEmail )
            .then( info => {


                if ( info.status === 200 ) {

                    const data = {
                        email : userEmail,
                        key : info.data.key
                    }
                    
                    emailjs.send('service_kagt37a','template_4f77v7z', data ,'akQoWyMBUDzn4jOoB')
                                .then( response => {
                                    console.log( response );
                                    if ( response.status === 200 ) {
                                        setStep( 1 );
                                        setLoading( false );
                                    }
                                } )
                                .catch( error => {
                                    setLoading( false );
                                } )
                }
                
                else if ( info.status === 404 ) {
                    setLoading( false );
                    setError( true );
                    setTimeout( () => {
                        setError( false );
                    },3000)

                }

            })
        }

    }

    const handleSubmitCode = ( e ) => {

        e.preventDefault();
        const formData = new FormData(formCode.current);
        const data = {
            key: formData.get('code'),
        }

        console.log( data );
        
    }
    

    return (
        <div className='recoveryPass__container'>
            {
            step === 0 &&
            <div className='recoveryPass animate__animated animate__zoomIn'>
                <div className='backgroundIcon'><RiLockPasswordFill className='icon' /></div>
                <p>Por favor introduce tu correo electrónico<br/> para recuperar tu contraseña</p>
                <div className='correo'>
                    <input onChange={handleEmail} type="text" className='inputLogin' value={userEmail}/>
                    { validacion[0] && <p className='validacion'>{validacion[1]}</p> }
                    {
                        loading ?
                        <div className='loadingDog'><img src={pets_images("./loading/perrito.gif")} alt='loadingDog' /></div>
                        
                        :
                        <button className='btnAuto' onClick={handleSubmitCorreo}>Enviar</button>
                    }
                </div>
            </div>
            }
            {
            step === 1 &&
            <div className='recoveryPass animate__animated animate__zoomIn'>
                <div className='backgroundIcon'><HiOutlineMailOpen className='icon' /></div>
                <p>Te hemos enviado un código a tu correo,<br/> por favor ingresalo aquí </p>
                <div className='correo'>
                    <form onSubmit={handleSubmitCode} className='correo' ref={formCode}>
                        <input type="text" className='inputLogin' name="code"/>
                        { validacion[0] && <p className='validacion'>{validacion[1]}</p> }
                        {
                            loading ?
                            <div className='loadingDog'><img src={pets_images("./loading/perrito.gif")} alt='loadingDog' /></div>
                            
                            :
                            <button onClick={handleSubmitCode} type='submit' className='btnAuto'>Validar</button>
                        }
                    </form>
                </div>
            </div>
            }
            {
            step === 2 &&
            <div className='recoveryPass pass animate__animated animate__zoomIn'>
                <h1 className='title'>Cambia tu contraseña</h1>
                <div className='correo'>
                    <form onSubmit={handleSubmitCode} className='passwordForm' ref={formPassword}>
                        <label htmlFor="newpassword">Nueva contraseña</label>
                        <input type="password" className='inputLogin' name="newpassword" value={newPassword} onChange={handlePassword}/>
                        <label htmlFor="retrypassword">Confirmar contraseña</label>
                        <input type="password" className='inputLogin' name="retrypassword" value={samePassword} onChange={handleRetryPassword}/>
                        { validacion[0] && <p className='validacion pass'>{validacion[1]}</p> }
                        {
                            loading ?
                            <div className='loadingDog'><img src={pets_images("./loading/perrito.gif")} alt='loadingDog' /></div>
                            
                            :
                            <button onClick={handleSubmitCode} className='btnAuto'>Cambiar</button>
                        }
                    </form>
                </div>
            </div>
            }
            {
                error && 
                <div className='error animate__animated animate__fadeInDown'>
                    <MdCancel size="25px" />
                    <p>El correo no se encuentra <br/>registrado</p>
                </div>
            }
        </div>
    )
}
