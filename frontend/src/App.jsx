import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

// Importing pages for navigation
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      {/* Pass searchTerm and setSearchTerm to Navbar */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Routes>
        {/* Home Page - Passing searchTerm */}
        <Route path="/" element={<Home searchTerm={searchTerm} />} />

        {/* Other Pages */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
