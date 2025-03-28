import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="relative w-80 h-80 flex flex-wrap items-center justify-center">
          {/* Top Image */}
          <div className="absolute top-0 left-10 w-80 h-80   overflow-hidden border-4 border-white ">
            <img
              src="https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png"
              alt="User 1"
              className="w-full h-full object-cover"
            />
          </div>
          
          
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-gray-500 text-sm uppercase tracking-wider">Teachers</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-2 leading-snug">
          “I’m finally able to truly differentiate my classroom. This has been priceless for my
          students’ engagement.”
        </h2>
        <p className="text-gray-600 text-sm mt-4">
          <span className="font-semibold text-gray-400">UDAYA LAKSHMI PALAPALA</span> / Middle School
          Coordinator / Hyderabad, Telangana
        </p>
        <p className="text-gray-900 mt-4">
          We empower teachers to support their entire classroom. 90% of US teachers who have used
          Khan Academy have found us effective.
        </p>
        <button className="mt-6 bg-blue-600  text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
          Teachers, start here
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
