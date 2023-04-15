import { Route, Routes } from "react-router-dom";

// pages
import { Inicio } from "./pages/Inicio";
import { Ofertas } from "./pages/Ofertas";
import { Sobre } from "./pages/Sobre";
import { Dicas } from "./pages/Dicas";
import { Problemas } from './pages/Problemas';

// subpages
import { Adega } from "./pages/Dicas/Adega";
import { Churrasco } from "./pages/Dicas/Churrasco";


// components
import { Header } from './components/Header';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/dicas/adega" element={<Adega />} />
        <Route path="/dicas/churrasco" element={<Churrasco />} />
        <Route path="/contato" element={<Sobre />} />
        <Route path="*" element={<Problemas />} />
      </Routes>
    </div>
  )
};

export default App;
