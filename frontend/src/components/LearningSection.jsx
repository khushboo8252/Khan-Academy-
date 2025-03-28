import React from "react";

const LearningSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-10">
      {/* Left Side - Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-10">
          Learners and Students
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-2 leading-snug">
          <span className="bg-green-200 px-2 rounded-md text-gray-900">You</span>{" "}
          can learn <br /> anything.
        </h2>
        <p className="text-gray-900 text-md mt-4">
          Build a deep, solid understanding in math, science, grammar, history,
          SAT®, and more.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
          Learners, start here
        </button>
      </div>

      {/* Right Side - Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png"
          alt="Learning Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default LearningSection;
