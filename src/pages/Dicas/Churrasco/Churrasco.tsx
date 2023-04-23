import dicachurras from '../../../assets/images/dicachurras.jpg';

export const Churrasco = () => {
  return (
    <div className="flex flex-col m-auto pt-20 bg-red-600 text-white h-100 max-w-md rounded-sm">
      <div className="p-4">
        <img src={dicachurras} alt="" className="h-32 w-60 m-auto rounded-md mb-4" />
        <p className="text-start font-semibold text-sm">
          Planejamento é um elemento-chave para qualquer churrasco. E para evitar que seus
          convidados terminem o dia famintos, é sempre bom calcular a quantidade necessária de carne
          antes de ir às compras.Os especialistas afirmam que a medida ideal para um churrasco de
          qualidade é de 400 gramas de carne por pessoa. E você pode distribuir essa quantidade
          entre diferentes tipos e cortes. Em um churrasco para oito pessoas, por exemplo, o ideal é
          comprar 3,2 kg de carne, que podem ser 800 g de picanha, 800 g de alcatra, 800 g de frango
          e 800 g de linguiça ou qualquer outra combinação. Vai do gosto do freguês.
        </p>
      </div>
    </div>
  );
};
