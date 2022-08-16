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

        const peticiones = respuesta.data.filter( cli => cli.estadoCli === 3 );

        return peticiones;
        
    } catch (error) {
        console.log( error );
    }

}

export const aceptarPeticion = async ( clinica, nit, access_token ) => {

    try {
        const response = await axios({
            url: "http://localhost:8080/api/clinicas/"+nit,
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data: clinica
        }).catch( function( error ) {

            if ( error.response ) {
                console.log( error );
                return { status : error.response.status }
            }

        });
        console.log( response );
        return response;
    } catch (error) {
        console.log( error );
    }

}
