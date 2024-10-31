// src/components/UserMenu.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaUserCog, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-700 hover:text-gray-500 focus:outline-none"
        onClick={toggleMenu}
      >
        <Image
          src="/user-avatar.jpg" // Replace with your user avatar path
          alt="User Avatar"
          width={24} // Set the width for the image
          height={24} // Set the height for the image
          className="rounded-full mr-1 border border-gray-300"
        />
        <span className="hidden sm:inline font-semibold">John Doe</span>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        >
          <div className="py-1">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FaUserCog className="mr-2" /> Settings
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FaUserPlus className="mr-2" /> Add Account
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
