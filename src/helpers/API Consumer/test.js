import axios from "axios";

export const getUsuario_mascotas = async( id ) => {

    try {
        const respuesta = await axios.get("http://localhost:8080/api/usuarios/"+id+"/mascotas");

        return respuesta.data;
        
    } catch (error) {
        console.log( error );
    }

}

export const crearMascota = async( mascota, id ) => {

    const access_token = localStorage.getItem("token");

    try {
        
        const resp = await axios({
            url : "http://localhost:8080/api/usuario/"+id+"/mascota",
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : mascota
            
        });

    } catch (error) {
        console.log( error );
    }
}

export const getUsuarioId = async ( id ) => {
    try {
        const respuesta = await axios.get("http://localhost:8080/api/usuarios/"+id);
        
        return respuesta;
    } catch (error) {
        console.log( error );
    }
}


export const postUsuario = async( user ) => {

   user.estadoUs = 1;

    try {
        const response = await axios({
            url: "http://localhost:8080/api/usuarios",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: user
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

export const inicioSesionUsuario = async ( valores ) => {

    try {
        const resp = await axios({
            url: "http://localhost:8080/api/auth/iniciarSesion",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: valores
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

export const usuariosTodos = async() => {

    try {
        const respuesta = await axios.get("http://localhost:8080/api/usuarios");

        return respuesta.data;
        
    } catch (error) {
        console.log( error );
    }

}

