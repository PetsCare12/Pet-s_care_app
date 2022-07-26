import React from 'react'
import { pets_images } from '../../../helpers/Pets_care_images';
import "./TypeClinica.css";
import { vet } from "./vetData.js"

export const TypeClinica = () => {

  const arr = vet;
  console.log(arr);
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
                    : 'liVetSpaceInclusive'}`
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
                            <img src={pets_images("./veterinarios/inclusion.png")} alt="Inclusivo" id='imgVet'/>
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
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='st5'>
            </div>
          </div>
      </div>
    </div>
  )
}
