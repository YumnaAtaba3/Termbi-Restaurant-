import React from "react";
import AuthLayout from "../../../shared/layouts/auth-layout/index.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
