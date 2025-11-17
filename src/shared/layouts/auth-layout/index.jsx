import React from "react";
import LoginLeft from "../../../features/log-in/components/LoginLeft";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen mt-10">
      {children}
      <LoginLeft />
    </div>
  );
};

export default AuthLayout;
