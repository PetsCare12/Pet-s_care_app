import axios from "axios"

const URL = "https://petscareapi.uc.r.appspot.com/api";

export const generateCode = async( email ) => {

    try {
        const resp = await axios({
            url : URL+"/generarkey",
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

export const changePassword = async( nuevaContrasena, correo, codigo ) => {

    const data = { correo , nuevaContrasena };
    console.log( data );
    console.log( codigo );

    try {
        const resp = await axios({
            url : URL+"/actualizar/contrasena/"+codigo,
            method : 'PUT',
            headers : {
                "Content-Type":"application/json",
            },
            data : data
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
