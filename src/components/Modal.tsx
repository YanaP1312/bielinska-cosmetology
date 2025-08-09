'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { TfiClose } from 'react-icons/tfi';

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

 
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

 
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);
  


  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          aria-label="Close pop-up"
          className="absolute top-6 right-6 hover-interaction hover:text-additional hover:scale-105 transition"
        >
          <TfiClose className="w-6 h-6 fill-primary hover-interaction hover:fill-additional" />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}
