// src/components/Nav.tsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import UserMenu from './UserMenu';

const Nav: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Nav Row: Logo, Search, User Menu */}
      <div className="flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-blue-600 font-bold">✈️ Travella</span>
        </div>

        {/* Search */}
        <div className="flex items-center border rounded-full px-4 py-2 space-x-2 bg-gray-100 text-gray-600">
          <span>Location Label</span>
          <span>|</span>
          <span>Duration Label</span>
          <span>|</span>
          <span>Guest Label</span>
          <FaSearch className="text-pink-500 cursor-pointer" />
        </div>

        {/* User Menu */}
        <UserMenu />
      </div>

      {/* Bottom Nav Row: Categories */}
      <div className="flex items-center justify-center space-x-8 py-3 px-8 bg-gray-50 text-gray-700 text-sm border-t border-gray-200">
        {["Beach", "Windmills", "Modern", "Countryside", "Pools", "Islands", "Lake", "Skiing", "Castles", "Caves", "Camping", "Arctic", "Desert", "Barns", "Lux"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-blue-600 transition-colors duration-200 flex flex-col items-center"
          >
            <span>{item}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
