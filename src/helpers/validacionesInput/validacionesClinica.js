export const validacionActClinica = ( data, cambiarEstado, txtEstado ) => {
    

    const { direccion,telefono,tarifa,correoCv } = data;

    if (!direccion.trim()) {
         txtEstado("El campo Direccion está vacío");
        }   
    else if(!telefono.trim()) {
        txtEstado("El campo teléfono está vacío");
        }
    else if(!/^\d{10,10}$/.test(telefono)) {
        txtEstado("El número telefónico no es válido");
        }
    else if(!correoCv.trim()) {
        txtEstado("El campo Correp está vacío");
        }
    else if(!tarifa.trim()) {
        txtEstado("El campo Tarifa está vacío");
        }
    else if(!/^\d{4,6}$/.test(tarifa)) {
        txtEstado("El número Tarifa no es válido");
        }
    else if(!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(correoCv)) {
        txtEstado("El número Correo no es válido");
        }
    else {
        cambiarEstado( false );
        return "ok";
    }
    
    cambiarEstado( true );
    return "bad";

}