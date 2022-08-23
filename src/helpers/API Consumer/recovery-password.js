import axios from "axios"

export const generateCode = async( email ) => {

    try {
        const resp = await axios({
            url : "http://localhost:8080/api/generarkey",
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
            },
            data : {correo: email}
        })

        return resp;
    } catch (error) {
        console.log( error );
    }

}
