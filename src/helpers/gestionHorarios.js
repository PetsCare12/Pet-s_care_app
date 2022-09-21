
export const divisionHorarios = ( horasUsadas=[], ah , ch, am = 0 , cm = 0 ) => {

    const day = new Date();
    const dayCi = new Date();
    let horarios = [];
    let hora = "";
    const apertura = ah;
    const cierre = ch;
    const tiempoCita = 45;

    day.setHours(apertura);
    day.setMinutes(am);

    dayCi.setHours(cierre);
    dayCi.setMinutes(cierre);
    
    hora = day.getHours()+":"+day.getMinutes();
    if ( !horasUsadas.includes( hora ) ) {
        
        horarios.push( hora );
    }

    for (let index = 0; day.getHours() < cierre; index++) {

        
        day.setMinutes( day.getMinutes() + tiempoCita );
        
        hora =  day.getHours()+":"+day.getMinutes();
        if ( !horasUsadas.includes( hora ) ) {
            
            if ( Number(hora.split(":")[0]) < ch ) {
    
                horarios.push( hora )
            }
        }

        
    }

    const ultimaPosicionHora = Number(horarios[horarios.length-1].split(":")[0]);
    const ultimaPosicionMinuto = Number(horarios[horarios.length-1].split(":")[1]);
    const fechaModificable = new Date();
    fechaModificable.setHours( ultimaPosicionHora );
    fechaModificable.setMinutes( ultimaPosicionMinuto + tiempoCita );

    if ((Number(fechaModificable.getHours()) <= Number(ch)) && (Number(fechaModificable.getMinutes()) <= Number(cm))) {
        horarios.push(fechaModificable.getHours()+":"+fechaModificable.getMinutes())
    }

    return horarios;

}