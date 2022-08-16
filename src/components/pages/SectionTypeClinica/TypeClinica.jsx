import { useEffect, useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import { useForm } from '../../../helpers/useForm';
import { ButtonUI } from "./../../UI/ButtonUI/ButtonUI";
import { useModal } from '../../../helpers/useModal';
import { ModalRegisterVet } from './ModalRegisterVet';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { getVeterinarioById, getVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import "./TypeClinica.css";

export const TypeClinica = () => {

  // let nitClinic = 111;
  // let tokenClinic = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxMTEiLCJzdWIiOiJzYWx1ZGNhbmluYUB2ZXRlcmluYXJpYXMuY29tIiwiYXVkIjoiW1JPTEVfQ0xJTklDQV0iLCJpYXQiOjE2NjAxNzk4ODIsImV4cCI6MTY2MDc4NDY4MX0.pBUjcGe1MUCv1AgUfDwpPoQcFb6lE4Q2V4D0BTlAf2NydWBJaF0t0p8tA9CNH5KPAvkclHS5My_ej2v3_XIl0A"

  let nitClinic = 1010;
  let tokenClinic =  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWx1ZGNhbmluYUB2ZXRlcmluYXJpYXMuY29tIiwiYXVkIjoiW1JPTEVfQ0xJTklDQV0iLCJlc3RhZG8iOjEsImlkIjoxMDEwLCJleHAiOjE2NjA5MzE3MTAsImlhdCI6MTY2MDMyNjkxMH0.eQPuQYTPp4NQXTCea-5hiCuBf5AcRgD7h46egTe8ZB8Bg9_L9nilCVm_M3lD0GOETgC0xtr_07FZ37fTVo7U-g";

  const [arrState, setarrState] = useState(true);
  const [arr, setarr] = useState([]);
  const [img, setimg] = useState("");
  const {myWidgetVeter,urlImage} = useSendImage();
  const [useVet, setVet] = useState({});
  const [isOpenModal1,openModal1,closeModal1] = useModal(false);
  const [requestState, setrequestState] = useState(true);

  const getVeterId = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        getVeterinarioById(e.target.value).then( data => {
          if (data === 404) {
            setrequestState(false);
          }else{
            setarr([data])
            setrequestState(true);
          }
        });
        setarrState(false);
      }
    }else if (e.target.value === "") {
      setrequestState(true);
      setarrState(true);
    }   
  }

  useEffect(() => {
    if (arrState === true) {
      getVeterinarios(nitClinic).then( data => setarr(data));
    }
  }, [arrState]);

  const getVet = (e) => {
    setimg(e.imagenVete);
    setVet(e);
    form.password = e.password;
  }

  useEffect(() => {
    setimg(urlImage);
  }, [urlImage])
  
  const showWidget = () => {myWidgetVeter.open();};

  const initialForm = {
    documento: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    sexovt: "none",
    especialidad: "",
    imagenVete: "",
    correo: "",
    estadoVt: 1,
    password : ""
  };

  const validationsForm = (form) => {
    let errors = {};

         if (!form.nombre.trim()) { errors.nombre = "Nombres erroneos" }
    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.nombre)) { errors.nombre = "Nombres erroneos" }

    else if (!form.apellidos.trim()) { errors.apellidos = "Apellidos erroneos" }
    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.apellidos)) { errors.apellidos = "Apellidos erroneos" }

    else if (!form.telefono.trim()) { errors.telefono = "Telefono erroneo" }
    else if (!/^\d{10,10}$/.test(form.telefono)) { errors.telefono = "Telefono erroneo" }

    else if (!form.sexovt === "none") {errors.sexovt = "Sexo requerido"}
    else if (!form.especialidad.trim() || /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.especialidad)) { errors.especialidad = "Especialidad erronea" }

    else if (!form.correo.trim()){ errors.correo = "Correo erroneo" }
    else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(form.correo)) { errors.correo = "Correo erroneo" }

    else if (!form.imagenVete.trim()) {form.imagenVete = img}
    
    return errors;  
  }

  const {form,errors,loading,response,handleChangeVet,handleBlur,handleSubmit} = useForm(initialForm,validationsForm,tokenClinic);
  
  const disableVet = (e) => {};

  return (
    <div className='st1 animate__animated animate__fadeIn'>
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
                    <ModalRegisterVet isOpen={isOpenModal1} closeModal={closeModal1} nit={nitClinic} token={tokenClinic} className="animate__animated animated_fadeIn" />
                    <div className="search">
                      <input type="text" className="input iSearch" placeholder='ID del Veterinario...' onKeyDown={getVeterId}/>
                      <img src={pets_images('./veterinarios/lupa.png')} alt="" id='searchIcon' />
                      <ButtonUI text="Registrar" type="button" style="regs submit" event={openModal1}></ButtonUI>
                    </div>
              <ul>
                {requestState ? 
                arr.map((item) =>(
                  <li className="liVetSpace animate__animated animate__backInUp">
                    <div className='liVet'>
                        <div className='img_li_vet'>
                          <img src={item.imagenVete} alt="" id='imgVet'/>
                        </div>
                        <div className='liVetA'>
                          <h4><span>Nombre:</span>              {item.nombre}</h4>
                          <h4><span>Apellido:</span>         {item.apellidos}</h4>
                          <h4><span>ID:</span>               {item.documento}</h4>
                          <h4><span>Especialidad:</span>  {item.especialidad}</h4>
                        </div>
                      </div> 
                      <div className='idc'>
                        <a onClick={() => getVet(item)} href>
                          <img src={pets_images('./veterinarios/proximo.png')} alt="" id='imgLi'/>
                        </a>
                      </div>
                  </li>
                ))
                : 
                <li className="liVetSpace animate__animated animate__backInUp notFound"><h2>Veterinario no encontrado</h2></li>
              }
              </ul>
            </div>
            
            <div className='st5'>
              {
                (JSON.stringify(useVet) !== '{}')
                ? 
                  <form onSubmit={handleSubmit} className='formVet  animate__animated animate__fadeIn'>

                        {response ? <p id='succesP  animate__animated animate__fadeIn'>Simulacion de Envio terminada!</p> : <p></p>}


                      <div className="imgForm  animate__animated animate__fadeIn">
                        <div className="imagen_container">
                          <div className="img_cont_vet">
                              <img src={form.imagenVete = img} alt="" id='imgForm'/>
                              <a onClick={showWidget} className="a_uploadImage">
                                <img src={pets_images('./veterinarios/subir.png')} alt="Subir Imagen" className='upload_Image'/>
                              </a>
                          </div>
                      </div>
                      <div className="imgForm  animate__animated animate__fadeIn">
                          <div className='liVetA'>
                              <h1>{useVet.especialidad}</h1>
                              <hr className='hrVet'/>
                              <h2>{useVet.nombre} {useVet.apellidos}</h2>
                              <h4>ID: {form.documento = useVet.documento}</h4>
                          </div>
                          </div>
                      </div>

                      <div>{loading && <div id='login-spin-clinic' className='spiner'></div>}</div>
                      
                    <div className="bottomForm  animate__animated animate__fadeIn">
                      <div className="inputsVet">

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

                        <div className='input-container'>
                          <input 
                          name='apellidos' 
                          type="text" 
                          placeholder=' Apellido... '
                          onChange={handleChangeVet}
                          value={form.apellidos} 
                          onBlur={handleBlur}
                          required 
                          id='apellido'
                          className={`input ${(errors.apellidos) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="apellido" class="placeholder"> {useVet.apellidos} </label>
                        </div>
                        {errors.apellidos &&             <p id='warningP'>{errors.apellidos}</p>}

                        <div className="input-container">
                          <input 
                          name='telefono' 
                          type="text" 
                          placeholder=' Telefono... ' 
                          onChange={handleChangeVet}
                          value={form.telefono} 
                          onBlur={handleBlur}
                          required 
                          id='telefono'
                          className={`input ${(errors.telefono) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="telefono" class="placeholder"> {useVet.telefono} </label>
                        </div>
                        {errors.telefono &&             <p id='warningP'>{errors.telefono}</p>}

                        <select name="sexovt" id="sexovt" className='input' onChange={handleChangeVet} value={form.sexovt} onBlur={handleBlur}>
                          <option value="none">Seleccione el sexo</option>
                          <option value="hombre">Hombre</option>
                          <option value="mujer">Mujer</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.sexo &&                 <p id='warningP'>{errors.sexovt}</p>}

                        <div className="input-container">
                          <input 
                          name='especialidad' 
                          type="text" 
                          placeholder=' Especialidad... '
                          onChange={handleChangeVet}
                          value={form.especialidad} 
                          onBlur={handleBlur}
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
                          name='correo'  
                          type="email" 
                          placeholder=' Correo... ' 
                          onChange={handleChangeVet}
                          value={form.correo} 
                          onBlur={handleBlur}
                          required 
                          id='correo'
                          className={`input ${(errors.correo) ? 'iWarning' : 'input'}`}
                          />
                          <div class="cut"></div>
                          <label for="correo" className="placeholder"> {useVet.correo} </label>
                        </div>
                        {errors.correo &&               <p id='warningP'>{errors.correo}</p>}
                      </div>
                    </div>
                    <div className="btnSection">
                      <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
                      <ButtonUI text="Deshabilitar" event={disableVet} type="button" style="submit"></ButtonUI>
                    </div>
                  </form>
                : 
                  <div id='titleValidation'>
                    <img src="https://www.gifsanimados.org/data/media/202/perro-imagen-animada-0387.gif" border="0" alt="perro-imagen-animada-0387" className='imgWait  animate__animated animate__fadeIn'/>
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
