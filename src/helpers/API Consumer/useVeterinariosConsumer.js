import axios from "axios";

const URL = "https://petscareapi.uc.r.appspot.com/api";

export const getAllVeterinarios = async () => await axios(`${URL}/veterinarios`);

export const getVeterinarios = async( nit ) => {

    try {

        const sendRequest = await axios.get(`${URL}/clinica/${nit}/veterinarios`);
        
        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }

    }

};

export const getVeterinarioById = async( id ) => {

    try {

        const sendRequest = await axios.get(`${URL}/veterinarios/${id}`); 

        return sendRequest.data;            

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }
        
    }

};

export const getVeterinarioByName = async( name ) => {

    try {

        const sendRequest = await axios.get(`${URL}/veterinarios/nombre/${name}`); 
                
        return sendRequest.data;           

    } catch (error) {

        if ( error.response ) {
            return error.response;
        }
        
    }

};

export const setVeterinario = async( veterinario , nit , access_token ) => {


    try {
        
        const sendRequest = await axios({
            url : `${URL}/veterinarios/${nit}`,
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : veterinario
            
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

export const putVeterinario = async( veterinario , id , access_token ) => {


    try {

        const sendRequest = await axios({
            url : `${URL}/veterinarios/${id}`,
            method : 'PUT',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : veterinario
            
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

export const setStateVeterinario = async( id , estado , access_token ) => {

    try {

        const sendRequest = await axios({
            url : `${URL}/veterinarios/${id}/estado/${estado}`,
            method : 'PUT',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : ""
            
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
// Tests//

export const eliminarVeterinario = async( id , access_token ) => {


    try {

        const sendRequest = await axios({
            url : `${URL}/veterinarios/${id}`,
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