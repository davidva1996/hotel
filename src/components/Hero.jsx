import React from 'react';
import Principal from '../assets/maldives-ile-beach-sun.jpeg';

const Hero = () => {
  return (
    <div id='inicio' className='w-full h-screen relative'>
      <img
        className='absolute top-0 left-0 w-full h-screen object-cover'
        src={Principal}
        alt='Playa privada en Maldivas al atardecer'
      />
      <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black/75 via-black/45 to-black/10' />

      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='max-w-[1100px] mx-auto px-6 md:px-10'>

          <p className='fade-in-up text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-3'>
            All Inclusive
          </p>

          <h1 className='fade-in-up-1 font-bold text-5xl md:text-7xl drop-shadow-2xl leading-tight'>
            Playas privadas <br className='hidden md:block' />& mucho más
          </h1>

          <p className='fade-in-up-2 max-w-[580px] py-5 text-lg text-gray-100 [text-shadow:_0_2px_8px_rgb(0_0_0_/_70%)]'>
            Descubre el paraíso que siempre soñaste. Resorts exclusivos, playas de
            ensueño y experiencias únicas te esperan en cada destino.
          </p>

          <div className='fade-in-up-3 flex flex-wrap gap-4'>
            <a href='#habitaciones'>
              <button className='bg-yellow-500 text-black font-bold border-yellow-500 hover:bg-yellow-400 transition-colors duration-200 text-base px-6 py-3'>
                Reserva ya
              </button>
            </a>
            <a href='#plan'>
              <button className='bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-200 text-base px-6 py-3'>
                Ver destinos
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
