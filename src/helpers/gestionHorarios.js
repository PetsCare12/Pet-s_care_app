
export const divisionHorarios = ( horasUsadas=[], ah , ch, am = 0 , cm = 0 ) => {

    const day = new Date();
    let horarios = [];
    let hora = "";
    const apertura = ah;
    const cierre = ch;
    const tiempoCita = 45;

    day.setHours(apertura);
    day.setMinutes(am);

    console.log( horasUsadas );
    
    hora = day.getHours()+":"+day.getMinutes();
    if ( !horasUsadas.includes( hora ) ) {
        
        console.log( hora );
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

    return horarios;

}