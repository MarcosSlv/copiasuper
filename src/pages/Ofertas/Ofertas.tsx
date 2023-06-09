import { useState } from 'react';
import { producList } from '../../data/productList';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

export const Ofertas = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const currentProduct = currentProductIndex >= 0 ? producList[currentProductIndex] : null;

  const nextProduct = () => {
    setCurrentProductIndex(
      currentProductIndex === producList.length - 1 ? 0 : currentProductIndex + 1,
    );
  };

  const previousProduct = () => {
    setCurrentProductIndex(
      currentProductIndex === 0 ? producList.length - 1 : currentProductIndex - 1,
    );
  };

  return (
    <div className="flex flex-col m-auto pt-20 bg-red-600 text-white h-98 max-w-md rounded-sm">
      {currentProduct && (
        <div key={currentProduct.id} className="flex-col justify-center">
          <img
            src={currentProduct.image.src}
            alt={currentProduct.name}
            className="m-auto h-52 w-80 rounded-md"
          />
          <h1 className="text-center font-semibold pt-2">{currentProduct.name}</h1>
          <p className="text-center font-semibold">R$: {currentProduct.price}</p>
        </div>
      )}
      <div className="flex justify-between justify-items-center p-2">
        <button
          onClick={previousProduct}
          className="flex justify-center pt-1.5 rounded w-10 h-8 bg-gray-700 ease-in duration-300 hover:bg-white hover:text-red-800 font-semibold text-xl"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextProduct}
          className="flex justify-center pt-1.5 rounded w-10 h-8 bg-gray-700 ease-in duration-300 hover:bg-white hover:text-red-800 font-semibold text-xl"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
