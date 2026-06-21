import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const footerLinks = [
  {
    title: 'Soluciones',
    links: ['Viajes', 'Reservas', 'Vuelos', 'Cruceros'],
  },
  {
    title: 'Soporte',
    links: ['Precio', 'Documentación', 'Tours', 'Reembolsos'],
  },
  {
    title: 'Nosotros',
    links: ['Sobre nosotros', 'Blog', 'Trabaja con nosotros', 'Prensa', 'Socios'],
  },
  {
    title: 'Legal',
    links: ['Reclamos', 'Privacidad', 'Términos', 'Políticas', 'Condiciones'],
  },
];

const socialLinks = [
  { icon: <FaFacebook size={20} />,       label: 'Facebook',  href: 'https://www.facebook.com' },
  { icon: <FaInstagram size={20} />,      label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: <FaTwitter size={20} />,        label: 'Twitter',   href: 'https://www.twitter.com' },
  { icon: <TiSocialPinterest size={24} />, label: 'Pinterest', href: 'https://www.pinterest.com' },
];

const Footer = () => {
  return (
    <footer className='w-full mt-1 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b border-gray-700 py-8 px-4 gap-y-8'>

        {/* Columnas de links */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h6 className='font-bold uppercase text-white text-sm tracking-wide pt-2 mb-3'>
              {col.title}
            </h6>
            <ul>
              {col.links.map((link) => (
                <li key={link} className='py-1'>
                  <a
                    href='/'
                    className='text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Suscripción */}
        <div className='col-span-2 py-2 md:pt-2'>
          <p className='font-bold uppercase text-white text-sm tracking-wide mb-3'>
            Suscríbete con nosotros
          </p>
          <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
            Recibe las últimas ofertas, artículos y recursos directamente en tu bandeja de
            entrada cada semana.
          </p>
          <form className='flex flex-col sm:flex-row gap-2' onSubmit={(e) => e.preventDefault()}>
            <input
              className='flex-1 p-2.5 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-0'
              type='email'
              placeholder='tu@correo.com'
            />
            <button className='bg-yellow-500 text-black font-semibold border-yellow-500 hover:bg-yellow-400 transition-colors duration-200 text-sm px-5 py-2.5 rounded-xl'>
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      {/* Barra inferior */}
      <div className='max-w-[1400px] px-4 py-5 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm'>
        <p>© 2024 Viajes & Viajes. Todos los derechos reservados — David Vanegas</p>

        {/* Íconos sociales con hover */}
        <div className='flex items-center gap-5'>
          {socialLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target='_blank'
              rel='noreferrer'
              className='text-gray-400 hover:text-yellow-400 hover:-translate-y-0.5 transition-all duration-200'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
