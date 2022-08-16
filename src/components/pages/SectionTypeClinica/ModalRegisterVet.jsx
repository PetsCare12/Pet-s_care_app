import React, { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { pets_images } from '../../../helpers/Pets_care_images';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { useForm } from '../../../helpers/useForm';
import "./ModalRegisterVet.css";

export const ModalRegisterVet = ({ children , isOpen , closeModal , token , nit }) => {

  let imgDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU";
  const {myWidgetVeter,urlImage} = useSendImage();
  const [img, setimg] = useState(imgDefault);

  const initialForm = {
    documento: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    sexovt: "none",
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
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

         if (!form.imagenVete.trim()) {form.imagenVete = img}
    else if (!form.documento.trim() || !regexNumbers.test(form.documento)) { errors.documento = "Documento erroneo" }
    else if (!form.nombre.trim() || !regexName.test(form.nombre)) { errors.nombre = "Nombres erroneo" }
    else if (!form.apellidos.trim() || !regexName.test(form.apellidos)) { errors.apellidos = "Apellidos erroneos" }
    else if (!form.telefono.trim() || !regexNumbers.test(form.telefono)) { errors.telefono = "Telefono erroneo" }
    else if (!form.sexovt === "none") {errors.sexovt = "Sexo requerido"}
    else if (!form.correo.trim() || !regexEmail.test(form.correo)) { errors.correo = "Correo erroneo" }
    else if (!form.especialidad.trim() || !regexName.test(form.especialidad)) { errors.especialidad = "Especialidad erronea" }
    else if (!form.estadoVt === 0) {errors.estadoVt = "Estado requerido"}
    else if (!form.password.trim() || !regexPass.test(form.password)) {errors.password = "Debes incluir minúsculas, mayúsculas, números y caracteres especiales en la contraseña"}

    return errors;
  }
  const {form,errors,loading,response,handleChangeVet,handleBlur,handleSubmit} = useForm(initialForm,validationsForm,token,nit);

  const showWidget = () => {myWidgetVeter.open();};

  useEffect(() => {
    setimg(urlImage);
  }, [urlImage])

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
                <img src={form.imagenVete =  img} alt="" id='imgForm'/>
              </div>

              <div className='setImg_register_container'>
                <a onClick={showWidget} className="a_upload_Image_regs ">
                <img src={pets_images('./veterinarios/subir.png')} alt="Subir Imagen" className=' imgRegs upload_Image_regs'/>
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
              {errors.documento && <p id='warn-login'>{errors.documento}</p>}
              {errors.nombre && <p id='warn-login'>{errors.nombre}</p>}

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
              {errors.apellido && <p id='warn-login'>{errors.apellido}</p>}
              {errors.telefono && <p id='warn-login'>{errors.telefono}</p>}

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
              {errors.sexovt && <p id='warn-login'>{errors.sexovt}</p>}
              {errors.estadoVt && <p id='warn-login'>{errors.estadoVt}</p>}

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
              {errors.correo && <p id='warn-login'>{errors.correo}</p>}
              {errors.especialidad && <p id='warn-login'>{errors.especialidad}</p>}

                  <input type="password" 
                  placeholder='Contraseña' 
                  className='input'
                  name='password'
                  onChange={handleChangeVet}
                  value={form.password}
                  onBlur={handleBlur}
                  required
                  id='password'/>
              {errors.password && <p id='warn-login'>{errors.password}</p>}

              <ButtonUI text="Registrar Veterinario"  type="submit" style="submit vetRes"></ButtonUI>

            </form>
          </div>
        </div>
    </div>
  )
}