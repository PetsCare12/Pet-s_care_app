import { useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import { useForm } from '../../../helpers/useForm';
import { ButtonUI } from "./../../UI/ButtonUI/ButtonUI";
import { useModal } from '../../../helpers/useModal';
import { ModalRegisterVet } from './ModalRegisterVet';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import "./TypeClinica.css";
import { getVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';

export const TypeClinica = () => {
  
  let nit = 111;
  let objVeter = getVeterinarios(nit);
  console.log(objVeter);
  const arr = Object.entries(objVeter);
  console.log(arr);
  // console.log(arr.then(response => console.log(response)));

  const [useVet, setVet] = useState({});

  const [img, setimg] = useState("");

  const getVet = (e) => {
    setVet(e);
    setimg(useVet.imagen);
  }

  const disableVet = (e) => {};
  const searchVetById = (e) => {};

  const [isOpenModal1,openModal1,closeModal1] = useModal(false);

  const {myWidgetVeter,urlImage} = useSendImage();
  
  const showWidget = () => {
    setimg(!img);
    myWidgetVeter.open();
    setimg(urlImage);
    console.log(urlImage);
  };
  
  const initialForm = {
    documento: "",
    nombre: "",apellido: "",
    telefono: "",sexo: "",
    especialidad: "",imagen: ""
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexNumbers = /^\d+$/;

         if (!form.apellido.trim()) {errors.apellido = "El 'Apellido:' es requerido!";}
    else if (!form.nombre.trim()) {errors.nombre = "El 'Nombre:' es requerido!";}
    else if (!form.sexo.trim()) {errors.sexo = "El 'Sexo:' es requerido!";}
    else if (!form.especialidad.trim()) {errors.especialidad = "El 'Especialidad:' es requerido!";}
    else if (!form.telefono.trim()) {errors.telefono = "El 'Telefono:' es requerido!";}
    else if (!form.correo.trim()) {errors.correo = "El 'Correo:' es requerido!";}
    else if (!regexName.test(form.apellido.trim())) {errors.apellido = "El 'Apellido:' solo acepta letras!"}
    else if (!regexName.test(form.nombre.trim())) {errors.nombre = "El campo 'Nombre:' solo acepta letras!"}
    else if (!regexName.test(form.sexo.trim())) {errors.sexo = "El campo 'Sexo:' solo acepta letras!"}
    else if (!regexName.test(form.especialidad.trim())) {errors.especialidad = "El campo 'Especialidad:' solo acepta letras!"}
    else if (!regexNumbers.test(form.telefono.trim())) {errors.telefono = "El campo 'Telefono:' solo acepta numeros!"}
    else if (!regexEmail.test(form.correo.trim())) {errors.correo = "El campo 'Correo:' es Incorrecto!"}

    return errors;
  }

  const {
        form,errors,
        loading,
        response,handleChangeVet,
        handleBlur,handleSubmit

  } = useForm(initialForm,validationsForm);

  return (
    <div className='st1'>
      <div className='st2'>
          <div className="title-container">
            <div className='titles'>
              <h1 id='titleP1'>{"Pet's Care"}</h1>
              <spam id='titleP2'>{"Para Veterinarias †"}</spam>
            </div>
            <div id='titleP3'>
              <h1>{"Veterinaria Salud Canina"}</h1>
              <hr className='hrVet'/>
            </div>
          </div>
          <div className='st3'>
            <div className='st4'>
              <h1 className='titleP2 -margin'>Veterinarios</h1>
              <hr className='hrVet'/>
                    <ModalRegisterVet isOpen={isOpenModal1} closeModal={closeModal1} className="animate__animated animated_fadeIn">
                      <p>Lo abrio perro hijuepputa.</p>
                    </ModalRegisterVet>
                    <div className="search">
                      <input type="text" className="input iSearch" placeholder='ID del Veterinario...'/>
                      <a onClick={searchVetById} href=""><img src={pets_images('./veterinarios/lupa.png')} alt="" id='searchIcon' /></a>
                      <ButtonUI text="Registrar" type="button" style="regs submit" event={openModal1}></ButtonUI>
                    </div>
              <ul>
                {/* {
                  arr.map((item) =>(
                    <li className="liVetSpace">
                        <div className='liVet'>
                          <div className='img_li_vet'>
                            <img src={item.imagenVete} alt="" id='imgVet'/>
                          </div>
                          <div className='liVetA'>
                            <h4><span>Nombre:</span>            {item.nombre}</h4>
                            <h4><span>Apellido:</span>        {item.apellido}</h4>
                            <h4><span>ID:</span>             {item.documento}</h4>
                            <h4><span>Especialidad:</span>{item.especialidad}</h4>
                          </div>
                        </div> 
                        <div className='idc'>
                          <a onClick={() => getVet(item)} href>
                            <img src={pets_images('./veterinarios/proximo.png')} alt="" id='imgLi'/>
                          </a>
                        </div>
                      </li>
                  ))
                } */}
              </ul>
            </div>
            
            <div className='st5'>
              {
                (JSON.stringify(useVet) !== '{}')
                ? 
                  <form onSubmit={handleSubmit} className='formVet'>

                        {response ? <p id='succesP'>Simulacion de Envio terminada!</p> : <p></p>}


                      <div className="imgForm">
                        <div className="imagen_container">
                          <div className="img_cont_vet">
                              <img src={form.imagen = img} 
                              alt="" id='imgForm'/>
                              <a onClick={showWidget} className="a_uploadImage">
                                <img src={pets_images('./veterinarios/subir.png')} alt="Subir Imagen" className='upload_Image'/>
                              </a>
                          </div>
                      </div>
                      <div className="imgForm">
                          <div className='liVetA'>
                              <h1>{useVet.especialidad}</h1>
                              <hr className='hrVet'/>
                              <h2>{useVet.nombre} {useVet.apellido}</h2>
                              <h4>ID: {form.documento = useVet.documento}</h4>
                          </div>
                          </div>
                      </div>

                      {loading && <div id='login-spin-clinic' className='spiner'></div>}
                      
                    <div className="bottomForm">
                      <div className="inputsVet">
                        <div className='input-container'>
                          <input 
                          name='apellido' type="text" 
                          placeholder=' Apellido... '
                          onChange={handleChangeVet}
                          value={form.apellido} onBlur={handleBlur}
                          required 
                          id='apellido'
                          className={`input ${(errors.apellido) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="apellido" class="placeholder"> {useVet.apellido} </label>
                        </div>
                        {errors.apellido &&             <p id='warningP'>{errors.apellido}</p>}

                        <div className="input-container">
                          <input 
                          name='nombre' type="text"
                          placeholder=' Nombre... ' 
                          onChange={handleChangeVet}
                          value={form.nombre} onBlur={handleBlur}
                          required 
                          id='nombre'
                          className={`input ${(errors.nombre) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="nombre" class="placeholder"> {useVet.nombre} </label>
                        </div>
                        {errors.nombre &&               <p id='warningP'>{errors.nombre}</p>}

                        <div className="input-container">
                          <input 
                          name='sexo' type="text" 
                          placeholder=' Sexo... ' onChange={handleChangeVet}
                          value={form.sexo} onBlur={handleBlur}
                          id='sexo'
                          className={`input ${(errors.sexo) ? 'iWarning' : 'input'}`}
                          required 
                          />
                          <div class="cut"></div>
                          <label for="sexo" class="placeholder"> {useVet.sexo} </label>
                        </div>
                        {errors.sexo &&                 <p id='warningP'>{errors.sexo}</p>}

                        <div className="input-container">
                          <input 
                          name='especialidad' type="text" 
                          placeholder=' Especialidad... '
                          onChange={handleChangeVet}
                          value={form.especialidad} onBlur={handleBlur}
                          required
                          id='especialidad'
                          className={`input ${(errors.especialidad) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="especialidad" class="placeholder"> {useVet.especialidad} </label>
                        </div>
                        {errors.especialidad &&         <p id='warningP'>{errors.especialidad}</p>}

                        <div className="input-container">
                          <input 
                          name='correo'  type="email" 
                          placeholder=' Correo... ' onChange={handleChangeVet}
                          value={form.correo} onBlur={handleBlur}
                          required 
                          id='correo'
                          className={`input ${(errors.correo) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="correo" class="placeholder"> {useVet.correo} </label>
                        </div>
                        {errors.correo &&               <p id='warningP'>{errors.correo}</p>}

                       <div className="input-container">
                        <input 
                          name='telefono' type="text" 
                          placeholder=' Telefono... ' onChange={handleChangeVet}
                          value={form.telefono} onBlur={handleBlur}
                          required 
                          id='telefono'
                          className={`input ${(errors.telefono) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="telefono" class="placeholder"> {useVet.telefono} </label>
                        </div>
                        {errors.telefono &&             <p id='warningP'>{errors.telefono}</p>}
                      </div>
                    </div>
                    <div className="btnSection">
                      <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
                      <ButtonUI text="Deshabilitar" event={disableVet} type="button" style="submit"></ButtonUI>
                    </div>
                  </form>
                : 
                  <div id='titleValidation'>
                    <img src="https://www.gifsanimados.org/data/media/202/perro-imagen-animada-0387.gif" border="0" alt="perro-imagen-animada-0387" className='imgWait'/>
                    <h1 id='titleP2-margin'>Por favor selecciona un veterinario de tu planta!</h1>
                    <hr className='hrVet'/>
                  </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}
