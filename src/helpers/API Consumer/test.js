import axios from "axios";

export const getUsuario = async() => {

    try {
        const respuesta = await axios.get("https://petscareapi.uc.r.appspot.com/api/usuarios");
        console.log( respuesta );
        
    } catch (error) {
        console.log( error );
    }

}

export const postUsuario = async( user ) => {

   user.imagenUsu = "https://img.freepik.com/vector-gratis/ejemplo-lindo-icono-vector-historieta-superheroe-astronauta_138676-3470.jpg?w=826&t=st=1659623326~exp=1659623926~hmac=5b9c3143211e417c65786694095fa29798efdba92d8969c629974be5f08e407c";
   user.estadoUs = 2;

    try {
        const response = await axios({
            url: "http://localhost:8080/api/usuarios",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: user
        });
        
        return response;
    } catch (error) {
        console.log( error );
    }

}

export const inicioSesionUsuario = async ( valores ) => {

    try {
        const resp = await axios({
            url: "http://localhost:8080/api/auth/iniciarSecion",
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

