import React, { useState } from 'react';
import Modal from './Modal';
import { BsCheckCircleFill } from 'react-icons/bs';

const initialForm = {
  destino: '',
  checkin: '',
  checkout: '',
  huespedes: '2',
  habitacion: '',
  nombre: '',
  email: '',
  mensaje: '',
};

const BookingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 300);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='Reserva tu viaje' size='md'>
      <div className='p-5'>
        {submitted ? (
          <div className='py-10 text-center'>
            <BsCheckCircleFill className='text-green-500 mx-auto mb-4' size={56} />
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>¡Reserva recibida!</h3>
            <p className='text-gray-500 max-w-[320px] mx-auto leading-relaxed'>
              Nos pondremos en contacto contigo en las próximas 24 horas para confirmar todos
              los detalles de tu viaje.
            </p>
            <button
              onClick={handleClose}
              className='mt-8 bg-yellow-500 text-black font-bold border-yellow-500 px-10 py-3 hover:bg-yellow-400 transition-colors duration-200'
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Destino</label>
                <select
                  name='destino'
                  value={form.destino}
                  onChange={handleChange}
                  required
                  className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 bg-white'
                >
                  <option value=''>Selecciona...</option>
                  <option>Maldivas</option>
                  <option>Bali, Indonesia</option>
                  <option>Cancún, México</option>
                  <option>Phuket, Tailandia</option>
                  <option>Santorini, Grecia</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Habitación</label>
                <select
                  name='habitacion'
                  value={form.habitacion}
                  onChange={handleChange}
                  required
                  className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 bg-white'
                >
                  <option value=''>Selecciona...</option>
                  <option>Suite Deluxe</option>
                  <option>Villa Premium</option>
                  <option>Cabaña Romántica</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Check-in</label>
                <input
                  type='date'
                  name='checkin'
                  value={form.checkin}
                  onChange={handleChange}
                  required
                  className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Check-out</label>
                <input
                  type='date'
                  name='checkout'
                  value={form.checkout}
                  onChange={handleChange}
                  required
                  className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Huéspedes</label>
                <select
                  name='huespedes'
                  value={form.huespedes}
                  onChange={handleChange}
                  className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 bg-white'
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Nombre completo</label>
              <input
                type='text'
                name='nombre'
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder='Juan Pérez'
                className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Correo electrónico</label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                placeholder='tu@correo.com'
                className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Mensaje adicional{' '}
                <span className='text-gray-400 font-normal'>(opcional)</span>
              </label>
              <textarea
                name='mensaje'
                value={form.mensaje}
                onChange={handleChange}
                rows={3}
                placeholder='Preferencias especiales, celebraciones...'
                className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-yellow-400 resize-none'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-yellow-500 text-black font-bold border-yellow-500 py-3 text-base hover:bg-yellow-400 transition-colors duration-200 mt-2'
            >
              Confirmar reserva
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default BookingModal;
