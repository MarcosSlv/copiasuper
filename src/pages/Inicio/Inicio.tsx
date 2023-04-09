import { Link } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className="flex flex-col m-auto pt-20 bg-red-500 text-white h-60 max-w-md rounded-md">
      <h1 className="flex justify-center font-bold">Aqui temos as melhores ofertas!</h1>

      <Link to='/ofertas' className="cursor-default max-w-30 max-h-10"><button className="w-30 h-10 flex m-auto bg-red-800 rounded-md mb-2 mt-10 p-2 shadow-lg shadow-gray-800/40 font-semibold ease-in duration-300 hover:bg-white hover:text-red-800">Acesse nossas ofertas</button></Link>

    </div>
  )
}