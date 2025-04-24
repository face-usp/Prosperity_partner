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
        <div className="absolute bottom-50 left-25">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight max-w-3xl">
              Crafting Wealth,
              <br />
              Backed by Wisdom
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              We are a client-focused mutual fund distributor committed
              <br />
              to providing transparent, goal-based investment solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
