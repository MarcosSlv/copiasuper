import { useState } from 'react';


import imgBanana from './imgs/bananas.jpg';
import imgChoc from './imgs/barrachoc.jpg';
import imgMilho from './imgs/milho.jpg';

type Product = {
  id: number;
  name: string;
  price: number;
  image: {
    src: string
  }
}



export const Ofertas= () => {
  
const productList: Product[] = [
  {
    id: 1,
    name: 'Bananas',
    price: 2.59,
    image: {src: imgBanana}
  },
  {
    id: 2,
    name: 'Chocolate',
    price: 5.49,
    image: {src: imgChoc}
  },
  {
    id: 3,
    name: 'Milho',
    price: 1.99,
    image: {src: imgMilho}
  }
  ]
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const currentProduct = currentProductIndex >= 0 ? productList[currentProductIndex] : null;

  
  const nextProduct = () => {
    setCurrentProductIndex(currentProductIndex === productList.length - 1 ? 0 : currentProductIndex + 1);
  };
  
  const previousProduct = () => {
    setCurrentProductIndex(currentProductIndex === 0 ? productList.length - 1 : currentProductIndex - 1);
  };
  
  return (
    <div className="flex flex-col m-auto pt-20 bg-red-500 text-white h-98 max-w-md rounded-md">
      
      {currentProduct && (
        <div key={currentProduct.id} className='flex-col justify-center'>
          <img src={currentProduct.image.src} alt={currentProduct.name} className='m-auto h-52 w-80 rounded-md'/>
          <h1 className='text-center font-semibold pt-2'>{currentProduct.name}</h1>
          <p className='text-center font-semibold'>R$: {currentProduct.price}</p>
        </div>
      )}
      <div className='flex justify-between justify-items-center p-2'>
      <button onClick={previousProduct} className='flex justify-center rounded w-10 h-7 bg-gray-700 ease-in duration-300 hover:bg-white hover:text-red-800 font-semibold text-xl'>-</button>
      <button onClick={nextProduct} className='flex justify-center rounded w-10 h-7 bg-gray-700 ease-in duration-300 hover:bg-white hover:text-red-800 font-semibold text-xl'>+</button>
      </div>
      
      
    </div>
  )
}