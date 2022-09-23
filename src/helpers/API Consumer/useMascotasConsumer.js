import axios from 'axios';

const URL = "https://petscareapi.uc.r.appspot.com/api";

export const actualizarMascota = async ( update, codigoMc ) => {

    const { id } = JSON.parse(localStorage.getItem("usuario"));
    const token = localStorage.getItem("token");

    try {
        const response = await axios({
            url: URL+`/usuario/${id}/mascota/${codigoMc}`,
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+token,
            },
            data: update
        }).catch( function( error ) {

            if ( error.response ) {
                console.log( error );
                return { status : error.response.status }
            }

        });
        
        return response;
    } catch (error) {
        console.log( error );
    }

}

export const getMascotaEspecifica = async( id, codigoMc) => {

    try {

        const response = await axios(URL+`/usuario/${id}/mascota/${codigoMc}`);

        return response;
        
    } catch (error) {
        console.log( error );
    }

}

