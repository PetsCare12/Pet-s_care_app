import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/pages/Home/Home';
import { Login } from '../components/pages/Login/Login';
import { Registro } from '../components/pages/Registro/Registro';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/" element={ <Home />  } />

            </Routes>
        </BrowserRouter>
    )
}