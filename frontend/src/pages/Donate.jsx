import React, { useState } from "react";
import Footer from "../components/Footer"; // Import Footer

const Donate = () => {
  const [amount, setAmount] = useState(""); // State for donation amount
  const [donorName, setDonorName] = useState(""); // State for donor name
  const [message, setMessage] = useState(""); // State for response message

  const handleDonate = async () => {
    if (!amount || !donorName) {
      setMessage("❌ Please enter your name and donation amount.");
      return;
    }

    try {
      const response = await fetch("https://backend-khanacademy.onrender.com/api/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, donorName }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`✅ ${data.message} Amount: ₹${data.amount}`);
        setAmount(""); // Clear amount input
        setDonorName(""); // Clear donor name input
      } else {
        setMessage(`❌ Error: ${data.error || "Donation failed"}`);
      }
    } catch (error) {
      setMessage("❌ Error connecting to the server.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Help us do more</h1>
        <p className="text-gray-700 text-center max-w-2xl">
          We rely on support from people like you. Any donation amount is welcome and deeply appreciated.
        </p>

        <p className="text-gray-700 text-center max-w-2xl mt-4">
          Please help keep Khan Academy free for anyone, anywhere, forever.
        </p>

        {/* Donation Form */}
        <div className="mt-6 flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter your name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="border p-2 rounded-lg w-64 mb-2"
          />
          <input
            type="number"
            placeholder="Enter amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded-lg w-64"
          />

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg"
          >
            Donate Now
          </button>
        </div>

        {/* Response Message */}
        {message && <p className="mt-4 text-lg font-semibold">{message}</p>}

        <img
          src="https://i.ytimg.com/vi/lfoYIiQ0Goo/maxresdefault.jpg"
          alt="Donate"
          className="w-80 h-70 mt-10"
        />

        <p className="text-gray-500 text-sm mt-2">
          Only Indian citizens can donate to Khan Academy India.
        </p>

        <p className="text-gray-700 text-center max-w-2xl mt-4">
          Your donation supports our partnerships, people, and technology,
          enabling us to create great content and a great experience for teachers and students!
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Donate;
