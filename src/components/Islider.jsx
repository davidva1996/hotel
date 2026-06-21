import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import slider1 from '../assets/slider-1.png';
import slider2 from '../assets/slider-2.png';
import slider3 from '../assets/slider-3.png';
import slider4 from '../assets/slider-4.png';

const slides = [
  { url: slider1, title: 'Langosta al Grill',   subtitle: 'Mariscos frescos del día' },
  { url: slider2, title: 'Sushi Premium',        subtitle: 'Cocina japonesa de autor' },
  { url: slider3, title: 'Pasta Artesanal',      subtitle: 'Recetas italianas tradicionales' },
  { url: slider4, title: 'Salmón Noruego',       subtitle: 'Del océano a tu mesa' },
];

const Islider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered]       = useState(false);
  const touchStartX = useRef(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Autoplay — se pausa al hacer hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  // Swipe en mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className='max-w-[1400px] mx-auto px-4 py-16'>

      {/* Encabezado de sección */}
      <div className='text-center mb-8'>
        <h3 className='text-4xl font-bold text-gray-800'>Nuestra gastronomía</h3>
        <p className='text-gray-500 mt-3 max-w-[500px] mx-auto'>
          Una experiencia culinaria única, con los mejores ingredientes y sabores del mundo.
        </p>
      </div>

      {/* Slider */}
      <div
        className='relative h-[500px] rounded-2xl overflow-hidden select-none'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Imagen con fade + leve zoom al entrar */}
        <img
          key={currentIndex}
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
          className='w-full h-full object-cover slide-fade'
        />

        {/* Gradiente inferior */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />

        {/* Título del plato */}
        <div className='absolute bottom-14 left-6 text-white'>
          <p className='text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1'>
            {slides[currentIndex].subtitle}
          </p>
          <h4 className='text-3xl font-bold drop-shadow-lg'>{slides[currentIndex].title}</h4>
        </div>

        {/* Flecha izquierda — centrada verticalmente */}
        <button
          onClick={prev}
          className='absolute top-1/2 -translate-y-1/2 left-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 border-0 transition-all duration-200'
          aria-label='Anterior'
        >
          <BsChevronCompactLeft size={28} />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={next}
          className='absolute top-1/2 -translate-y-1/2 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 border-0 transition-all duration-200'
          aria-label='Siguiente'
        >
          <BsChevronCompactRight size={28} />
        </button>

        {/* Dots tipo píldora — el activo se estira */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full border-0 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-400 w-6 h-2'
                  : 'bg-white/60 hover:bg-white w-2 h-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Islider;
