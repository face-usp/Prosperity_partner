import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Navigation Links */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <a href="#home" className="mr-4 hover:underline">
            Home
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="mailto:prosperitypartners@example.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="mt-4 sm:mt-0 text-sm text-center sm:text-right">
          &copy; {new Date().getFullYear()} Prosperity Partners. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
