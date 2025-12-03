import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nama Brand */}
        <Link to="/" className="text-2xl font-bold text-brand-text tracking-wider">
          Photo STUDIO
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-brand-accent transition-colors">Home</Link>
          <Link to="/gallery" className="text-gray-600 hover:text-brand-accent transition-colors">Gallery</Link>
          <Link to="/services" className="text-gray-600 hover:text-brand-accent transition-colors">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-brand-accent transition-colors">Contact</Link>
        </div>

        {/* Tombol Booking Desktop */}
        <div className="hidden md:block">
          <a href="#booking" className="bg-brand-accent text-white py-2 px-5 rounded-full hover:bg-opacity-90 transition-all">
            Book Now
          </a>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Ikon hamburger (bisa diganti SVG nanti) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile (Muncul saat diklik) */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3">
          <Link to="/" className="block text-gray-600">Home</Link>
          <Link to="/gallery" className="block text-gray-600">Gallery</Link>
          <Link to="/services" className="block text-gray-600">Services</Link>
          <Link to="/contact" className="block text-gray-600">Contact</Link>
          <a href="#booking" className="bg-brand-accent text-white py-2 px-4 rounded-full text-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}