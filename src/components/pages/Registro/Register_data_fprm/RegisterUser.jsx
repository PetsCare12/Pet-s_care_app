import React, { useRef, useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GoArrowSmallLeft } from 'react-icons/go';
import { ButtonUI } from "../../../UI/ButtonUI/ButtonUI";
import { registro_user, validate_user } from '../../../../helpers/dataAPI';
import { containsSpecialChars, checkUppercase, checkSize } from '../../../../helpers/validacionesInput/validacionCaracteresEspeciales';

export const RegisterUser = ( {change_step} ) => {

    const slcSexo = useRef(null);
    const warnPassword = useRef(null);
    const warnEmail = useRef(null);
    const [validateDoc, setValidateDoc] = useState(false);
    const [validatePass, setValidatePass] = useState(false);

    const handleSubmit = ( e ) => {
        e.preventDefault();

        const validacion = validate_user( "usuarios", e.target[0].value )

        console.log(validacion);
        const data_user={
            "documento": e.target[0].value,
            "nombre": e.target[1].value,
            "apellido": e.target[2].value,
            "correo": e.target[3].value,
            "telefono": e.target[4].value,
            "sexo": e.target[5].value,
            "password": e.target[6].value
        }

        // registro_user( 
        //     "usuarios", 
        //     data_user["documento"],
        //     data_user["nombre"],
        //     data_user["apellido"],
        //     data_user["telefono"],
        //     data_user["sexo"],
        //     data_user["correo"],
        //     data_user["password"],
        // )
    }

    const emptyInput = ( {target} ) => {

        let validacion = false;

        const inpDoc  = document.getElementById("inpDocumento").value;
        const inpNom  = document.getElementById("inpNombre").value;
        const inpApe  = document.getElementById("inpApellido").value;
        const inpCorr = document.getElementById("inpCorreo").value;
        const inpTel  = document.getElementById("inpTelefono").value;
        const inpPass = document.getElementById("inpPassword").value;
        const btn     = document.getElementById("btnEnviar");


        if ( target.id === "inpPassword") {
            if (! checkSize( inpPass, 8) ){
            warnPassword.current.textContent = "Debe contener por lo menos 8 caracteres *";
            } 
            else if (! checkUppercase( inpPass ) ) {
                warnPassword.current.textContent = "Incluye por lo menos una letra capitalizada *";
            } else if (! containsSpecialChars( inpPass ) ){
                warnPassword.current.textContent = "Incluye caracteres especiales *";
            } else {
                warnPassword.current.textContent = "";
                setValidatePass(true);
            }
        }

        if ( target.id === "inpDocumento" ) {

            if (! checkSize( inpDoc, 4) ){
                warnEmail.current.textContent = "Debe contener por lo menos 4 caracteres *";
            }
            else{
                warnEmail.current.textContent = "";
                setValidateDoc(true);
            }
        }


        if ( (validateDoc === true) && (inpNom.length > 0 )  && (inpApe.length > 0 ) && (inpCorr.length > 0 ) && (inpTel.length > 0 ) && (inpPass.length > 0 ) && (validatePass === true) ) {
            validacion = true

        }
        else {
            validacion = false;
        }

        ( validacion === true )
        ? btn.classList.remove("btnBlocked")
        : btn.classList.add("btnBlocked");

        
        
        
        
        

        

    }

    return (
        <>

            {/* ----- REGISTRO COMO USUARIO ----- */}
            <div id='register_steps'>
                <div className='step color_step'>
                    1
                </div >
                <div className='linea_step color_linea' >——</div>
                <div className='step color_step'>
                    2
                </div>
            </div>
            <div className='hr'>
                <hr />
            </div>
            <div className="cont_icon">
                <div onClick={change_step} className='rows_register'>
                    <GoArrowSmallLeft />
                </div>
                <div className="user_icon">
                    <AiOutlineUserAdd />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <InputUI 
                    type='text'
                    style = 'inputLogin inputRegistro'
                    txt = 'Documento'
                    id={"inpDocumento"}
                    eventChange={emptyInput}
                />
                <p className='animate__animated animate__fadeIn warn__password-user' ref={warnEmail}></p>
                <div id='registro_column1'>
                    <InputUI 
                        type='text'
                        style = 'inputLogin inputRegistro'
                        txt = 'Nombre'
                        id={"inpNombre"}
                        eventChange={emptyInput}
                    />
                    <InputUI 
                        type='text'
                        style = 'inputLogin inputRegistro'
                        txt = 'Apellido'
                        id={"inpApellido"}
                        eventChange={emptyInput}
                    />
                </div>
                
                <InputUI 
                    type='email'
                    style = 'inputLogin inputRegistro'
                    txt = 'Correo electrónico'
                    id={"inpCorreo"}
                    eventChange={emptyInput}
                />
                <div className="registro_sexo " id='registro_column1'>
                    <InputUI 
                        type='text'
                        style = 'inputLogin inputRegistro'
                        txt = 'Teléfono'
                        id={"inpTelefono"}
                        eventChange={emptyInput}
                    />
                    <select ref={slcSexo} name="sexo" id="select" onChange={emptyInput}>
                        <option selected={true} disabled={true} value="none">Selecciona el sexo</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                    </select>
                    
                </div>

                <InputUI 
                    type='password'
                    style = 'inputLogin inputRegistro'
                    txt = 'Contraseña'
                    id={"inpPassword"}
                    eventChange={emptyInput}
                />
                <p className='animate__animated animate__fadeIn warn__password-user' ref={warnPassword}></p>

                <ButtonUI 
                text="Registrar"
                style="btnLogin btnBlocked"
                id={"btnEnviar"}
                />
            </form>
        </>
    )
}
