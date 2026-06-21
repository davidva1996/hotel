import React, { useState } from 'react';
import habitacion1 from '../assets/habitacion-1.png';
import habitacion2 from '../assets/habitacion-2.png';
import habitacion3 from '../assets/habitacion-3.png';
import foto1 from '../assets/foto-1.png';
import foto2 from '../assets/foto-2.png';
import foto3 from '../assets/foto-3.png';
import foto4 from '../assets/foto-4.png';
import foto5 from '../assets/foto-5.png';
import slider1 from '../assets/slider-1.png';
import Modal from './Modal';
import { BsWifi, BsSnow, BsTv, BsCupHot, BsWater, BsPersonFill, BsHouseDoor } from 'react-icons/bs';
import { FaSwimmingPool, FaUmbrellaBeach, FaHotTub, FaLeaf } from 'react-icons/fa';

const rooms = [
  {
    img: habitacion1,
    gallery: [habitacion1, foto1, foto2],
    name: 'Suite Deluxe',
    desc: 'Amplia suite con vista al mar, cama king size y terraza privada.',
    fullDesc:
      'Disfruta de una experiencia única en nuestra Suite Deluxe, diseñada con los más altos estándares de lujo. Cuenta con vista panorámica al mar, cama king size de plumas, jacuzzi privado y una terraza exclusiva donde podrás ver el amanecer sobre el océano.',
    price: '$180',
    size: '65 m²',
    guests: 2,
    amenities: [
      { label: 'WiFi gratis', icon: <BsWifi /> },
      { label: 'Aire acond.', icon: <BsSnow /> },
      { label: 'TV 4K', icon: <BsTv /> },
      { label: 'Desayuno incl.', icon: <BsCupHot /> },
      { label: 'Vista al mar', icon: <BsWater /> },
      { label: 'Jacuzzi', icon: <FaHotTub /> },
    ],
  },
  {
    img: habitacion2,
    gallery: [habitacion2, foto3, foto4],
    name: 'Villa Premium',
    desc: 'Villa exclusiva con piscina privada y acceso directo a la playa.',
    fullDesc:
      'Nuestra Villa Premium es el máximo símbolo de exclusividad. Disfruta de tu propia piscina infinita con vista al mar, acceso privado a la playa, sala de estar independiente y servicio de mayordomo las 24 horas. Perfecta para una escapada sin igual.',
    price: '$320',
    size: '120 m²',
    guests: 4,
    amenities: [
      { label: 'WiFi gratis', icon: <BsWifi /> },
      { label: 'Aire acond.', icon: <BsSnow /> },
      { label: 'TV 4K', icon: <BsTv /> },
      { label: 'Desayuno incl.', icon: <BsCupHot /> },
      { label: 'Piscina privada', icon: <FaSwimmingPool /> },
      { label: 'Acceso a la playa', icon: <FaUmbrellaBeach /> },
    ],
  },
  {
    img: habitacion3,
    gallery: [habitacion3, foto5, slider1],
    name: 'Cabaña Romántica',
    desc: 'Cabaña íntima rodeada de naturaleza, ideal para parejas.',
    fullDesc:
      'Nuestra Cabaña Romántica está diseñada para el amor y la intimidad. Rodeada de naturaleza exuberante, ofrece una atmósfera cálida con detalles artesanales únicos. Perfecta para aniversarios, lunas de miel o simplemente para reconectar en pareja.',
    price: '$240',
    size: '45 m²',
    guests: 2,
    amenities: [
      { label: 'WiFi gratis', icon: <BsWifi /> },
      { label: 'Aire acond.', icon: <BsSnow /> },
      { label: 'TV 4K', icon: <BsTv /> },
      { label: 'Desayuno incl.', icon: <BsCupHot /> },
      { label: 'Terraza privada', icon: <BsHouseDoor /> },
      { label: 'Entorno natural', icon: <FaLeaf /> },
    ],
  },
];

const Rooms = ({ onOpenBooking }) => {
  const [selected, setSelected] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const openRoom = (room) => {
    setSelected(room);
    setActiveImg(0);
  };

  const closeRoom = () => {
    setSelected(null);
    setActiveImg(0);
  };

  return (
    <div className='max-w-[1400px] mx-auto px-4 py-16'>
      <div className='text-center mb-12'>
        <h3 className='text-4xl font-bold text-gray-800'>Nuestras habitaciones</h3>
        <p className='text-gray-500 mt-3 max-w-[500px] mx-auto'>
          Espacios diseñados para tu descanso y confort, con vistas y servicios exclusivos.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {rooms.map((room) => (
          <div
            key={room.name}
            className='group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white'
          >
            <div className='overflow-hidden h-64'>
              <img
                src={room.img}
                alt={room.name}
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='p-6'>
              <h4 className='text-xl font-bold text-gray-800'>{room.name}</h4>
              <p className='text-gray-500 text-sm mt-2 mb-5 leading-relaxed'>{room.desc}</p>
              <div className='flex items-center justify-between'>
                <p className='text-gray-400 text-sm'>
                  Desde <span className='text-gray-800 font-bold text-lg'>{room.price}</span>
                  <span className='text-gray-400'> / noche</span>
                </p>
                <button
                  onClick={() => openRoom(room)}
                  className='bg-yellow-500 text-black font-semibold border-yellow-500 text-sm hover:bg-yellow-400 transition-colors duration-200'
                >
                  Ver habitación
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal detalle de habitación */}
      <Modal isOpen={!!selected} onClose={closeRoom} title={selected?.name || ''} size='lg'>
        {selected && (
          <div className='p-5'>
            {/* Imagen principal */}
            <div className='rounded-xl overflow-hidden h-60 sm:h-80 mb-3'>
              <img
                src={selected.gallery[activeImg]}
                alt={selected.name}
                className='w-full h-full object-cover transition-all duration-300'
              />
            </div>

            {/* Miniaturas */}
            <div className='flex gap-2 mb-6'>
              {selected.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`rounded-lg overflow-hidden h-16 flex-1 border-2 transition-all duration-200 p-0 ${
                    activeImg === i ? 'border-yellow-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt='' className='w-full h-full object-cover' />
                </button>
              ))}
            </div>

            {/* Detalles rápidos */}
            <div className='flex gap-4 text-sm text-gray-500 mb-3'>
              <span className='flex items-center gap-1'>
                <BsPersonFill className='text-yellow-500' /> {selected.guests} huéspedes
              </span>
              <span>•</span>
              <span>{selected.size}</span>
            </div>

            <p className='text-gray-600 leading-relaxed mb-6'>{selected.fullDesc}</p>

            {/* Amenidades */}
            <h5 className='font-bold text-gray-800 mb-3'>Incluye</h5>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6'>
              {selected.amenities.map((a) => (
                <div
                  key={a.label}
                  className='flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-xl px-3 py-2'
                >
                  <span className='text-yellow-500'>{a.icon}</span>
                  {a.label}
                </div>
              ))}
            </div>

            {/* CTA final */}
            <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
              <div>
                <p className='text-gray-400 text-xs mb-0.5'>Precio por noche</p>
                <p className='text-2xl font-bold text-gray-800'>{selected.price}</p>
              </div>
              <button
                onClick={() => { closeRoom(); onOpenBooking(); }}
                className='bg-yellow-500 text-black font-bold border-yellow-500 text-base px-8 py-3 hover:bg-yellow-400 transition-colors duration-200'
              >
                Reservar ahora
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Rooms;
