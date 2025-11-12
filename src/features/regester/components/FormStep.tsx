import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Visibility, VisibilityOff, CheckCircle } from "@mui/icons-material";

interface FieldOption {
  type: string;
  label: string;
  placeholder: string;
}

interface StepOption {
  step: number;
  fields: FieldOption[];
  customContent?: React.ReactNode;
}

interface FormStepProps {
  activeStep: number;
  onNext: () => void;
}

const stepsConfig: StepOption[] = [
  {
    step: 0,
    fields: [
      {
        type: "text",
        label: "Restaurant name",
        placeholder: "Enter your restaurant name",
      },
      {
        type: "text",
        label: "Restaurant address",
        placeholder: "Enter restaurant address",
      },
      {
        type: "phone",
        label: "Restaurant phone",
        placeholder: "Enter phone number",
      },
    ],
  },
  {
    step: 1,
    fields: [
      { type: "text", label: "Your name", placeholder: "Enter your name" },
      { type: "email", label: "Your Email", placeholder: "Enter your email" },
      {
        type: "phone",
        label: "Your phone",
        placeholder: "Enter phone number",
      },
    ],
  },
  {
    step: 2,
    fields: [
      {
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
      },
      {
        type: "password",
        label: "Confirm password",
        placeholder: "Confirm your password",
      },
    ],
  },

  {
    step: 3,
    fields: [],
    customContent: (
      <div className="flex flex-col items-center justify-center text-center py-12">
        {/* Success Message */}
        <h3 className="text-lg font-semibold text-[#00D091] mt-2">
          Your account has been created successfully!
        </h3>

        <p className="text-gray-800 font-medium mt-4 mb-10">
          Get your restaurant started
        </p>

        {/* Verification Message */}
        <p className="text-gray-600 mt-8 max-w-sm">
          A verification code has been sent to your email.
          <br />
          Please verify your account via email.{" "}
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-medium hover:underline"
          >
            Open my email
          </a>
        </p>
      </div>
    ),
  },
];

const FormStep: React.FC<FormStepProps> = ({ activeStep, onNext }) => {
  const step = stepsConfig.find((s) => s.step === activeStep);
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Final Step (Confirmation)
  if (activeStep === stepsConfig.length - 1) {
    return (
      <div className="text-center">
        {step?.customContent}
        
      </div>
    );
  }

  return (
    <form className="space-y-5">
      {step?.fields.map((field, idx) => {
        if (field.type === "phone") {
          return (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-2  text-left">
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                containerClass="!w-full"
                inputClass="!w-full !h-11 !text-base !border !border-gray-300 !rounded-lg !pl-14 !focus:ring-2 !focus:ring-red-500"
                buttonClass="!border-gray-300 !bg-[#FFF8F8] !rounded-l-lg"
                dropdownClass="!bg-[#FFF8F8]"
                inputStyle={{
                  backgroundColor: "#ffffff",
                }}
              />
            </div>
          );
        }

        if (field.label.toLowerCase().includes("password")) {
          const isConfirm = field.label.toLowerCase().includes("confirm");
          const show = isConfirm ? showConfirmPassword : showPassword;
          const toggle = isConfirm ? setShowConfirmPassword : setShowPassword;

          return (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-2  text-left">
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder={field.placeholder}
                />
                <button
                  type="button"
                  onClick={() => toggle((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </button>
              </div>
            </div>
          );
        }

        return (
          <div key={idx}>
            <label className="block text-sm font-medium text-gray-700 mb-2  text-left">
              {field.label}
              <span className="text-red-500">*</span>
            </label>
            <input
              type={field.type}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={field.placeholder}
            />
          </div>
        );
      })}

      <button
        type="button"
        onClick={onNext}
        className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
      >
        {activeStep === stepsConfig.length - 2 ? "Finish" : "Next"}
      </button>

      <p className="text-center text-sm text-gray-600 mt-3">
        You already have an account?{" "}
        <a href="/login" className="text-red-600 font-medium hover:underline">
          Log in
        </a>
      </p>
    </form>
  );
};

export default FormStep;
