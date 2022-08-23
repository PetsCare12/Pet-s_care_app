import axios from "axios"

export const generateCode = async( email ) => {
console.log( email );
    try {
        const resp = await axios({
            url : "http://localhost:8080/api/generarkey",
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
            },
            data : {correo: email}
        }).catch( function( error ) {

            if (error.response) {
                return { status : error.response.status};
            } 
        });
        console.log( resp );
        return resp;
    } catch (error) {
        console.log( error );
    }

}
