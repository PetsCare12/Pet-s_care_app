import React, { useState } from 'react'
import "./ModalRegisterVet.css";
import { MdOutlineCancel } from 'react-icons/md';
import { pets_images } from '../../../helpers/Pets_care_images';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { useForm } from '../../../helpers/useForm';

export const ModalRegisterVet = ({ children , isOpen , closeModal , token , nit }) => {

  const {myWidgetVeter,urlImage} = useSendImage();
  const showWidget = () => {myWidgetVeter.open()};
  const [img, setimg] = useState(pets_images('./veterinarios/subir.png'));

  const initialForm = {
    documento: "",
    nombre: "",
    apellido: "",
    telefono: "",
    sexovt: "",
    correo: "",
    especialidad: "",
    imagenVete: "",
    estadoVt: 0,
    password: ""
  };

  const validationsForm = (form) => {

    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexNumbers = /^\d+$/;

         if (!form.imagenVete === "") {form.imagenVete = img}
    else if (!form.documento.trim()) {errors.documento = "El 'Documento:' es requerido!";}

    else if (!form.nombre.trim()) {errors.nombre = "El 'Nombre:' es requerido!";}
    else if (!form.apellido.trim()) {errors.apellido = "El 'Apellido:' es requerido!";}

    else if (!form.telefono.trim()) {errors.telefono = "El 'Telefono:' es requerido!";}
    else if (!form.sexovt === 0) {errors.sexovt = "El 'Sexo:' es requerido!";}

    else if (!form.estadoVt === 0) {errors.estadoVt = "El 'Estado:' es requerido!";}
    else if (!form.especialidad.trim()) {errors.especialidad = "El 'Especialidad:' es requerido!";}

    else if (!form.correo.trim()) {errors.correo = "El 'Correo:' es requerido!";}
    else if (!form.password.trim()) {errors.correo = "La 'Contraseña:' es requerido!";}

    else if (!regexNumbers.test(form.documento.trim())) {errors.documento = "El 'Documento:' solo acepta numeros!"}
    else if (!regexName.test(form.apellido.trim())) {errors.apellido = "El 'Apellido:' solo acepta letras!"}

    else if (!regexName.test(form.nombre.trim())) {errors.nombre = "El campo 'Nombre:' solo acepta letras!"}
    else if (!regexName.test(form.especialidad.trim())) {errors.especialidad = "El campo 'Especialidad:' solo acepta letras!"}

    else if (!regexNumbers.test(form.telefono.trim())) {errors.telefono = "El campo 'Telefono:' solo acepta numeros!"}
    else if (!regexEmail.test(form.correo.trim())) {errors.correo = "El campo 'Correo:' es Incorrecto!"}

    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(form.password)) {errors.password = 'Debes incluir minúsculas, mayúsculas, números y caracteres especiales en la contraseña';}

    return errors;
  }
  const {form,errors,loading,response,handleChangeVet,handleBlur,handleSubmit} = useForm(initialForm,validationsForm,token,nit);

  return (

    <div className={`modal ${isOpen && 'modalOpen'}`}>
        <div className='modalContainer animate__animated animate__fadeIn'>

          <div className="btn_close_container">
            <div id='MdOutlineCancelVet' onClick={closeModal}><MdOutlineCancel /></div>
            <div>{loading && <div id='login-spin-clinic' className='spiner'></div>}</div>
          </div>

          <div className="input_registerVet_container">

          <h2>{"Registra un Veterinario"}</h2>

            <form onSubmit={handleSubmit} className='formVet_register animate__animated animate__fadeIn'>

              <div className="img_cont_vet">
                <img src={pets_images("./veterinarios/usuario.png")} alt="" id='imgForm'/>
              </div>

              <div className='setImg_register_container'>
                <a onClick={showWidget} className="a_upload_Image_regs ">
                <img src={img} alt="Subir Imagen" className=' imgRegs upload_Image_regs'/>
                </a>
              </div>

              <div className="parts part1">

                <input type="text" 
                placeholder='Documento' 
                className='input regs' 
                name='documento' 
                onChange={handleChangeVet}
                value={form.documento}
                onBlur={handleBlur}
                required
                id='documento'/>

                <input type="text" 
                placeholder='Nombre' 
                className='input regs'
                name='nombre'
                onChange={handleChangeVet}
                value={form.nombre}
                onBlur={handleBlur}
                required
                id='nombre'/>

              </div>
              {errors.documento && <p id='warningP'>{errors.documento}</p>}
              {errors.nombre && <p id='warningP'>{errors.nombre}</p>}

              <div className="parts part2">
                <input type="text" 
                placeholder='Apellido' 
                className='input regs'
                name='apellido'
                onChange={handleChangeVet}
                value={form.apellido}
                onBlur={handleBlur}
                required
                id='apellido'/>

                <input type="text" 
                placeholder='Telefono' 
                className='input regs'
                name='telefono'
                onChange={handleChangeVet}
                value={form.telefono}
                onBlur={handleBlur}
                required
                id='telefono'/>
              </div>
              {errors.apellido && <p id='warningP'>{errors.apellido}</p>}
              {errors.telefono && <p id='warningP'>{errors.telefono}</p>}

              <div className="parts selects_conatiner">

                <select name="sexovt" id="sexovt" className='input selects' onChange={handleChangeVet} value={form.sexovt} onBlur={handleBlur}>
                  <option value="none">Seleccione el sexo</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                  <option value="otro">Otro</option>
                </select>

                <select name="estadoVt" id="estadoVt" className='input selects' onChange={handleChangeVet} value={form.estadoVt} onBlur={handleBlur}>
                  <option value="0">Seleccione un estado</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>

              </div>
              {errors.sexovt && <p id='warningP'>{errors.sexovt}</p>}
              {errors.estadoVt && <p id='warningP'>{errors.estadoVt}</p>}

              <div className="parts part3">

                <input type="email" 
                placeholder='Correo' 
                className='input regs'
                name='correo'
                onChange={handleChangeVet}
                value={form.email}
                onBlur={handleBlur}
                required
                id='correo'/>

                <input type="text" 
                placeholder='Especialidad' 
                className='input regs'
                name='especialidad'
                onChange={handleChangeVet}
                value={form.especialidad}
                onBlur={handleBlur}
                required
                id='especialidad'/>

              </div>
              {errors.correo && <p id='warningP'>{errors.correo}</p>}
              {errors.especialidad && <p id='warningP'>{errors.especialidad}</p>}

                  <input type="password" 
                  placeholder='Contraseña' 
                  className='input'
                  name='password'
                  onChange={handleChangeVet}
                  value={form.password}
                  onBlur={handleBlur}
                  required
                  id='password'/>
              {errors.password && <p id='warningP'>{errors.password}</p>}

              <ButtonUI text="Registrar Veterinario"  type="submit" style="submit vetRes"></ButtonUI>

            </form>
          </div>
        </div>
    </div>
  )
}