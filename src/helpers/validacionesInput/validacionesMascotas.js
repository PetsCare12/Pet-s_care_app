
export const actualizarMascotaValidacion = ( data ) => {

    if ( !data.nombre.trim() ) { return [false,"El campo nombre es obligatorio"]}
    else if( !data.raza.trim() ) { return [false,"El campo raza es obligatorio"]}
    else if( !data.color.trim() ) { return [false,"El campo color es obligatorio"]}
    else if( !data.edad.trim() ) { return [false,"El campo edad es obligatorio"]}
    else if( !data.peso.trim() ) { return [false,"El campo peso es obligatorio"]}
    else if( !data.sexo.trim() ) { return [false,"El campo sexo es obligatorio"]}

    else if( !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(data.nombre) ) { return [false,"El nombre no puede contener números o caracteres especailes"]}
    else if( !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(data.raza) ) { return [false,"La raza no puede contener números o caracteres especailes"]}
    else if( !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(data.color) ) { return [false,"El color no puede contener números o caracteres especailes"]}
    else if( !/^\d+$/.test(data.edad) ) { return [false,"La edad debe tener caracteres numéricos"]}
    else if( !/^\d+$/.test(data.peso) ) { return [false,"El peso debe tener caracteres numéricos"]}
    
    return [true,""];

}