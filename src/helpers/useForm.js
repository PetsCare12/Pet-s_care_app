import { useState } from "react"
import { putVeterinario, setVeterinario } from "./API Consumer/useVeterinariosConsumer";

export const useForm = (initialForm , validateForm , token , nit) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [estatusResponse, setestatusResponse] = useState("");

    const handleChangeVet = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name]:value});
    }

    const handleBlur = (e) => {
        handleChangeVet(e);
        setErrors(validateForm(form));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            console.log(form);

            if (e.target.classList.value === "formVet  animate__animated animate__fadeIn") {

                putVeterinario(form,form.documento,token).then( data =>  {

                    if (data === "Veterinario Actualizado con exito") {

                        setestatusResponse("Actualizacion Exitosa!");

                        setLoading(false);
                        setResponse(true);
                        
                        setTimeout(() => {
                            setResponse(false);
                        } , 7000);

                    }else{

                        setestatusResponse("Actualizacion Fallida!");

                        setLoading(false);
                        
                        setTimeout(() => {
                            setResponse(true);
                            setResponse(false);
                        } , 7000);

                    }

                });
               

            }


        }else{

            return;
            
        }
    }

    return {
        form,errors,
        loading,response,estatusResponse,
        handleChangeVet,handleBlur,handleSubmit
    }
}
