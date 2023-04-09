import { Link } from "react-router-dom"

import { Adega } from "./Adega"
import { Churrasco } from "./Churrasco"

import vinho from "../../assets/images/vinho.jpg"
import churras from "../../assets/images/churras.jpg"



export const Dicas = () => {
    return (
        <div className="flex flex-col m-auto pt-10 bg-red-500 text-white h-100 max-w-md rounded-md">
            <div className="flex flex-col justify-around">
                <div className="m-auto m-2">
                    <Link to='/dicas/adega'><button className="mt-6 flex m-auto font-semibold pb-2 bg-red-800 rounded p-2 mb-2 shadow-lg shadow-gray-800 ease-in duration-300 hover:bg-white hover:text-red-800">Adega</button></Link>
                    <img src={vinho} alt="adega" className="w-60 h-32 rounded-md m-auto"/>
                </div>
                <div className="m-auto">
                    <Link to='/dicas/churrasco'><button className="mt-4 flex m-auto font-semibold pb-2 bg-red-800 rounded p-2 mb-2 shadow-lg shadow-gray-800 ease-in duration-300 hover:bg-white hover:text-red-800">Churrasco</button></Link>
                    <img src={churras} alt="churrasco" className="w-60 h-32 rounded-md m-auto mb-8"/>    
                </div>
            </div>
        </div>
    )
}