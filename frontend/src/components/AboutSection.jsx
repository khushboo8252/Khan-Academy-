import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row-reverse items-center justify-between w-full mx-auto">
      
      {/* Image Section (Right) */}
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <img
          src="https://cdn.kastatic.org/images/lohp/anjali-3.png"
          alt="Anjali"
          className="w-full h-full rounded-full border-4 border-white shadow-lg"
        />
        <div className="mt-4">
          <p className="font-bold text-gray-700">ANJALI</p>
          <p className="text-gray-500 text-sm">GURUGRAM, HARYANA</p>
        </div>
        <div className="absolute -bottom-2 -right-2 bg-orange-500 p-3 rounded-full"></div>
      </div>

      {/* Text Section (Left) */}
      <div className="text-left md:w-2/3">
        <p className="text-xl md:text-2xl font-serif text-gray-800">
          “When I was a child, I used to fear mathematics. But now, I am in love
          with mathematics because of Khan Academy.”
        </p>
        
      </div>
    </div>
  );
};

export default About;
