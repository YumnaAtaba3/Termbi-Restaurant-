import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useRegisterMutation } from "../services/mutations";
import { registerModalSchema } from "../config";

export default function RegisterModal({ onClose, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const registerMutation = useRegisterMutation();

  // React Hook Form
  const form = useForm({
    resolver: yupResolver(registerModalSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
     password_confirmation: "",
    },
  });

  const { handleSubmit, control, formState: { errors } } = form;

  const onSubmit = async (values) => {
    const nameParts = values.fullName.trim().split(" ");
    const first_name = nameParts.shift(); 
    const last_name = nameParts.join(" ") || ""; 

    const payload = {
      first_name,
      last_name,
      phone: values.phone,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };

    try {
      setIsSubmitting(true);
      const res = await registerMutation.mutateAsync(payload);

      console.log("Registration success:", res);
      onSwitch()
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <h2 className="text-center text-2xl font-bold mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...field}
                  className="w-full border rounded-lg px-4 py-2"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </>
            )}
          />

          {/* Phone */}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...field}
                  className="w-full border rounded-lg px-4 py-2"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </>
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="w-full border rounded-lg px-4 py-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </>
            )}
          />

          {/* Password */}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                  className="w-full border rounded-lg px-4 py-2 pr-10"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
            )}
          />

          {/* Confirm Password */}
          <Controller
            name="password_confirmation"
            control={control}
            render={({ field }) => (
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...field}
                  className="w-full border rounded-lg px-4 py-2 pr-10"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </span>
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
                )}
              </div>
            )}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold mt-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-red-600 font-semibold cursor-pointer" onClick={onSwitch}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
