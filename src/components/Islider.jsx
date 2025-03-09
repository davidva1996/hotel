import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import slider1 from '../assets/slider-1.png';
import slider2 from '../assets/slider-2.png';
import slider3 from '../assets/slider-3.png';
import slider4 from '../assets/slider-4.png';

const Islider = () => {
  const slides = [
    { url: slider1, title: 'Lobster' },
    { url: slider2, title: 'Sushi' },
    { url: slider3, title: 'Pasta' },
    { url: slider4, title: 'Salmon' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <img
        src={slides[currentIndex].url}
        alt={slides[currentIndex].title}
        className='w-full h-full rounded-2xl object-cover'
      />

      {/* Left Arrow */}
      <div
        className='absolute top-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className='absolute top-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots */}
      <div className='flex justify-center py-2'>
        {slides.map((_, index) => (
          <RxDotFilled
            key={index}
            className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-black' : 'text-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Islider;
