import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
    <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
      <div>
        <h6 className='font-bold uppercare pt-2'>Soluciones</h6>
        <ul>
          <li className='py-1'>Viajes</li>
          <li className='py-1'>Reservas</li>
          <li className='py-1'>Vuelos</li>
          <li className='py-1'>Cruceros</li>
    
        </ul>
      </div>
      <div>
        <h6 className='font-bold uppercare pt-2'>Soporte</h6>
        <ul>
          <li className='py-1'>Precio</li>
          <li className='py-1'>Documentacion</li>
          <li className='py-1'>Tours</li>
          <li className='py-1'>Reembolsos</li>
        </ul>
      </div>
      <div>
        <h6 className='font-bold uppercare pt-2'>Nosotros</h6>
        <ul>
          <li className='py-1'>Sobre nosotros</li>
          <li className='py-1'>Blog</li>
          <li className='py-1'>Trabaja con nosotros!</li>
          <li className='py-1'>Prensa</li>
          <li className='py-1'>Socios</li>
        </ul>
      </div>
      <div>
        <h6 className='font-bold uppercare pt-2'>Legal</h6>
        <ul>
          <li className='py-1'>Reclamos</li>
          <li className='py-1'>Privacidad</li>
          <li className='py-1'>Terminos</li>
          <li className='py-1'>Politicas</li>
          <li className='py-1'>Condiciones</li>
        </ul>
      </div>
      <div className='col-span-2 py-8 md:pt-2'>
        <p className='font-bold uppercase'>Suscríbete con nosotros</p>
        <p className='py-4'>
         
Para recibir Las últimas ofertas, artículos y recursos enviados a su bandeja de entrada semanalmente
        </p>
        <form className='flex flex-col sm:flex-row'>
          <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
          <button className='p-2 mb-4 rounded-md'>Subscribe</button>
        </form>
      </div>
    </div>

    <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
      <p className='py-4'>2022 Experiences, LLC. All rights reserved - David Vanegas</p>
      <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <TiSocialPinterest size={30} />
      </div>
    </div>
  </div>
  )
}

export default Footer