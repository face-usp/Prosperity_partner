import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-400">
            Phone: <span className="text-gray-200">+91 99601 63587</span>
          </p>
        </div>

        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="https://www.instagram.com/prosperitypartners09?igsh=MXYwZWdydnNxcHZmNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-shah-investment-planning/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:prosperitypartners@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
