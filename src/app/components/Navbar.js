'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '/physical-art', label: 'Physical Art' },
    { href: '#blog', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
    { href:'/store', label:'Store'}
  ];

  return (
    <div className="sticky top-0 left-0 w-full z-50">
      <nav className="bg-dark bg-opacity-90 backdrop-blur-md w-full md:w-[90%] mx-auto px-4 md:rounded-lg mt-0 md:mt-6">
        <div className="w-full flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white  font-bold text-xl">
            <Link href="/">Favor <span className='text-green'>Leo</span></Link>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white hover:bg-green rounded"
              onClick={toggleNavbar}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 transition-transform ${
                  menuOpen ? 'rotate-45' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-normal text-neutral-400 hover:text-green"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
            menuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pt-2 pb-4 space-y-1">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm text-white hover:text-green"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
