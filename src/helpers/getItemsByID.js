import { citas } from "../components/pages/Citas/dataCitas";
import { clinicas } from "../components/pages/Clinicas/data";

export const getClinicaId = ( id ) => {

    return clinicas.find( cli => cli.id === id );
}

export const getCitaById = ( id ) => {

    return citas.find( elemento => elemento.id === id );
}