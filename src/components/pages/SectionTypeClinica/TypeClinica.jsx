import { useEffect, useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import { useForm } from '../../../helpers/useForm';
import { ButtonUI } from "./../../UI/ButtonUI/ButtonUI";
import { useModal } from '../../../helpers/useModal';
import { ModalRegisterVet } from './ModalRegisterVet';
import { useSendImage } from '../../../helpers/Cloudinary_Images/useSendImages';
import { setStateVeterinario, getVeterinarioById, getVeterinarios } from '../../../helpers/API Consumer/useVeterinariosConsumer';
import { SimpleModal } from "../../layout/Modals/SimpleModal";
import { MdOutlineCancel } from 'react-icons/md';
import { getClinicaById } from '../../../helpers/API Consumer/useClinicasConsumer';
import "./TypeClinica.css";
import { NoAutenticado } from '../NoAutenticado/NoAutenticado';

export const TypeClinica = () => {
  const tokenClinic = localStorage.getItem('token');
  const [tokenUser, setTokenUser] = useState(JSON.parse(localStorage.getItem("usuario")));
  const [nitClinic, setnitClinic] = useState(tokenUser.nit);
  const [nameClinic, setnameClinic] = useState(tokenClinic.nombre);
  const [clinicInfo, setclinicInfo] = useState({});
  const [arrState, setarrState] = useState(true);
  const [arr, setarr] = useState([]);
  const [img, setimg] = useState("");
  const {myWidgetVeter,urlImage} = useSendImage();
  const [useVet, setVet] = useState({});
  const [isOpenModal1,openModal1,closeModal1] = useModal(false);
  const [requestState, setrequestState] = useState(true);
  const [modalRespUpdateVetState, setmodalRespUpdateVetState] = useState(false);
  const [vetState, setvetState] = useState("");
  
 

  useEffect(() => {

    if ( !!tokenUser ) {
      getClinicaById( tokenUser.id ).then( data => {
        if ( data !== {} ) {
          setclinicInfo(data.data);
          setnameClinic(clinicInfo.nombre);
          setnitClinic(clinicInfo.nit)
        }
      });
    }
    
  }, [tokenUser]);

  useEffect(() => {
    console.log(arrState);
    if (arrState === true) {
      if (nitClinic !== "") {
        getVeterinarios(nitClinic).then(data => {
          if ( data.status === 400 ) {
            console.log("Error");
            setarrState(false);
            setarrState(true);
          }else{
            setarr(data);
          }
        });
      }
    }
  }, [arrState]);

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
    else if (/^\d{10,10}$/.test(form.telefono)) { errors.telefono = "Telefono erroneo" }

    else if (!form.sexovt === "none") {errors.sexovt = "Sexo requerido"}
    else if (!form.especialidad.trim()) { errors.especialidad = "Especialidad erronea" }

    else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.especialidad)) { errors.especialidad = "Especialidad erronea" }

    else if (!form.correo.trim()){ errors.correo = "Correo erroneo" }
    else if (!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(form.correo)) { errors.correo = "Correo erroneo" }

    else if (!form.imagenVete.trim()) {form.imagenVete = img}
    
    return errors;  
  }

  const {form,errors,loading,response,estatusResponse,handleChangeVet,handleBlur,handleSubmit} = useForm(initialForm,validationsForm,tokenClinic);

  useEffect(() => {
    setarrState(!arrState);
    setarrState(true);
  }, [loading])
  
  const disableVet = (e) => {
    setStateVeterinario(e.documento,2,tokenClinic).then( data => {if (data === "El estado del Veterinario Actualizado con exito") {
      setarrState(!arrState);
      setarrState(true);
      setvetState("Deshabilitado con exito!");
      setmodalRespUpdateVetState(true);
    }else{
      setvetState("No se pudo Deshabilitar!");
      setmodalRespUpdateVetState(true);
    }});
  };

  const activeVet = (e) => {
    setStateVeterinario(e.documento,1,tokenClinic).then( data => {if (data === "El estado del Veterinario Actualizado con exito") {
      setarrState(!arrState);
      setarrState(true);
      setvetState("Activado con exito!");
      setmodalRespUpdateVetState(true);
    }else{
      setvetState("No se pudo Activar!");
      setmodalRespUpdateVetState(true);
    }});
  }

  const closeSimpleModal = () => {setmodalRespUpdateVetState(false);}

  return (
    <div className='st1 animate__animated animate__fadeIn'>
      <div className='st2'>
          <div className="title-container">
            <div className='titles'>
              <h1 id='titleP1'>{"Pet's Care"}</h1>
              <spam id='titleP2'>{"Para Veterinarias †"}</spam>
            </div>
            <div id='titleP3'>
              <h1>{nameClinic}</h1>
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
              {
                    arr.length === 0

                      ? 
                        <li className="liVetSpace animate__animated animate__backInUp notFound"><h2>Registra tu primer veterinario</h2></li>

                      : 
                        (requestState 
                          ? 
                            arr.map((item) =>(
                              <li className="liVetSpace animate__animated animate__backInUp">
                                <div className='liVet'>
                                    <div className='img_li_vet'>
                                      <img src={item.imagenVete} alt="" id='imgVet'/>
                                    </div>
                                    <div className='liVetA'>
                                      <h4><span>ID:</span> {item.documento}</h4>
                                      <h4>{item.nombre} {item.apellidos}</h4>
                                      <h4>{item.especialidad}</h4>
                                      {
                                          item.estadoVt === 1
                                        ? 
                                          <h4><span className='active'>{" Activo"}</span></h4>
                                        :
                                          <h4><span className='inactive'>{" Inactivo"}</span></h4>
                                      }
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
                        )
                  }
              </ul>
            </div>
            
            <div className='st5'>
              {
                (JSON.stringify(useVet) !== '{}')
                ? 
                  <form onSubmit={handleSubmit} className='formVet  animate__animated animate__fadeIn'>
                      <div className="imgForm  animate__animated animate__fadeIn">
                        <div className="imagen_container">
                          <div title='Sube una Imgen!' className="img_cont_vet" onClick={showWidget}>
                              <img src={form.imagenVete = img} alt="" id='imgForm'/>
                          </div>
                      </div>
                      <div className="imgForm  animate__animated animate__fadeIn">
                          <div className='liVetA'>
                              <h1>{useVet.especialidad}</h1>
                              <hr className='hrVet'/>
                              <h2>{useVet.nombre} {useVet.apellidos}</h2>
                              {
                                  useVet.estadoVt === 1
                                ? 
                                  <h3>Estado:<span className='active'>{" Activo"}</span></h3>
                                :
                                  <h3>Estado:<span className='inactive'>{" Inactivo"}</span></h3>
                              }
                              <h4>ID: {form.documento = useVet.documento}</h4>
                          </div>
                          </div>
                      </div>
                      <div>
                        {loading && <div id='login-spin-clinic' className='spiner'></div>}
                        {response && <h4 id='succes  animate__animated animate__fadeIn'>{estatusResponse}</h4>}
                      </div>
                      
                    <div className="bottomForm  animate__animated animate__fadeIn">
                      <div className="inputsVet">

                        <div className="input-container">
                          <input 
                          name='nombre' 
                          type="text"
                          placeholder=' Nombre... ' 
                          onChange={handleChangeVet}
                          value={form.nombre} 
                          onBlur={handleBlur}
                          required 
                          id='nombre'
                          className='input'
                          />
                          <div class="cut"></div>
                          <label for="nombre" className="placeholder"> {useVet.nombre} </label>
                        </div>
                        {errors.nombre && <p id='warn-login'>{errors.nombre}</p>}

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
                          className='input'                          
                          />
                          <div class="cut"></div>
                          <label for="apellido" className="placeholder"> {useVet.apellidos} </label>
                        </div>
                        {errors.apellidos && <p id='warn-login'>{errors.apellidos}</p>}

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
                          className='input'
                          />
                          <div class="cut"></div>
                          <label for="telefono" className="placeholder"> {useVet.telefono} </label>
                        </div>
                        {errors.telefono && <p id='warn-login'>{errors.telefono}</p>}

                        <select name="sexovt" id="sexovt" className='input' onChange={handleChangeVet} value={form.sexovt} onBlur={handleBlur}>
                          <option value="none">Seleccione el sexo</option>
                          <option value="hombre">Hombre</option>
                          <option value="mujer">Mujer</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.sexo && <p id='warn-login'>{errors.sexovt}</p>}

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
                          className='input'
                          />
                          <div class="cut"></div>
                          <label for="especialidad" className="placeholder"> {useVet.especialidad} </label>
                        </div>
                        {errors.especialidad && <p id='warn-login'>{errors.especialidad}</p>}

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
                          className='input'
                          />
                          <div class="cut"></div>
                          <label for="correo" className="placeholder"> {useVet.correo} </label>
                        </div>
                        {errors.correo && <p id='warn-login'>{errors.correo}</p>}
                      </div>
                    </div>
                    <div className="btnSection">
                      {
                          useVet.estadoVt !== 1
                        ? 
                          <div className="btnSection">
                            <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
                            <ButtonUI text="Activar" event={() => activeVet(useVet)} type="button" style="submit"></ButtonUI>
                          </div>
                        : 
                          <div className="btnSection">
                            <ButtonUI text="Actualizar"  type="submit" style="submit"></ButtonUI>
                            <ButtonUI text="Deshabilitar" event={() => disableVet(useVet)} type="button" style="submit"></ButtonUI>
                          </div>
                      }
                      {
                          modalRespUpdateVetState && <SimpleModal>
                              <div className='modal_active_inactive animate__animated animate__fadeIn'>
                              <div id='MdOutlineCancelVet' onClick={closeSimpleModal} className='closemodal_x'><MdOutlineCancel /></div>
                                <h2 className='modalactive_text'>{vetState}</h2>
                              </div>
                          </SimpleModal>
                      }
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
      {
        ( !tokenClinic || !tokenUser ) &&
        <NoAutenticado txt={"Al parecer no has iniciado sesión, te invitamos a hacerlo."} />
      }
    </div>
  )
}
