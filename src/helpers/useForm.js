import { useState } from "react"
import { putVeterinario } from "./API Consumer/useVeterinariosConsumer";

export const useForm = (initialForm , validateForm , token) => {

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
        console.log(e.target.classList);
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            console.log(form);

            if (e.target.classList.value === "formVet  animate__animated animate__fadeIn") {

                // putVeterinario(form,form.documento,token).then( data => console.log(data));

            }

            setTimeout(() => {
                setResponse(true);
                setLoading(false);
            } , 3000);
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
