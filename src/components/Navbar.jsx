import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Destinos', href: '#plan' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Galería', href: '#galeria' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Overlay mobile: desliza desde arriba con easing elástico */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900 flex flex-col items-center justify-center md:hidden
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${nav
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <ul className='flex flex-col items-center gap-8'>
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className={`transition-all duration-[380ms] ease-out ${
                nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: nav ? `${0.18 + index * 0.07}s` : '0s' }}
            >
              <a
                href={link.href}
                onClick={closeNav}
                className='text-white font-bold text-3xl hover:text-yellow-400 transition-colors duration-200'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón CTA — último en aparecer */}
        <div
          className={`mt-10 transition-all duration-[380ms] ease-out ${
            nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: nav ? `${0.18 + navLinks.length * 0.07}s` : '0s' }}
        >
          <a href='#habitaciones' onClick={closeNav}>
            <button className='bg-yellow-500 text-black font-bold border-yellow-500 text-xl px-10 py-3 hover:bg-yellow-400 transition-colors duration-200'>
              Reserva ya
            </button>
          </a>
        </div>
      </div>

      {/* Header — z-50, siempre visible encima del overlay */}
      <header
        className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
          scrolled || nav ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
        }`}
      >
        <a href='#inicio' onClick={closeNav}>
          <h1 className='text-white font-bold text-2xl tracking-wide'>Viajes & Viajes</h1>
        </a>

        {/* Links desktop */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-white font-medium hover:text-yellow-400 transition-colors duration-200'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a href='#habitaciones' className='hidden md:block'>
          <button className='bg-yellow-500 text-black font-semibold border-yellow-500 hover:bg-yellow-400 transition-colors duration-200'>
            Reserva ya
          </button>
        </a>

        {/* Toggle con rotación */}
        <button
          onClick={handleNav}
          className='md:hidden border-0 bg-transparent text-white p-0'
          aria-label={nav ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`block transition-transform duration-300 ${nav ? 'rotate-90' : 'rotate-0'}`}>
            {nav ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </span>
        </button>
      </header>
    </>
  );
};

export default Navbar;
