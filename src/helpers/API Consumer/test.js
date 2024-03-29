import axios from "axios";
const URL = "http://localhost:8080";

export const getUsuario_mascotas = async( id ) => {

    try {
        const respuesta = await axios.get(URL+"/api/usuarios/"+id+"/mascotas");

        return respuesta.data;
        
    } catch (error) {
        console.log( error );
    }

}

export const crearMascota = async( mascota, id ) => {

    const access_token = localStorage.getItem("token");

    try {
        
        const resp = await axios({
            url : URL+"/api/usuario/"+id+"/mascota",
            method : 'POST',
            headers : {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
            data : mascota
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

export const getUsuarioId = async ( id ) => {
    try {
        const respuesta = await axios.get(URL+"/api/usuarios/"+id);
        
        return respuesta;
    } catch (error) {
        console.log( error );
    }
}


export const postUsuario = async( user ) => {

   user.estadoUs = 1;

    try {
        const response = await axios({
            url: URL+"/api/usuarios",
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
            url: URL+"/api/auth/iniciarSesion",
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

        return resp;

    } catch (error) {
        console.log( error );
    }
}

export const usuariosTodos = async() => {

    try {
        const respuesta = await axios.get(URL+"/api/usuarios");

        return respuesta.data;
        
    } catch (error) {
        console.log( error );
    }

}

export const usuarioUpdate = async( user, id, token) => {

    try {
        const resp = await axios({
            url: URL+"/api/usuarios/"+id,
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+token,
            },
            data: user
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

export const cambiarEstadoUsuario = async(estado) => {
    const token = localStorage.getItem("token");
    try {
        const resp = await axios({
            url: `${URL}/api/usuarios/${estado.documento}/estado/${estado.estadoUs}`,
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+token,
            },
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

