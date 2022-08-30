import { citas } from "../components/pages/Citas/dataCitas";

export const getCitaById = ( id ) => {

    return citas.find( elemento => elemento.id === id );
}