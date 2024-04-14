import React, { useState } from "react";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../src/firebase/FirebaseConfig";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent successfully.");
      navigate("/");
    } catch (error) {
      toast.error("Failed to send password reset email. Please try again.");
      console.error(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r bg-gray-900  min-h-screen flex items-center justify-center -mt-10">
      <Toaster />
      <div className="md:w-full w-[90%] max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 md:text-3xl text-2xl font-bold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter the email associated with your account.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email input */}
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          {/* Send reset link button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
