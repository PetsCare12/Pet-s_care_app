
const URL = "http://localhost:8080/api/";

// ------------------------------------- REGISTROS ------------------------------------- //

// USUARIO
export const registro_user = ( endpoint, documento, nombre, apellido, telefono, sexo, correo, password  ) => {
    fetch( URL+endpoint ,{
        method : 'POST',
        headers : {
            "Content-type" : "application/json"
        },
        body:JSON.stringify({
            documentoUs : documento,
            nombreUs : nombre,
            apellidoUs : apellido,
            telefonoUs : telefono,
            sexoUs : sexo,
            correoUs : correo,
            passwordUs : password,
            imagenUsu : "empty",
            rolUs : 2
        })
    })
    .then( response => response )
    .then((data) => console.log(data))
}

export const validate_user = ( endpoint, documento ) => {

    let validacion = true;

    fetch( URL+endpoint+`/${documento}` )
    .then( response => response.json() )
    .then((data) => {
        if ( data == null ) {
            console.log("good");
            validacion = false;
        }
        else {
            console.log("error");
            validacion = true;
        }
    })

    return validacion;
}