import React, { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { useForm } from '../../../helpers/useForm';
import { imageRandom } from '../../../helpers/RandomImages/imagenessa';
import { getVeterinarioById } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import "./ModalRegisterVet.css";

export const ModalRegisterVet = ({ children , isOpen , closeModal , token , nit }) => {

  let imgDefault = imageRandom();

  const [val_exist, setval_exist] = useState(404);
  const {myWidgetVeter,urlImage} = useSendImage();
  const [imgUrl, setimg] = useState(imgDefault);

  const initialForm = {
    documento: "",
    nombre: "",
    apellidos: "",
    sexovt: "none",
    telefono: "",
    correo: "",
    especialidad: "",
    password: "",
    imagenVete: "",
    estadoVt: 0
  };

  const validationsForm = (form) => {

    if ( val_exist !== 200 ) {
      getVeterinarioById(form.documento).then(data => { 

        if (data.status === 404) {
          setval_exist(404);
          console.log(setval_exist);
        }else{
          setval_exist(200); 
        }
         
      });
    }else {
      setval_exist(200);
      console.log("Hecho");
    }

    let errors = {};

        if (!form.documento.trim() 
        // || !/^\d{7,}$/.test(form.documento)
        ) { errors.documento = "Documento erroneo mín. 7 caracteres y solo números" }
        
    else if ( val_exist === 200 ) { errors.documento = "El documento ya existe" }

    else if (!form.nombre.trim()) { errors.nombre = "Nombres erroneos" }
    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.nombre)) { errors.nombre = "Nombres erroneos" }

    else if (!form.apellidos.trim()) { errors.apellidos = "Apellidos erroneos" }
    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.apellidos)) { errors.apellidos = "Apellidos erroneos" }

    else if (!form.telefono.trim()) { errors.telefono = "Telefono erroneo" }
    else if (!/^\d{10,10}$/.test(form.telefono)) { errors.telefono = "Telefono erroneo mín. 10 caracteres y solo números" }

    else if (!form.sexovt === "none") {errors.sexovt = "Sexo requerido"}
    else if (!form.estadoVt === 0) {errors.estadoVt = "Estado requerido"}

    else if (!form.correo.trim()) { errors.correo = "Correo erroneo" }
    else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(form.correo)) { errors.correo = "Correo erroneo" }

    else if (!form.especialidad.trim()) { errors.especialidad = "Especialidad erronea" }
    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.especialidad)) { errors.especialidad = "Especialidad erronea" }

    else if (!form.password.trim()) {errors.password = "Debes incluir minúsculas, mayúsculas, números y caracteres especiales en la contraseña"}
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(form.password)) {errors.password = "Debes incluir minúsculas, mayúsculas, números y caracteres especiales en la contraseña"}

    else{errors.documento = ""}

      return errors;
  }
  const {form,errors,loading,response,estatusResponse,handleChangeVet,handleBlur,handleSubmit} = useForm(initialForm,validationsForm,token,nit);

  const showWidget = () => {myWidgetVeter.open();};

  useEffect(() => {
    setimg(urlImage);
  }, [urlImage])

  return (

    <div className={`modal ${isOpen && 'modalOpen'}`}>
        <div className='modalContainer animate__animated animate__fadeIn'>

          <div className="btn_close_container">
            <div id='MdOutlineCancelVet' onClick={closeModal}><MdOutlineCancel /></div>
          </div>

          <div className="input_registerVet_container">

          <h2>{"Registra un Veterinario"}</h2>

            <form onSubmit={handleSubmit} className='formVet_register animate__animated animate__fadeIn'>

                {loading && <div id='login-spin-clinic' className='spiner'></div>}
                {response && <p id='succesP  animate__animated animate__fadeIn'>{estatusResponse}</p>}

              <div title='Sube una Imagen!' className="img_cont_vet" onClick={showWidget}>
                <img src={form.imagenVete = imgUrl} alt="" className='imgForm'/>
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
                name='apellidos'
                onChange={handleChangeVet}
                value={form.apellidos}
                onBlur={handleBlur}
                required
                id='apellidos'/>

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
              {errors.apellidos && <p id='warn-login'>{errors.apellidos}</p>}
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
                value={form.correo}
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