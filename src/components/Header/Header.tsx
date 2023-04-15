import { NavBar } from '../NavBar';

import Logo from '../../assets/images/cacique2.png';
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <div className="flex justify-center p-4">
        <Link to='/' className="cursor-default"><img src={Logo} alt="" className="h-20" /></Link>
      </div>
      <NavBar />
    </div>
  )
};

export default Header;
