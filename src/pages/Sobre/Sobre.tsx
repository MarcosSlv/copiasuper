import sobre from '../../assets/images/sobre.jpg';
export const Sobre = () => {
  return (
    <div className="flex flex-col m-auto pt-20 bg-red-600 text-white h-96 max-w-md rounded-sm">
      <div>
        <img src={sobre} alt="sobre" className="h-52 w-52 m-auto mb-8 rounded-md" />
        <p className="text-center font-semibold">Venha conhecer nossa rede de supermercados!</p>
        <p className="text-center font-semibold">Estamos te esperando!</p>
      </div>
    </div>
  );
};
