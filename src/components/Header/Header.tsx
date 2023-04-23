// import { NavBar } from '../NavBar';

import Logo from '../../assets/images/cacique2.png';
import { Link } from 'react-router-dom';
import { usePath } from '../../hooks/usePath';
export const Header = () => {
  const general = 'text-red-900 bg-white p-0.5 rounded-sm';
  const current = 'text-white font-bold';

  const { isCurrentPage } = usePath();

  return (
    <header className="flex-col justify-center items-center pt-2 text-white font-bold text-xl shadow-lg shadow-red-500/50">
      <img src={Logo} alt="logo" className="h-28 m-auto" />
      <nav className="flex z-50 mt-8 h-10 gap-6 justify-center items-center text-center rounded w-full bg-red-600">
        <Link to="/" className={isCurrentPage('/') ? general : current}>
          Início
        </Link>
        <Link to="/ofertas" className={isCurrentPage('/ofertas') ? general : current}>
          Ofertas
        </Link>
        <Link to="/dicas" className={isCurrentPage('/dicas') ? general : current}>
          Dicas
        </Link>
        <Link to="/sobre" className={isCurrentPage('/sobre') ? general : current}>
          Sobre
        </Link>
      </nav>
    </header>
  );
};

export default Header;
