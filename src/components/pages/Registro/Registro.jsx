import { Login } from '../Login/Login'

import './RegistroStyle.css'
import { useState } from 'react';
import { RegistroStep1 } from './RegistroStep1';
import { RegistroStep2 } from './RegistroStep2';


export const Registro = () => {

    const [steps, setSteps] = useState(1);

    return (
      
        <div>


            {
                ( steps == 1 )
                ? <RegistroStep1 step_change={setSteps}/>
                : <RegistroStep2 steps={steps} step_change={setSteps}/>
            }
            <Login />
        </div>
 
    )
}