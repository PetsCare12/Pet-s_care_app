import axios from "axios";

export const registroClinica = async( clinica ) => {
 
    try {
        const response = await axios({
            url: "http://localhost:8080/api/clinicas",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: clinica
        }).catch( function( error ) {

            if ( error.response ) {
                return { status : error.response.status }
            }

        });
        
        return response;

    } catch (error) {
        console.log( error );
    }
 
}

export const getClinicaById = async( nit ) => {
 
    
    try {

        const respuesta = await axios.get(`http://localhost:8080/api/clinicas/${nit}`);

        return respuesta;
        
    } catch (error) {
        if ( error.response ) {
            console.log(error.response.status);
            return error.response.status;
        }
        
    }
}

export const putClinica = async( clinica , nit ) => {
 
    try {
        const response = await axios({
            url: `http://localhost:8080/api/clinicas/${nit}`,
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            data: clinica
        }).catch( function( error ) {

            if ( error.response ) {
                return { status : error.response.status }
            }

        });
        
        return response;

    } catch (error) {
        console.log( error );
    }
 
}

export const getPeticionesClinicas = async() => {

    try {
        const respuesta = await axios.get("http://localhost:8080/api/clinicas");

        const peticiones = respuesta.data.filter( cli => cli.estadoCli === 3 );

        return peticiones;
        
    } catch (error) {
        console.log( error );
    }

}

export const peticion = async ( nit, access_token, estado ) => {

    try {
        const response = await axios({
            url: "http://localhost:8080/api/clinicas/"+nit+"/estado/"+estado,
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                'Authorization': 'Bearer '+access_token,
            },
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

export const getAllClinicas = async () => {

    try {
        const response = await axios("http://localhost:8080/api/clinicas");

        return response;
    } catch (error) {
        console.log( error );
    }

}

export const getClinicaByNit = async ( nit ) => {

    try {
        const response = await axios("http://localhost:8080/api/clinicas/"+nit);

        console.log( response );
        return response;
    } catch (error) {
        console.log( error );
    }

}


export const registroClinicaTest = () => {

    console.log("entró");

    const imgClinicas=[
        "https://www.puntovet.com.co/wp-content/uploads/2016/03/Fachada-1.jpg",
        "https://www.simbiotia.com/wp-content/uploads/diseno-de-clinicas-veterinarias.jpg",
        "https://cvlapau.com/slider1/data1/images/img2.png",
        "https://www.simbiotia.com/wp-content/uploads/transformacion-diseno-clinicas-veterinarias.jpg",
        "https://i.pinimg.com/originals/55/cf/c1/55cfc1b23822e1b3486ff8e67f67a98e.jpg",
        "https://americaeconomica.com/wp-content/uploads/2021/08/Clinica-veterinaria-Irun-con-servicio-de-urgencias-24-horas-Amaita.jpg"
    ]
    const nombreClinica=[
        "San Blass",
        "Zoo Vet",
        "Animales con cola",
        "Mascota Feliz",
        "La granja",
        "La lopera"
    ]

    let posicion = 0;

    for (let index = 0; index < 20; index++) {

        console.log("hola");

        if ( posicion > 6 ) {
            posicion = 0;
        }
        
        let clinica = {
            nit : 1100000+index,
            nombre   : nombreClinica[posicion],
            direccion: `Sena Galán`,
            telefono : `300000000${index}`,
            correoCv : `test${index}@gmail.com`,
            password : "test",
            imagenclinica : imgClinicas[posicion],
            estadoCli : 1
        }

        posicion += 1;
        
        registroClinicaTestRe( clinica).then( info => console.log(info));
    
    }
 
}

export const registroClinicaTestRe = async( clinica ) => {
 
    try {
        const response = await axios({
            url: "http://localhost:8080/api/clinicas",
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            data: clinica
        }).catch( function( error ) {

            if ( error.response ) {
                return { status : error.response.status }
            }

        });
        
        return response;

    } catch (error) {
        console.log( error );
    }
 
}