import React, { useState } from 'react'
import { InputUI } from '../../../UI/InputUI/InputUI';
import { ButtonUI } from '../../../UI/ButtonUI/ButtonUI';
import {VscFiles} from 'react-icons/vsc';
import { useSendImage } from '../../../../helpers/Cloudinary_Images/useSendImages';
import { Formik, Form, Field, ErrorMessage } from 'formik';



export const SectionPerfil = ( {userData} ) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("usuario")));
    const {myWidgetUser,urlImage} = useSendImage();

    const handleImageEdit = () => {
        myWidgetUser.open();
    }
    
    // console.log(monthDays( 2022, 8 ));

    return (
        <div className='profile__right-perfil animate__animated animate__fadeIn'>
            <p className='profile__editarPerfil'>Información</p>
            <p className='profile__editarPerfil cc'>N° {userData.documentoUs}</p>
            <div className="profile__seccion1">
                <div className='profile__img'>
                    <img src={userData.imagenUsu} alt="" />
                    <div onClick={handleImageEdit} className='perfil__editImage'><div><VscFiles /></div></div>
                </div>
                <div className='profile__info'>

                    <Formik
                        initialValues={{
                            nombreUs:"",
                            apellidoUs:"",
                            sexoUs:"none",
                            telefonoUs:"",
                        }}
                        validate={(valores) => {

                            let errores = {};
                        }}
                        onSubmit={( valores, {resetForm} ) => {
                            
                            console.log( valores );
                        }}
                    >
                        {({ errors }) => (
                        <Form id='formUpdateUser'>
                            <label htmlFor='nombre' className='profile__perfil-label'>Nombre</label>
                            <InputUI 
                                type={"text"}
                                value={userData.nombreUs}
                                style={"inputLogin"}
                                name={"nombre"}
                            />
                            <label htmlFor='apellido' className='profile__perfil-label'>Apellido</label>
                            <InputUI 
                                type={"text"}
                                value={userData.apellidoUs}
                                style={"inputLogin"}
                                name={"apellido"}
                            />

                            <Field className="selectSexoUserUpdate" name="sexoUs" as="select" id="select">
                                <option value="none">Selecciona el sexo</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </Field>
                            <label htmlFor='telefono' className='profile__perfil-label'>Teléfono</label>
                            <InputUI 
                                type={"text"}
                                value={"(+57) "+userData.telefonoUs}
                                style={"inputLogin"}
                                name={"telefono"}
                            />
                            <ButtonUI 
                                style={"btnAgregarMascota mt-5"}
                                text={"Actualizar"}
                                type={"submit"}
                            />
                        </Form>
                        )}
                    </Formik>
                </div>
                
            </div>
            <div className="profile__section2">
                <p>Cambiar contraseña</p>
                <div className="profile__cambioContasena">
                    <InputUI 
                        type={"text"}
                        txt={"Contraseña actual"}
                        style={"inputLogin mt-5"}
                        name={"oldPassword"}
                    />
                    <InputUI 
                        type={"text"}
                        txt={"Contraseña nueva"}
                        style={"inputLogin mt-3"}
                        name={"newPassword"}
                    />
                    <ButtonUI 
                        style={"btnAgregarMascota mt-5"}
                        text={"Cambiar"}
                    />
                </div>
            </div>
        </div>
    )
}
