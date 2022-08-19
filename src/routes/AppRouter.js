import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { NotFound } from '../components/pages/404/NotFound';
import { CitaEspecifica } from '../components/pages/Citas/CitaEspecifica';
import { Citas } from '../components/pages/Citas/Citas';
import { Clinica } from '../components/pages/Clinicas/Clinica';
import { Clinicas } from '../components/pages/Clinicas/Clinicas';
import { Home } from '../components/pages/Home/Home';
import { Login } from '../components/pages/Login/Login';
import { Profile } from '../components/pages/Profile/Profile';
import { Registro } from '../components/pages/Registro/Registro';
import { Registro_mascotas } from '../components/pages/Registro_mascotas/Registro_mascotas';
import { TypeClinica } from '../components/pages/SectionTypeClinica/TypeClinica';
import { Agenda } from '../components/pages/Agenda/Agenda'
import AdminScreen from '../components/pages/SectionTypeAdmin/AdminScreen';
import { ClinicaProfile } from '../components/pages/SectionTypeClinica/ClinicaProfile/ClinicaProfile';

export const AppRouter = () => {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/registro_mascotas" element={<Registro_mascotas />} />
                <Route path='/perfil' element={<Profile />} />
                <Route path='clinicas' element={<Clinicas />} />
                <Route path='clinica/:id' element={<Clinica />} />
                <Route path="/*" element={ <NotFound />  } />
                <Route path="/citas" element={ <Citas />  } />
                <Route path="/cita/:id" element={ <CitaEspecifica />  } />
                <Route path="/" element={ <Home />  } />
                <Route path="/gestionClinica" element={ <TypeClinica />  } />
                <Route path="/tuClinica" element={ <ClinicaProfile />  } />
                <Route path="/agenda" element={ <Agenda />  } />
                <Route path="/admin" element={ <AdminScreen />  } />
            </Routes>
        </BrowserRouter>
    )
}