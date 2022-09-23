import axios from "axios";

const URL = "https://petscareapi.uc.r.appspot.com/api";

export const createAgenda = async ( data_, idUser, idVet ) => {

    const access_token = localStorage.getItem("token");

    try {
        
        const resp = await axios({
            url : URL+"/usuario/"+ idUser +"/veterinario/"+ idVet +"/agendas",
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : data_
        }).catch( function( error ) {

            if ( error.response ) {
                console.log( error );
                return { status : error.response.status }
            }

        });
        console.log( resp );

        return resp;

    } catch (error) {
        console.log( error );
    }

}

export const getAgendas = async ( id ) => {

    const response = await axios(`${URL}/usuario/${id}/agendas`)

    return response;

};

export const getAgendasVeterinario = async ( id ) => {
    const response = await axios(`${URL}/veterinario/${id}/agendas`)

    return response;
}

export const cancelarAgenda = async (codigo) => {

    const access_token = localStorage.getItem("token");

    try {
        
        const resp = await axios({
            url : URL+"/agendas/"+codigo,
            method : 'DELETE',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
        }).catch( function( error ) {

            if ( error.response ) {
                console.log( error );
                return { status : error.response.status }
            }

        });
        console.log( resp );

        return resp;

    } catch (error) {
        console.log( error );
    }

}