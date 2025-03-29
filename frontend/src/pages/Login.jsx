import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For success/error messages
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Check if both fields are filled
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    if (!isFormValid) return;

    try {
      const response = await fetch(`https://backend-khanacademy.onrender.com/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ Login Successful! Welcome, ${data.user.name || "User"} 🎉`);

        // Store token in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to home page after login
        setTimeout(() => {
          navigate("/");
        }, 1000); // Small delay for user feedback
      } else {
        setMessage(`❌ Error: ${data.error || "Invalid credentials"}`);
      }
    } catch (error) {
      setMessage("❌ Error connecting to the server. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="hidden md:flex md:w-1/2 bg-green-900 text-white items-center justify-center p-8">
          <div className="text-center max-w-md">
            <img src="https://www.waterford.org/wp-content/uploads/2023/11/wra-hero-M.jpg" alt="School Illustration" className="mb-6 rounded-lg w-80" />
            <h1 className="text-2xl font-bold mb-4">Join Khan Academy and learn with us</h1>
            <p className="text-sm">Log in to Khan Academy to get started!</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold mb-4">Log in</h2>

          <div className="w-full max-w-md space-y-3">
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center p-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-6 h-6 mr-2" />
              Continue with Google
            </a>
          </div>

          <div className="my-6 w-full max-w-md border-b border-gray-300"></div>

          <form onSubmit={handleLogin} className="w-full max-w-md">
            <label className="block text-gray-700 mb-1">Email or Username *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-lg mb-4" placeholder="Enter your email or username" required />

            <label className="block text-gray-700 mb-1">Password *</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-lg mb-4" placeholder="Enter your password" required />

            <p className="text-blue-600 text-sm mb-4 cursor-pointer">Forgot password?</p>

            <button type="submit" className={`w-full py-2 rounded-lg ${isFormValid ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`} disabled={!isFormValid}>
              Log in
            </button>

            {message && <p className="mt-4 text-lg font-semibold">{message}</p>}

            
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
