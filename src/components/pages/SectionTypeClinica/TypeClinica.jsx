import { useRef, useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import "./TypeClinica.css";
import { vet } from "./vetData.js";
import { ButtonUI } from "./../../UI/ButtonUI/ButtonUI";

export const TypeClinica = () => {

  const arr = vet;
  const [useVet, setVet] = useState({});
  const getVet = (e) => {setVet(e);}
  const [useForm, setuseForm] = useState({documento:"",nombre:"",apellido:"",telefono:"",correo:"",sexo:"",especialidad:""})
  const i1  = useRef();
  const i2  = useRef();
  const i3  = useRef();
  const i4  = useRef();
  const i5  = useRef();
  const handleSubmit = (e) => {e.preventDefault(); console.log(useForm);}
  const handleChangeVet = (e) => {
    let tempObj = useForm;
      tempObj.documento = useVet.documento;
    if (e.currentTarget.id === 'i1') {
      tempObj.apellido = e.target.value;
    }else if (e.currentTarget.id === 'i2') {
      tempObj.nombre = e.target.value;
    }else if (e.currentTarget.id === 'i3') {
      tempObj.sexo = e.target.value;
    }else if (e.currentTarget.id === 'i4') {
      tempObj.especialidad = e.target.value;
    }else if (e.currentTarget.id === 'i5') {
      tempObj.correo = e.target.value;
    }
    setuseForm(tempObj);
  }

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
                            <h4>
                              <span>Nombre:       </span>
                              {item.nombre}
                            </h4>

                            <h4>
                              <span>Apellido:     </span>
                              {item.apellido}
                            </h4>

                            <h4>
                              <span>Sexo:         </span>
                              {item.sexo}
                            </h4>

                            <h4>
                              <span>Especialidad: </span>
                              {item.especialidad}
                            </h4>
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
                                <h3>{useVet.documento}</h3>
                              </div>
                          </div> 
                        :
                          (useVet.sexo === "Femenino")
                        ?
                            <div className="imgForm">
                              <img src={pets_images("./veterinarios/perfil-femenino.png")} alt="Femenino" id='imgForm'/>
                              <div className="idSection">
                                <h3>ID: </h3>
                                <h3>{useVet.documento}</h3>
                              </div>
                            </div>
                        :
                          <div className="imgForm">
                            <img src={pets_images("./veterinarios/usuario.png")} alt="" id='imgForm'/>
                            <div className="idSection">
                                <h3>ID: </h3>
                                <h3>{useVet.documento}</h3>
                              </div>
                          </div>
                    }
                    <div className="bottomForm">
                      <div className="labelsVet">
                        <h3>Apellido:     </h3>
                        <h3>Nombre:       </h3>
                        <h3>Sexo:         </h3>
                        <h3>Especialidad: </h3>
                        <h3>Correo: </h3>
                      </div>
                      <div className="inputsVet">
                        <input ref={i1} id="i1" type="text" placeholder={useVet.apellido}      onChange={handleChangeVet}className="iVet"/>
                        <input ref={i2} id="i2" type="text" placeholder={useVet.nombre}        onChange={handleChangeVet}className="iVet"/>
                        <input ref={i3} id="i3" type="text" placeholder={useVet.sexo}          onChange={handleChangeVet}className="iVet"/>
                        <input ref={i4} id="i4" type="text" placeholder={useVet.especialidad}  onChange={handleChangeVet}className="iVet"/>
                        <input ref={i5} id="i4" type="text" placeholder={useVet.correo}        onChange={handleChangeVet}className="iVet"/>
                      </div>
                    </div>
                    <div className="btnSection">
                      <ButtonUI text="Actualizar"  type="submit" style="btn btnActualizar">    </ButtonUI>
                      <ButtonUI text="Deshabilitar" event={""} style="btn btnDeshabilitar">    </ButtonUI>
                    </div>
                  </form>
                : 
                  <div>
                    <h1 id='titleValidation'>Por favor selecciona un veterinario de tu planta!</h1>
                  </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}
