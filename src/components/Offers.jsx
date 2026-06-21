import React from 'react';
import { BsCalendarCheck, BsCurrencyDollar, BsArrowRepeat, BsShieldCheck } from 'react-icons/bs';

const features = [
  {
    icon: <BsCalendarCheck size={28} />,
    title: 'Reserva en Booking',
    desc: 'Disponible en las principales plataformas de reserva del mundo.',
  },
  {
    icon: <BsCurrencyDollar size={28} />,
    title: 'Tarifas competitivas',
    desc: 'Los mejores precios garantizados para tu próximo viaje.',
  },
  {
    icon: <BsArrowRepeat size={28} />,
    title: 'Reserve con flexibilidad',
    desc: 'Cancela o modifica tu reserva sin costos adicionales.',
  },
  {
    icon: <BsShieldCheck size={28} />,
    title: 'Seguro de viaje',
    desc: 'Viaja tranquilo con cobertura completa en cada destino.',
  },
];

const Offers = () => {
  return (
    <div className='max-w-[1100px] mx-auto px-4 py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {features.map((item) => (
          <div
            key={item.title}
            className='flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white'
          >
            <div className='text-yellow-500 bg-yellow-50 p-4 rounded-full mb-4'>
              {item.icon}
            </div>
            <h3 className='font-bold text-gray-800 text-lg mb-2'>{item.title}</h3>
            <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
