/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginMutation } from "../services/mutations";
import { loginSchemas } from "../config";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../../routes/index";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  // React Hook Form setup
  const form = useForm({
    resolver: yupResolver(loginSchemas[0]),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      const res = await loginMutation.mutateAsync(values);


      navigate(appRoutes.restaurantHome);
    } catch (error) {
      console.error("Login failed:", error);
     
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0"
      style={{ backgroundColor: "#FFF8F8" }}
    >
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Log in
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="email"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...field}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-3">
            New in Termbi?{" "}
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
