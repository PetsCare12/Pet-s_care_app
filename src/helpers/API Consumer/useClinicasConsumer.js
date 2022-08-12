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

export const getPeticionesClinicas = async() => {

    try {
        const respuesta = await axios.get("http://localhost:8080/api/clinicas");

        const peticiones = respuesta.data.filter( cli => cli.estdo_cli === 3 );

        return peticiones;
        
    } catch (error) {
        console.log( error );
    }

}
