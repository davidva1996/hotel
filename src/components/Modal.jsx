import React, { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

const Modal = ({ isOpen, onClose, title, children, size = 'lg' }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    md: 'max-w-[560px]',
    lg: 'max-w-[780px]',
    xl: 'max-w-[960px]',
  };

  return (
    <div
      className='fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm modal-backdrop'
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-t-3xl sm:rounded-2xl w-full ${sizes[size]} max-h-[92vh] overflow-y-auto modal-content shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fijo al hacer scroll interno */}
        <div className='flex justify-between items-center px-5 py-4 border-b border-gray-100 sticky top-0 bg-white z-10'>
          <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
          <button
            onClick={onClose}
            className='border-0 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200 p-2 rounded-full'
          >
            <HiX size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
