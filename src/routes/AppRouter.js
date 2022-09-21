import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Navigate } from "react-router";
import { NotFound } from '../components/pages/404/NotFound';
import { Citas } from '../components/pages/Citas/Citas';
import { Clinica } from '../components/pages/Clinicas/Clinica';
import { Clinicas } from '../components/pages/Clinicas/Clinicas';
import { Home } from '../components/pages/Home/Home';
import { Login } from '../components/pages/Login/Login';
import { Profile } from '../components/pages/Profile/Profile';
import { Registro } from '../components/pages/Registro/Registro';
import { Registro_mascotas } from '../components/pages/Registro_mascotas/Registro_mascotas';
import { TypeClinica } from '../components/pages/SectionTypeClinica/TypeClinica';
import { VeterinarioProfile } from '../components/pages/SectionTypeVeterinario/VeterinarioProfile';
import { Agenda } from '../components/pages/Agendamiento/Agenda'
import AdminScreen from '../components/pages/SectionTypeAdmin/AdminScreen';
import { ClinicaProfile } from '../components/pages/SectionTypeClinica/ClinicaProfile/ClinicaProfile';
import { PasswordRecovery } from '../components/pages/Password-recovery/PasswordRecovery';
import { PoliticasPrivacidad } from '../components/pages/PoliticasPrivacidad/PoliticasPrivacidad';
import { InformacionLegal } from '../components/pages/InformacionLegal/InformacionLegal';

export const AppRouter = () => {

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("usuario"));
    let rol = "";

    !!user ? rol = user.aud : rol = ""

    console.log( !!token );
    console.log(!!user);
    console.log( rol==="[ROLE_ADMIN]" );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ !!token ? <Navigate to="/" /> : <Login />} />
                <Route path="/registro" element={!!token ? <Navigate to="/" /> : <Registro />} />
                <Route path="/registro_mascotas" element={<Registro_mascotas />} />
                <Route path='/perfil' element={!token ? <Navigate to="/" /> : <Profile />} />
                <Route path='/perfil_veterinario' element={!token ? <Navigate to="/" /> : <VeterinarioProfile />} />
                <Route path='clinicas' element={<Clinicas />} />
                <Route path='clinica/:id' element={<Clinica />} />
                <Route path="/*" element={ <NotFound />  } />
                <Route path="/" element={ <Home />  } />
                <Route path="/gestionClinica" element={ (!!user && rol!=="[ROLE_CLINICA]") ? <Navigate to="/" /> : <TypeClinica />  } />
                <Route path="/tuClinica" element={(!!user && rol!=="[ROLE_CLINICA]") ? <Navigate to="/" /> : <ClinicaProfile />  } />
                <Route path="/agenda" element={!token ? <Navigate to="/" /> : <Agenda />  } />
                <Route path="/agenda/:id" element={!token ? <Navigate to="/" /> : <Agenda />}/>
                <Route path="/admin" element={(!!user && rol!=="[ROLE_ADMIN]") ? <Navigate to="/" /> : <AdminScreen/> }/>
                <Route path="/recovery-password" element={<PasswordRecovery />}/>
                <Route path="/politicas" element={<PoliticasPrivacidad />}/>
                <Route path="/informacionLegal" element={<InformacionLegal />}/>
            </Routes>
        </BrowserRouter>
    )
}