
export const monthDays = ( año, mes ) => {
  let diasMes = new Date(año, mes, 0).getDate();
  let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  let days = [];
  
  for (let dia = 1; dia <= diasMes; dia++) {
    // Ojo, hay que restarle 1 para obtener el mes correcto
    let indice = new Date(año, mes - 1, dia).getDay();
    days.push( { "dia" : dia ,"diaNum" : diasSemana[indice] } )
  }

  return days;
}
