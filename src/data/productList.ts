import imgBanana from '../assets/images/bananas.jpg';
import imgChoc from '../assets/images/barrachoc.jpg';
import imgMilho from '../assets/images/milho.jpg';


import { Product } from '../types/product';

export const producList: Product[] = [
  {
    id: 1,
    name: 'Bananas',
    price: 2.59,
    image: { src: imgBanana }
  },
  {
    id: 2,
    name: 'Chocolate',
    price: 5.49,
    image: { src: imgChoc }
  },
  {
    id: 3,
    name: 'Milho',
    price: 1.99,
    image: { src: imgMilho }
  }
]