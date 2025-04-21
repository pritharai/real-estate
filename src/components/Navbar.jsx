import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 w-full z-50 bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
