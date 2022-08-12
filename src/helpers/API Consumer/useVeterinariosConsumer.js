import axios from "axios";
const url = "http://localhost:8080/api";

export const getVeterinarios = async( nit ) => {

    try {

        const sendRequest = await axios.get(`${url}/clinica/${nit}/veterinarios`);
        
        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }

    }

};

export const getVeterinarioById = async( id ) => {

    try {

        const sendRequest = await axios.get(`${url}/veterinarios/${id}`); 

        return sendRequest.data;            

    } catch (error) {

        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }
        
    }

};

export const getVeterinarioByName = async( name ) => {

    try {

        const sendRequest = await axios.get(`${url}/veterinarios/nombre/${name}`); 
                
        return sendRequest.data;           

    } catch (error) {

        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }
        
    }

};

export const setVeterinario = async( veterinario , nit , access_token ) => {

    // const access_token = localStorage.getItem("token");

    try {
        
        const sendRequest = await axios({
            url : `${url}veterinarios/${nit}`,
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : veterinario
            
        }).catch( function( error ) {

            if ( error.response ) {
                console.log(error.response.status);
                return error.response.status;
            }

        });
                
        return console.log(sendRequest.data);

    } catch (error) {

        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }

    }

};

export const putVeterinario = async( veterinario , id , access_token ) => {

    // const access_token = localStorage.getItem("token");

    try {

        const sendRequest = await axios({
            url : `${url}veterinarios/${id}`,
            method : 'PUT',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : veterinario
            
        }).catch( function( error ) {

            if ( error.response ) {
                console.log(error.response.status);
                return error.response.status;
            }

        });

        return sendRequest.data;

    } catch (error) {

        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }

    }

};