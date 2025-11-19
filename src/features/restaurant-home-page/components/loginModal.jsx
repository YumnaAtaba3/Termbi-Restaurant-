import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginModal({ onClose, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl p-8 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-bold mb-6">Log in</h2>

        <div className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
          />

          {/* Password with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-2 pr-10"
            />

            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
            </span>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold mt-2">
            Log in
          </button>
        </div>

        {/* Divider */}
        <div className="my-5 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 mb-3 bg-gray-100 group">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition"
          />
          Continue with Google
        </button>

        <button className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 bg-gray-100 group">
          <img
            src="https://www.svgrepo.com/show/448224/facebook.svg"
            className="w-5 h-5 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition"
          />
          Continue with Facebook
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          New in Termbi?{" "}
          <span
            className="text-red-600 font-semibold cursor-pointer"
            onClick={onSwitch}
          >
            Create new account
          </span>
        </p>
      </div>
    </div>
  );
}
