import { useState } from "react";

export const horariosAgenda = ( horarios = [] ) => {

    let morning = [];
    let afternoon = [];
   
    morning = horarios.filter( hora => Number(hora.split(":")[0]) < 12);
    afternoon = horarios.filter( hora => Number(hora.split(":")[0]) >= 12);

    // Convertir horas de la tarde en hora estandar
    let newAfternoon = [];
    for (let index = 0; index < afternoon.length; index++) {
        
        let hora = Number(afternoon[index].split(":")[0]);
        let minutos = afternoon[index].split(":")[1];

        let horaFinal = (hora-2).toString();

        let final = horaFinal.charAt(1)+":"+minutos;

        final.split(":")[0] !== "0"
        ? newAfternoon.push( horaFinal.charAt(1)+":"+minutos )
        : newAfternoon.push( "12:"+minutos )

    }

    console.log( newAfternoon );

    return [
        morning,
        newAfternoon
    ]

}
