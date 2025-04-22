import React from "react";
import logoBg from "../../assets/logoBg.png";

const Navbar = () => {
  return (
    <div className="relative">
      {/* Navbar stays on top */}
      <div className="fixed top-0 left-0 w-full bg-white z-20 shadow-md">
        <div className="flex items-center justify-between px-4 py-2">
          <a href="#" className="flex items-center gap-2">
            <img src={logoBg} alt="Logo" className="h-[60px] w-[60px]" />
            <h1 className="font-bold text-xl sm:text-2xl">
              Prosperity Partners
            </h1>
          </a>
          <a href="#" className="right-0 mr-5">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
