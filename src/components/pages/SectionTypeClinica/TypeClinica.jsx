import { useState } from 'react';
import { pets_images } from '../../../helpers/Pets_care_images';
import "./TypeClinica.css";
import { vet } from "./vetData.js"

export const TypeClinica = () => {

  const arr = vet;
  const [useVet, setVet] = useState({});
  
  const getVet = (e) => {
    setVet(e);
    console.log(e);
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
                    <li className={`liVetSpace 
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
                             <img src={pets_images("./veterinarios/perfil-masculino.png")} alt="" id='imgVet'/>
                          }
                          <div className='liVetA'>
                            <h4>
                              <span>Nombre: </span>
                              {item.nombre}
                            </h4>

                            <h4>
                              <span>Apellido: </span>
                              {item.apellido}
                            </h4>

                            <h4>
                              <span>Sexo: </span>
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
                (useVet.documento !== "")
                ? 
                  <form action="">
                    {
                        (useVet.sexo === "Masculino")
                        ?
                            <img src={pets_images("./veterinarios/perfil-masculino.png")} alt="Masculino" id='imgVet'/>
                        :
                          (useVet.sexo === "Femenino")
                        ?
                            <img src={pets_images("./veterinarios/perfil-femenino.png")} alt="Femenino" id='imgVet'/>
                        :
                          <img src={pets_images("./veterinarios/perfil-masculino.png")} alt="" id='imgVet'/>
                    }
                    <input type="text" value={useVet.documento}/>
                    <input type="text" value={useVet.apellido}/>
                    <input type="text" value={useVet.nombre}/>
                    <input type="text" value={useVet.sexo}/>
                    <input type="text" value={useVet.especialidad}/>
                  </form>
                : 
                  <div>

                  </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}
