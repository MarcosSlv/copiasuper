import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//pages
import { Inicio } from './pages/Inicio';
import { Ofertas } from './pages/Ofertas';
import { Dicas } from './pages/Dicas';
import { Sobre } from './pages/Sobre';
import { Header } from './components/Header';
import { Problemas } from './pages/Problemas';

//subpages
import { Adega } from './pages/Dicas/Adega';
import { Churrasco } from './pages/Dicas/Churrasco';

export const MappedRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/dicas/adega" element={<Adega />} />
        <Route path="/dicas/churrasco" element={<Churrasco />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Problemas />} />
      </Routes>
    </Router>
  );
};
