import React, { useState } from 'react';
import foto1 from '../assets/foto-1.png';
import foto2 from '../assets/foto-2.png';
import foto3 from '../assets/foto-3.png';
import foto4 from '../assets/foto-4.png';
import foto5 from '../assets/foto-5.png';
import Modal from './Modal';
import { BsGlobe, BsStarFill } from 'react-icons/bs';
import { FaShieldAlt, FaHeadset, FaRoute } from 'react-icons/fa';

const destinos = [
  { img: foto1, name: 'Maldivas', tag: 'Más visitado' },
  { img: foto3, name: 'Bali, Indonesia', tag: 'Tendencia' },
  { img: foto5, name: 'Cancún, México', tag: 'All Inclusive' },
];

const ventajas = [
  { icon: <FaRoute className='text-yellow-500' size={18} />, text: 'Itinerarios personalizados para cada viajero' },
  { icon: <FaShieldAlt className='text-yellow-500' size={18} />, text: 'Seguro de viaje incluido en todos los paquetes' },
  { icon: <FaHeadset className='text-yellow-500' size={18} />, text: 'Soporte 24/7 durante todo tu viaje' },
  { icon: <BsGlobe className='text-yellow-500' size={18} />, text: 'Más de 50 destinos alrededor del mundo' },
];

const Plan = ({ onOpenBooking }) => {
  const [leerMasOpen, setLeerMasOpen] = useState(false);

  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

      {/* Lado izquierdo — collage */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2 rounded-2xl' src={foto1} alt='Destino aéreo' />
        <img className='row-span-2 object-cover w-full h-full p-2 rounded-2xl' src={foto2} alt='Palmeras tropicales' />
        <img className='row-span-2 object-cover w-full h-full p-2 rounded-2xl' src={foto3} alt='Playa con palmeras' />
        <img className='row-span-3 object-cover w-full h-full p-2 rounded-2xl' src={foto4} alt='Playa paradisíaca' />
        <img className='row-span-2 object-cover w-full h-full p-2 rounded-2xl' src={foto5} alt='Sillas en la orilla' />
      </div>

      {/* Lado derecho — texto y botones */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Planea tu próximo destino</h3>
        <p className='text-xl py-6 text-gray-600'>
          Descubre lugares increíbles y vive experiencias inolvidables en los destinos más
          sorprendentes del mundo.
        </p>
        <p className='pb-6 text-gray-500 leading-relaxed'>
          Explora playas paradisíacas, paisajes únicos y aventuras diseñadas para cada tipo de
          viajero. Encuentra inspiración, organiza tu itinerario y comienza a planificar el viaje
          que siempre has soñado.
        </p>
        <div className='flex gap-4 flex-wrap'>
          <button
            onClick={() => setLeerMasOpen(true)}
            className='border-black hover:shadow-xl hover:bg-gray-50 transition-all duration-200'
          >
            Leer más
          </button>
          <button
            onClick={() => onOpenBooking()}
            className='bg-black text-white border-black hover:bg-gray-800 hover:shadow-xl transition-all duration-200'
          >
            Reserva tu viaje
          </button>
        </div>
      </div>

      {/* Modal: Leer más */}
      <Modal isOpen={leerMasOpen} onClose={() => setLeerMasOpen(false)} title='Nuestros destinos' size='lg'>
        <div className='p-5'>
          <p className='text-gray-500 mb-6 leading-relaxed'>
            Viaja con nosotros a los rincones más impresionantes del planeta. Cada destino está
            cuidadosamente seleccionado para ofrecerte la experiencia perfecta.
          </p>

          {/* Destinos destacados */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
            {destinos.map((d) => (
              <div key={d.name} className='relative rounded-xl overflow-hidden h-44 group cursor-pointer'>
                <img
                  src={d.img}
                  alt={d.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                <div className='absolute bottom-3 left-3'>
                  <span className='text-yellow-400 text-xs font-semibold uppercase tracking-wide'>
                    {d.tag}
                  </span>
                  <p className='text-white font-bold text-lg leading-tight'>{d.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Por qué elegirnos */}
          <h5 className='font-bold text-gray-800 text-lg mb-4 flex items-center gap-2'>
            <BsStarFill className='text-yellow-500' /> ¿Por qué elegirnos?
          </h5>
          <div className='space-y-3 mb-6'>
            {ventajas.map((v) => (
              <div
                key={v.text}
                className='flex items-center gap-3 text-gray-600 bg-gray-50 rounded-xl px-4 py-3'
              >
                {v.icon}
                <span className='text-sm'>{v.text}</span>
              </div>
            ))}
          </div>

          <div className='pt-4 border-t border-gray-100'>
            <button
              onClick={() => { setLeerMasOpen(false); onOpenBooking(); }}
              className='w-full bg-yellow-500 text-black font-bold border-yellow-500 py-3 text-base hover:bg-yellow-400 transition-colors duration-200'
            >
              Planear mi viaje ahora
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default Plan;
