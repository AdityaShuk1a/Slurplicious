import React from 'react';
import Slurp from '../assets/Slurp.png'

const Navbar = () => {
  return (
    <div className="w-screen h-20 bg-blue-600 shadow-md z-9">
      <div className="flex justify-between items-center h-full p-5">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Slurp}
            className="h-20"
            alt="slurp logo"
          />
        </div>
        <div className="flex space-x-8 text-white text-xl font-semibold">
          <div className="hover:text-gray-300 cursor-pointer">Home</div>
          <div className="hover:text-gray-300 cursor-pointer">Contact</div>
          <div className="hover:text-gray-300 cursor-pointer">About</div>
          <div className="hover:text-gray-300 cursor-pointer">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
