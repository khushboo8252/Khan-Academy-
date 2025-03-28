import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Left Section - Logo & Explore */}
        <div className="flex items-center space-x-4">
          <button className="text-blue-700 hover:text-blue-900">Explore</button>
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search for subjects, classes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
              alt="Search Icon"
              className="w-5 h-5 absolute left-3 top-2.5"
            />
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8"
            src="https://www.pngrepo.com/png/353965/180/khan-academy-icon.png"
            alt="Khan Academy Logo"
          />
          <a href="/" className="text-lg font-semibold text-blue-400 hover:text-blue-500 hidden sm:block">
            Khan Academy
          </a>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => navigate("/donate")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Donate
          </button>
          <button onClick={() => navigate("/login")} className="text-blue-700 hover:text-blue-900">
            Log in
          </button>
          <button onClick={() => navigate("/signup")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700 hover:text-blue-900">
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
          <button onClick={() => navigate("/donate")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Donate
          </button>
          <button onClick={() => navigate("/login")} className="text-blue-700 hover:text-blue-900">
            Log in
          </button>
          <button onClick={() => navigate("/signup")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
