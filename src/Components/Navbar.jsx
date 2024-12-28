import React, { useState } from 'react';
import { menuItems } from '../Config/menu';
import LogoCN from '../Images/LogoCorsaNera.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <img src={LogoCN} alt="Corsa Nera Logo" className="h-14 w-auto" />
          <span className="text-2xl font-extrabold text-black tracking-wide uppercase">
            Corsa Nera
          </span>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-lg font-medium text-black hover:text-gray-500 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block px-4 py-2 text-black hover:bg-gray-100 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
