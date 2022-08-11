import axios from "axios";

export const registroClinica = async( clinica ) => {
 
    try {
        const response = await axios({
            url: "http://localhost:8080/api/clinicas",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: clinica
        }).catch( function( error ) {

            if ( error.response ) {
                return { status : error.response.status }
            }

        });
        
        return response;

    } catch (error) {
        console.log( error );
    }
 
}
