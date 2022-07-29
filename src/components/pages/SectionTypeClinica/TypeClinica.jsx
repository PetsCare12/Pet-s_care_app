import { useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import { vet } from "./vetData.js";
import { useForm } from '../../../helpers/useForm';
import { ButtonUI } from "./../../UI/ButtonUI/ButtonUI";
import { Loader } from '../../UI/Loader/Loader';
import "./TypeClinica.css";

export const TypeClinica = () => {

  const arr = vet;
  const [useVet, setVet] = useState({});
  const getVet = (e) => {setVet(e);}

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

         if (!form.apellido.trim()) {errors.apellido = "El campo 'Apellido:' es requerido!";}
    else if (!form.nombre.trim()) {errors.nombre = "El campo 'Nombre:' es requerido!";}
    else if (!form.sexo.trim()) {errors.sexo = "El campo 'Sexo:' es requerido!";}
    else if (!form.especialidad.trim()) {errors.especialidad = "EL campo 'Especialidad:' es requerido!";}
    else if (!form.telefono.trim()) {errors.telefono = "El campo 'Telefono:' es requerido!";}
    else if (!form.correo.trim()) {errors.correo = "El campo 'Correo:' es requerido!";}
    else if (!regexName.test(form.apellido.trim())) {errors.apellido = "El campo 'Apellido:' solo acepta letras!"}
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
          <div className='titleClin'>
            <h1>Administra tu Clinica</h1>
          </div>
          <div className='st3'>
            <div className='st4'>
              <h1>Veterinarios</h1>
              <ul>
                {
                  arr.map((item) =>(
                    <li className={
                      `liVetSpace 
                        ${ (item.sexo === "Femenino")
                        ? 'liVetSpaceFem' 
                        : (item.sexo === "Masculino")
                        ? 'liVetSpaceMas'
                        : 'liVetSpaceDef'
                    }`
                      }>
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
                            <h4><span>Sexo:</span>                {item.sexo}</h4>
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
                              <div className="idSection">
                                <h3>ID: </h3>
                                <h3>{form.documento = useVet.documento}</h3>
                              </div>
                          </div> 
                        :
                          (useVet.sexo === "Femenino")
                        ?
                            <div className="imgForm">
                              <img src={pets_images("./veterinarios/perfil-femenino.png")} alt="Femenino" id='imgForm'/>
                              <div className="idSection">
                                <h3>ID: </h3>
                                <h3>{form.documento = useVet.documento}</h3>
                              </div>
                            </div>
                        :
                          <div className="imgForm">
                            <img src={pets_images("./veterinarios/usuario.png")} alt="" id='imgForm'/>
                            <div className="idSection">
                                <h3>ID: </h3>
                                <h3>{form.documento = useVet.documento}</h3>
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
                      {response ? <p>Simulacion de Envio terminada</p> : <p></p>}
                    </div>
                    <div className="bottomForm">
                      <div className="labelsVet">
                        <h3>Apellido:     </h3>
                        <h3>Nombre:       </h3>
                        <h3>Sexo:         </h3>
                        <h3>Especialidad: </h3>
                        <h3>Correo:       </h3>
                        <h3>Telefono:     </h3>
                      </div>
                      <div className="inputsVet">
                        <input 
                        name='apellido' type="text" 
                        placeholder={useVet.apellido} onChange={handleChangeVet}
                        value={form.apellido} onBlur={handleBlur}
                        required className={`iVet ${(errors.apellido) ? 'iWarning' : 'iVal'}`}></input>

                        <input 
                        name='nombre' type="text" 
                        placeholder={useVet.nombre} onChange={handleChangeVet}
                        value={form.nombre} onBlur={handleBlur}
                        required className={`iVet ${(errors.name) ? 'iWarning' : 'iVal'}`}/>

                        <input 
                        name='sexo' type="text" 
                        placeholder={useVet.sexo} onChange={handleChangeVet}
                        value={form.sexo} onBlur={handleBlur}
                        equired className={`iVet ${(errors.sexo) ? 'iWarning' : 'iVal'}`}/>

                        <input 
                        name='especialidad' type="text" 
                        placeholder={useVet.especialidad} onChange={handleChangeVet}
                        value={form.especialidad} onBlur={handleBlur}
                        required className={`iVet ${(errors.especialidad) ? 'iWarning' : 'iVal'}`}/>

                        <input 
                        name='correo'  type="email" 
                        placeholder={useVet.correo} onChange={handleChangeVet}
                        value={form.correo} onBlur={handleBlur}
                        required className={`iVet ${(errors.correo) ? 'iWarning' : 'iVal'}`}/>

                        <input 
                        name='telefono' type="text" 
                        placeholder={useVet.telefono} onChange={handleChangeVet}
                        value={form.telefono} onBlur={handleBlur}
                        required className={`iVet ${(errors.telefono) ? 'iWarning' : 'iVal'}`}/>

                      </div>
                    </div>
                    <div className="btnSection">
                      <ButtonUI text="Actualizar"  type="submit" style="btn btnActualizar">    </ButtonUI>
                      <ButtonUI text="Deshabilitar" event={""} style="btn btnDeshabilitar">    </ButtonUI>
                    </div>
                  </form>
                : 
                  <div id='titleValidation'>
                    <h1>Por favor selecciona un veterinario de tu planta!</h1>
                  </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}
