import { useState } from "react"

export const useForm = (initialForm , validateForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

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

            // Validacion contenido de errores sea inexsistente
        if (Object.keys(errors).length === 0) {
            // Envio de formulario de actualizacion
            setLoading(true);
            // Simulacion de Envio de objeto construido
            console.log(form);
            setTimeout(() => {
                setResponse(true);
                setLoading(false);
            } , 2000);
            setTimeout(() => {
                setResponse(false);
            } , 7000);
        }else{
            return;
        }
    }

    return {
        form,errors,
        loading,response,
        handleChangeVet,handleBlur,handleSubmit
    }
}
