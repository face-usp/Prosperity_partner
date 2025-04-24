import React from "react";
import logoBg from "../../assets/logoBg.png";

const Navbar = () => {
  return (
    <div className="relative">
      {/* Navbar stays on top */}
      <div className="fixed top-0 left-0 w-full bg-white z-20 shadow-md">
        <div className="flex items-center justify-between px-4 py-4 sm:py-6">
          {/* Centered logo + title */}
          <a
            href="#"
            className="flex items-center gap-2 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"
          >
            <img src={logoBg} alt="Logo" className="h-[50px] w-[50px]" />
            <h1 className="font-bold text-lg sm:text-2xl whitespace-nowrap">
              Prosperity Partners
            </h1>
          </a>

          {/* Right nav links */}
          <div className="ml-auto flex items-center gap-6 text-sm sm:text-base font-medium">
            <a href="#home" className="hover:text-amber-600 transition">
              Home
            </a>
            <a href="#services" className="hover:text-amber-600 transition">
              Services
            </a>
            <a href="#about" className="hover:text-amber-600 transition">
              About
            </a>
            <a href="#contact" className="hover:text-amber-600 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
