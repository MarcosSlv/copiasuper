import dicavinho from '../../../assets/images/dicavinho.jpg'

export const Adega = () => {
    return (
        <div className="flex flex-col m-auto pt-20 bg-red-500 text-white h-100 max-w-md rounded-md">
            <div className='p-4'>
            <img src={dicavinho}  alt="" className='h-60 w-60 m-auto rounded-md mb-4'/>
            <p className="text-start font-semibold text-sm">Tradicionalmente os vinhos são elaborados para acompanhar refeições, pois na Europa, que é onde a bebida surgiu, é assim que se consome: com moderação e harmonizado ao cardápio. O fato de você degustar um vinho desta maneira muda sua percepção da bebida. Se a harmonização estiver correta, a experiência da combinação entre vinho e comida deixará a dupla ainda mais saborosa. Dois vinhos muito gastronômicos: <i>Ramos Reserva Selected Blend</i> e <i>Due Mari Chianti DOCG</i>.</p>
            </div>
        </div>
    )
}