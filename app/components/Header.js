// app/components/Header.js
"use client";
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-br from-[#005f73] to-[#0a9396] text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo Centered */}
        <div className="flex-1 text-center">
          <Link href="/" className="text-2xl font-bold hover:text-[#ec9a01] transition-colors duration-300">LOGO</Link>
        </div>

        {/* Menu Icon - Show on Mobile and Desktop up to 1280px */}
        <div className="flex xl:hidden"> 
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile and Desktop View */}
      {isOpen && (
        <nav className="bg-gradient-to-br from-[#005f73] to-[#0a9396] text-white text-center py-4">
          {['Home', 'About', 'Umrah', 'Services', 'Tour & Packages', 'Visa Consultancy', 'Instant Inquiry', 'Customer Feedback'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="block py-2 text-lg hover:text-[#ec9a01] transition-colors duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
