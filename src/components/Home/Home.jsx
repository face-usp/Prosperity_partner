import React from "react";
import BackGround1 from "../../assets/BackGround1.jpg";

const Home = () => {
  return (
    <div className="pt-[80px]">
      <div className="relative overflow-hidden p-8 sm:p-6 md:p-8 w-full  h-[650px]">
        <img
          src={BackGround1}
          alt="Background"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-30 left-12">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight max-w-3xl">
              Driven by Trust,
              <br />
              Built on Expertise
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              We are a client-focused mutual fund distributor committed
              <br />
              to providing transparent, goal-based investment solutions.
            </p>

            <button className="bg-amber-400 text-black px-5 py-3 text-sm sm:text-base rounded shadow-md hover:bg-amber-200 transition">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
