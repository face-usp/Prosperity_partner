import React from "react";
import { User } from "lucide-react"; // Optional: Replace with image if needed

const Feedback = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6 md:px-12 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full">
        
        {/* Left Side: User Icon */}
        <div className="bg-amber-100 flex justify-center items-center w-full md:w-1/3 p-10">
          {/* Use <img src="..." /> here if you have user image */}
          <User size={80} className="text-amber-600" />
        </div>

        {/* Right Side: Feedback & Name */}
        <div className="w-full md:w-2/3 p-10 flex flex-col items-center justify-center text-center">
          <p className="text-gray-700 italic text-xl mb-6">
            “It's the Best Investment Engineering Firm”
          </p>
          <p className="font-semibold text-amber-600 text-lg">USP Face</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
