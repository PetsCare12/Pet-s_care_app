import { useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import { vet } from "./vetData.js";
import { useForm } from '../../../helpers/useForm';
import { ButtonUI } from "./../../UI/ButtonUI/ButtonUI";
import { Loader } from '../../UI/Loader/Loader';
import "./TypeClinica.css";
import { useModal } from '../../../helpers/useModal';
import { Modal } from '../../UI/Modals/Modal';

export const TypeClinica = () => {

  const arr = vet;
  const [useVet, setVet] = useState({});
  const getVet = (e) => {setVet(e);}

  const disableVet = (e) => {};

  // const [isOpenModal1,openModal1,closeModal1] = useModal(false);
  const initialForm = {
    documento: "",
    apellido: "",nombre: "",
    sexo: "",especialidad: "",
    telefono: "",correo: ""
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
          </div>
          <div className='st3'>
            <div className='st4'>
              <h1 className='titleP2 -margin'>Veterinarios</h1>
              <hr className='hrVet'/>
                            {/* <ButtonUI text="Registrar" type="button" style="btn btnRes" event={openModal1}></ButtonUI>
                            <Modal isOpen={isOpenModal1} closeModal={closeModal1}><p>Lo abrio perro hijuepputa.</p></Modal>
                            <div className="search">
                              <input type="text" className="iVet iSearch" placeholder='ID del Veterinario...'/>
                              <ButtonUI text="Buscar" type="button" style="btn btnSear" event={""}></ButtonUI>
                            </div> */}
              <ul>
                {
                  arr.map((item) =>(
                    <li className="liVetSpace">
                        <div className='liVet'>
                          {
                            (item.sexo === "Masculino")
                            ?
                              <img src={pets_images("./veterinarios/perfil-masculino.png")} alt="Masculino" id='imgVet'/>
                            :
                            (item.sexo === "Femenino")
                            ?
                              <img src={pets_images("./veterinarios/perfil-femenino.png")} alt="Femenino" id='imgVet'/>
                            :
                             <img src={pets_images("./veterinarios/usuario.png")} alt="" id='imgVet'/>
                          }
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
                }
              </ul>
            </div>

            <div className='st5'>
              {
                (JSON.stringify(useVet) !== '{}')
                ? 
                  <form onSubmit={handleSubmit} className='formVet'>
                    {
                        (useVet.sexo === "Masculino")
                        ?
                          <div className="imgForm">
                            <img src={pets_images("./veterinarios/perfil-masculino.png")} alt="Masculino" id='imgForm'/>
                              <div className='liVetA'>
                                <h1>{useVet.especialidad}</h1>
                                <hr className='hrVet'/>
                                <h2>{useVet.nombre} {useVet.apellido}</h2>
                                <h4>ID: {useVet.documento}</h4>
                              </div>
                          </div> 
                        :
                          (useVet.sexo === "Femenino")
                        ?
                            <div className="imgForm">
                              <img src={pets_images("./veterinarios/perfil-femenino.png")} alt="Femenino" id='imgForm'/>
                              <div className="imgForm">
                                <div className='liVetA'>
                                  <h1>{useVet.especialidad}</h1>
                                  <hr className='hrVet'/>
                                  <h2>{useVet.nombre} {useVet.apellido}</h2>
                                  <h4>ID: {useVet.documento}</h4>
                                </div>
                              </div>
                            </div>
                        :
                          <div className="imgForm">
                            <img src={pets_images("./veterinarios/usuario.png")} alt="" id='imgForm'/>
                            <div className="imgForm">
                              <div className='liVetA'>
                                  <h1>{useVet.especialidad}</h1>
                                  <hr className='hrVet'/>
                                  <h2>{useVet.nombre} {useVet.apellido}</h2>
                                  <h4>ID: {useVet.documento}</h4>
                              </div>
                              </div>
                          </div>
                    }
                    <div className="messages">
                      {errors.apellido &&             <p id='warningP'>{errors.apellido}</p>}
                      {errors.nombre &&               <p id='warningP'>{errors.nombre}</p>}
                      {errors.sexo &&                 <p id='warningP'>{errors.sexo}</p>}
                      {errors.especialidad &&         <p id='warningP'>{errors.especialidad}</p>}
                      {errors.correo &&               <p id='warningP'>{errors.correo}</p>}
                      {errors.telefono &&             <p id='warningP'>{errors.telefono}</p>}
                      {loading && <Loader></Loader>}
                      {response ? <p id='succesP'>Simulacion de Envio terminada!</p> : <p></p>}
                    </div>
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
                      </div>
                    </div>
                    <div className="btnSection">
                      <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
                      <ButtonUI text="Deshabilitar" event={disableVet} type="button" style="submit"></ButtonUI>
                    </div>
                  </form>
                : 
                  <div id='titleValidation'>
                    <h1 id='titleP2-margin'>Por favor selecciona un veterinario de tu planta!</h1>
                  </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}
