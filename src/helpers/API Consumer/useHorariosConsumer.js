import axios from "axios";
const url = "http://localhost:8080/api";

// Horarios Clinica Veterinaria
export const getHorarioClinica = async( nit ) => {

    try {

        const sendRequest = await axios.get(`${url}/clinica/${nit}/horarios`);
        
        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};

export const setHorarioClinica = async( horario , nit , access_token ) => {


    try {
        
        const sendRequest = await axios({
            url : `${url}/clinica/${nit}/horarios`,
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : horario
            
        }).catch( function( error ) {

            if ( error.response ) {
                return error.response;
            }

        });
                
        return console.log(sendRequest.data);

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};
// Horarios Veterinarios

export const getHorarioVeterinario = async( id ) => {

    try {

        const sendRequest = await axios.get(`${url}/veterinario/${id}/horarios`);
        
        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};

export const setHorarioVeterinario = async( horario , id , access_token ) => {


    try {
        
        const sendRequest = await axios({
            url : `${url}/veterinario/${id}/horarios`,
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : horario
            
        }).catch( function( error ) {

            if ( error.response ) {
                return error.response;
            }

        });
                
        return console.log(sendRequest.data);

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};

// Acciones en común veterinarios - clinicas
export const putHorarioGeneral= async( horario , id , access_token ) => {


    try {

        const sendRequest = await axios({
            url : `${url}/clinica/${id}/horarios`,
            method : 'PUT',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : horario
            
        }).catch( function( error ) {

            if ( error.response ) {
                return error.response;
            }

        });

        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};

export const deleteHorarioGeneral = async( id , access_token ) => {


    try {

        const sendRequest = await axios({
            url : `${url}//horarios/${id}`,
            method : 'DELETE',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            }
            
        }).catch( function( error ) {

            if ( error.response ) {
                return error.response;
            }

        });

        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};

// veterinario/{documentoVeterinario}/agendas
export const getAgendasVeterinario  = async( idVet ) => {

    try {    
        
        return await axios(`${url}/veterinario/${idVet}/agendas`);

    } catch (error) {
        console.log( error );
    }

}