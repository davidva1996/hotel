import React from 'react'
import habitacion1 from '../assets/habitacion-1.png'
import habitacion2 from '../assets/habitacion-2.png'
import habitacion3 from '../assets/habitacion-3.png'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[800px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[5%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
    <div className='lg:top-20 relative lg:col-span-1 col-span-2 text-center'>
      <h3 className='text-2xl font-bold'>Nuestras habitaciones</h3>
      <p className='pt-4'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
        rerum iusto excepturi similique minus?
      </p>
    </div>

    <div className='grid grid-cols-2 col-span-2 gap-2'>
      <img
      className='object-cover w-full h-full'
        src={habitacion1}
        alt='/'
      />
      <img
      className='row-span-2 object-cover w-full h-full'
        src={habitacion2}
        alt='/'
      />
      <img
      className='object-cover w-full h-full'
        src={habitacion3}
        alt='/'
      />
    </div>
  </div>
  )
}

export default Rooms