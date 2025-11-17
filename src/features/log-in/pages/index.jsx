import React from "react";
import AuthLayout from "../../../shared/layouts/auth-layout/index.jsx";
import LoginForm from "../components/LoginForm.jsx";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
