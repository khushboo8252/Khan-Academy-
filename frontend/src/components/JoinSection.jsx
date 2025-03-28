import React from "react";

const JoinSection = () => {
  return (
    <div className="relative bg-white py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center max-w-4xl mx-auto">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Join Khan Academy today
      </h2>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {["Learners", "Teachers", "Parents", "Give today"].map((text, index) => (
          <button
            key={index}
            className="bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {text}
          </button>
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute left-10 top-20 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-32 h-16 md:w-40 md:h-20 bg-gray-200 opacity-75 transform rotate-6"></div>
    </div>
  );
};

export default JoinSection;
