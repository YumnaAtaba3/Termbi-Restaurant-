import React from "react";
import LoginLeft from "./components/LoginLeft";
import LoginForm from "./components/LoginForm";
import RegesterForm from "../regester/components/regesterForm";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen mt-10">
      < RegesterForm />
      {/* <LoginForm/> */}
      <LoginLeft />
    </div>
  );
};

export default Login;
