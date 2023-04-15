import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <nav className='justify-center absolute z-10 hidden lg:flex bg-red-500 w-full h-10 text-white shadow-lg shadow-red-800/50'>
      <div>
        <ul className='flex display-flex flex-1 gap-1 justify-between font-semibold h-20 p-1'>
          <NavLink to="/" className='p-1 mx-2.5 m-0 justify-center whitespace-pre ease-in duration-300 flex cursor-pointer hover:text-red-800 hover:bg-white max-w-16 max-h-8 hover:rounded-sm focus:text-red-800 focus:bg-white focus:rounded-sm'>Início</NavLink>
          <NavLink to="/ofertas" className='p-1 mx-2.5 m-0 justify-center whitespace-pre ease-in duration-300 flex cursor-pointer hover:text-red-800 hover:bg-white max-w-16 max-h-8 hover:rounded-sm focus:text-red-800 focus:bg-white focus:rounded-sm '>Ofertas</NavLink>
          <NavLink to="/dicas" className='p-1 mx-2.5 m-0 justify-center whitespace-pre ease-in duration-300 flex cursor-pointer hover:text-red-800 hover:bg-white max-w-16 max-h-8 hover:rounded-sm focus:text-red-800 focus:bg-white focus:rounded-sm m'>Dicas</NavLink>
          <NavLink to="/contato" className='p-1 mx-2.5 m-0 justify-center whitespace-pre ease-in duration-300 flex cursor-pointer hover:text-red-800 hover:bg-white max-w-16 max-h-8 ease-in duration-100 hover:rounded-sm focus:text-red-800 focus:bg-white focus:rounded-sm '>Sobre</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar