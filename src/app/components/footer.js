'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Favor Leo. All rights reserved. Designed by BMU
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com/favorart999" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-green transition" />
          </Link>
          <Link href="https://x.com/favorleo_" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-green transition" />
          </Link>
          <Link href="https://instagram.com/favor.__" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-green transition" />
          </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
