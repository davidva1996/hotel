import React from 'react'
import foto1 from '../assets/foto-1.png'
import foto2 from '../assets/foto-2.png'
import foto3 from '../assets/foto-3.png'
import foto4 from '../assets/foto-4.png'
import foto5 from '../assets/foto-5.png'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
    {/* Left Side */}
    <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
      <img
        className='row-span-3 object-cover w-full h-full p-2'
        src={foto1 }
        alt='/'
      />
      <img
        className='row-span-2 object-cover w-full h-full p-2'
        src= {foto2}
        alt='/'
      />
      <img
        className='row-span-2 object-cover w-full h-full p-2'
        src={foto3}
        alt='/'
      />
      <img
        className='row-span-3 object-cover w-full h-full p-2'
        src={foto4}
        alt='/'
      />
      <img
        className='row-span-2 object-cover w-full h-full p-2'
        src={foto5}
        alt='/'
      />
    </div>
    {/* Right Side */}
    <div className='flex flex-col h-full justify-center'>
      <h3 className='text-5xl md:text-6xl font-bold'>Planea tu proximo destino</h3>
      <p className='text-2xl py-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        nam?
      </p>
      <p className='pb-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
        voluptates nostrum dolorum reprehenderit error! Doloribus est illo
        eius saepe? Molestias sapiente perspiciatis doloribus consectetur
        nihil facilis aliquid eaque vel quisquam.
      </p>
      <div>
        <button className='border-black mr-4 hover:shadow-xl'>
          Leer mas
        </button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Reserva tu viaje</button>
      </div>
    </div>
  </div>
  )
}

export default Plan