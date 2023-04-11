import { useState } from 'react';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const imgBanana = '../../src/pages/Ofertas/imgs/bananas.jpg';
const imgChoc = '../../src/pages/Ofertas/imgs/barrachoc.jpg';
const imgMilho = '../../src/pages/Ofertas/imgs/milho.jpg';


export const Ofertas= () => {
  
const productList: Product[] = [
  {
    id: 1,
    name: 'Bananas',
    price: 2.59,
    image: imgBanana
  },
  {
    id: 2,
    name: 'Chocolate',
    price: 5.49,
    image: imgChoc
  },
  {
    id: 3,
    name: 'Milho',
    price: 1.99,
    image: imgMilho
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
          <img src={currentProduct.image} alt={currentProduct.name} className='m-auto h-52 w-80 rounded-md'/>
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