import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Forget = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    // In real projects, you’d send a reset link to this email.
    // For now, redirect user to Gmail.
    window.location.href = "https://mail.google.com/";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded w-full p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};


export default Forget