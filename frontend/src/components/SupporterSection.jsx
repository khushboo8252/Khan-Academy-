import React from "react";

const SupportersSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
        Key supporters
      </h2>

      {/* Supporters Grid */}
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-center max-w-4xl mx-auto">
        <img src="	https://cdn.kastatic.org/images/supporters-logos/bank-of-america-dark-gray@2x.png" alt="Bank of America" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/college-board-dark-gray@2x.png" alt="College Board" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/ann-and-john-doerr-dark-gray@2x.png" alt="Ann & John Doerr" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/gates-foundation-dark-gray@2x.png" alt="Bill & Melinda Gates Foundation" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/lemann-foundation-dark-gray@2x.png
" alt="Lemann Foundation" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/carlos-rodriguez-pastor-dark-gray@2x.png" alt="Carlos Rodriguez-Pastor" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/tata-trusts-dark-gray@2x.png" alt="Tata Trusts" className="h-12 mx-auto mr-8" />
        <img src="https://cdn.kastatic.org/images/supporters-logos/valhalla-dark-gray@2x.png" alt="Valhalla Foundation" className="h-12 mx-auto mr-8" />
      </div>

      
    </div>
  );
};

export default SupportersSection;
