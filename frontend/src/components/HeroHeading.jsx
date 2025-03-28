import React from 'react';

const HeroHeading = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_1x.png" 
          alt="Students Collage" 
          className="w-50 h-auto"
        />
      </div>
      
      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl  font-bold leading-tight text-gray-900">
          For every student, <br /> every classroom. <br /> Real results.
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
        </p>
        
        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <button className="px-6 py-3 w-40 bg-blue-500 text-white rounded-md hover:bg-blue-600">Learners</button>
          <button className="px-6 py-3 w-40 bg-blue-500 text-white rounded-md hover:bg-blue-600">Teachers</button>
          <button className="px-6 py-3 w-40 bg-blue-500 text-white rounded-md hover:bg-blue-600">Parents</button>
        </div>
      </div>
    </div>
  );
};

export default HeroHeading;
