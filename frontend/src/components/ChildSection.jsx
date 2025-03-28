import React from "react";

const ChildSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-16 mt-16 lg:px-24 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      
      {/* Left Side - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="https://cdn.kastatic.org/images/lohp/math-unicorn-donate-collage.png"
          alt="Child Learning"
          className="w-80 md:w-96 rounded-lg shadow-lg"
        />
        <div className="absolute -top-4 -left-6 w-32 h-20 bg-yellow-400 rotate-6 opacity-75"></div>
        <div className="absolute -bottom-4 -right-6 w-40 h-24 bg-orange-500 rotate-3 opacity-50"></div>
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-center ml-24 md:text-left mt-10 md:mt-0">
        <p className="text-gray-500 uppercase text-sm mb-10 tracking-widest">
          Together we can make a difference
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          <span className="underline decoration-blue-400">Every child</span> deserves
          the chance to learn.
        </h2>
        <p className="text-gray-600 mt-4">
          Across the globe, 617 million children are missing basic math and reading
          skills. We're a nonprofit delivering the education they need, and we need your help.
          You can change the course of a child’s life.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Give them the chance
        </button>
      </div>

    </div>
  );
};

export default ChildSection;
