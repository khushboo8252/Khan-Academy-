import React, { useState } from "react";
import Footer from "../components/Footer";

const Signup = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For success/error messages
  const [loading, setLoading] = useState(false); // Loading state

  // API Base URL
  const API_BASE_URL = "https://backend-khanacademy.onrender.com/api/auth";

  // Check if all fields are filled
  const isFormValid = name.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setLoading(true);

    if (!isFormValid) return;

    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage(`✅ Signup Successful! Welcome, ${data.user.name || "User"} 🎉`);
        setName("");
        setEmail("");
        setPassword("");
        // Store token if needed (e.g., localStorage.setItem("token", data.token))
      } else {
        setMessage(`❌ Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setLoading(false);
      setMessage("❌ Error connecting to the server. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Left Section - Image & Text */}
        <div className="hidden md:flex md:w-1/2 bg-green-900 text-white items-center justify-center p-10">
          <div className="text-center">
            <img
              src="https://www.waterford.org/wp-content/uploads/2023/11/wra-hero-M.jpg"
              alt="Education"
              className="w-80 mx-auto mb-6 rounded-lg"
            />
            <h1 className="text-2xl font-bold">Join Us Today!</h1>
            <p className="mt-2 text-gray-200">Start your journey of learning for free.</p>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <p className="text-gray-600 text-center mb-6">Create a new account</p>

            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Create a password"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 rounded-lg ${
                  isFormValid ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid || loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>

              {/* Response Message */}
              {message && <p className="mt-4 text-lg font-semibold text-center">{message}</p>}
            </form>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Signup;
