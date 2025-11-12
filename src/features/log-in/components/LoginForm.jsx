import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center px-6 mt-9 sm:px-10 md:px-16 py-10 md:py-0"
      style={{ backgroundColor: "#FFF8F8" }}
    >
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Log in
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <VisibilityOff fontSize="small" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
          >
            Log in
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-3">
            New in termbi?{" "}
            <a
              href="/register"
              className="text-red-600 ml-2 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
