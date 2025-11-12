import React from "react";
import LoginLeft from "./components/LoginLeft";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      <LoginForm />
      <LoginLeft />
    </div>
  );
};

export default Login;
