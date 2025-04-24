import React from "react";
import dummy_profile from "../../assets/dummy_profile.jpg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-2 md:mb-0 md:mr-4">
        <img
          src={dummy_profile}
          alt="Your Name"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed drop-shadow-md text-justify">
          Mr. Deepak Shah, Founder of Prosperity Partners, combines 21 years of
          engineering experience with a passion for investments. Today, he
          manages 200+ clients, offering strategic, goal-driven financial
          planning with a personal touch.
        </p>
      </div>
    </div>
  );
};

export default About;
