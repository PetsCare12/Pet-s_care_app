import { clinicas } from "../components/pages/Clinicas/data";

export const getClinicaId = ( id ) => {

    return clinicas.find( cli => cli.id === id );
}