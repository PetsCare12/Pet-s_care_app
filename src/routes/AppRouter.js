import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/pages/Home/Home';
import { Login } from '../components/pages/Login/Login';
import { Registro } from '../components/pages/Registro/Registro';
import { Registro_mascotas } from '../components/pages/Registro_mascotas/Registro_mascotas';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/registro_mascotas" element={<Registro_mascotas />} />
                <Route path="/" element={ <Home />  } />

            </Routes>
            
        </BrowserRouter>
    )
}