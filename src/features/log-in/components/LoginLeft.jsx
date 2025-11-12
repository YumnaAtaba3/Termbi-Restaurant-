import React from "react";
import logo from "../../../assets/about/logoblack.svg";
import avatar from "../../../assets/Regester/illustration.svg";

const LoginLeft = () => {
  return (
    <div className="w-full md:w-1/2 flex  flex-col items-center justify-center bg-white py-10 md:py-0">
      {/* Logo */}
      <img src={logo} alt="Termbi Logo" className="w-28 md:w-32 mb-4" />
      <h3 className="text-gray-600 mb-4 text-center text-sm md:text-base">
        Restaurants Management System
      </h3>

      {/* Illustration */}
      <img src={avatar} alt="Illustration" className="w-3/4 max-w-xs md:max-w-md" />
    </div>
  );
};

export default LoginLeft;
