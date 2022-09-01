

export const divisionHorarios = ( ah , ch , am = 0 , cm = 0 ) => {

    const day = new Date();

    let horarios = [];
    let hora = "";

    const apertura = ah;
    const cierre = ch;

    day.setHours(apertura);
    day.setMinutes(0);

    const tiempoCita = 45;

    hora = day.getHours()+":"+day.getMinutes();
    horarios.push( hora );

    for (let index = 0; day.getHours() < cierre; index++) {

        day.setMinutes( day.getMinutes() + tiempoCita );
        
        hora =  day.getHours()+":"+day.getMinutes();
        horarios.push( hora );
        
    }

    return horarios;

}