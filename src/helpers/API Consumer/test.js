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
   user.estadoUs = 1;

   console.log(user);

    try {
        const response = await axios({
            url: "http://localhost:8080/api/usuarios",
            method: "POST",
            data: user
        });

        console.log(response.status);
        
        return response;
    } catch (error) {
        console.log( error );
    }

}

export const pruebaPOST = () => {

    fetch("http://localhost:8080/api/usuarios", {
        method:'POST',
        headers:{
            "Content-type":"application/json" 
        },
        body:JSON.stringify({
            documentoUs: "153423",
            nombreUs: "john",
            apellidoUs: "doe",
            sexoUs: "m",
            telefonoUs: "7453234",
            correoUs: "jhn@doe.com",
            imagenUsu: "img",
            estadoUs: 1,
            passwordUs: "johndDow132"
        })
    })
    .then(response => response)
    .then((respuesta) => 
        console.log(respuesta))
    .catch( err => console.log(err))
}

