import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import { useDebounce } from "../../../shared/hooks/debounce";

const stepsConfig = [
  {
    step: 0,
    fields: [
      { name: "restaurant_name", type: "text", label: "Restaurant name" },
      { name: "restaurant_address", type: "text", label: "Restaurant address" },
      {
        name: "restaurant_phone",
        type: "phone",
        label: "Restaurant phone",
      },
    ],
  },
  {
    step: 1,
    fields: [
      { name: "first_name", type: "text", label: "Your first name" },
      { name: "last_name", type: "text", label: "Your last name" },
      { name: "email", type: "email", label: "Your Email" },
      { name: "phone", type: "phone", label: "Your phone" },
    ],
  },
  {
    step: 2,
    fields: [
      { name: "password", type: "password", label: "Password" },
      {
        name: "password_confirmation",
        type: "password",
        label: "Confirm password",
      },
    ],
  },
  {
    step: 3,
    fields: [],
    customContent: (
      <div className="py-12 text-center">
        <h3 className="text-lg font-semibold text-[#00D091]">
          Account created!
        </h3>
        <p className="mt-4 mb-10 text-gray-800 font-medium">
          Get your restaurant started
        </p>
        <p className="text-gray-600 mt-8">
          A verification code has been sent to your email.
        </p>
      </div>
    ),
  },
];

const FormStep = ({ activeStep, onNext, form }) => {
  const step = stepsConfig[activeStep];
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  if (activeStep === stepsConfig.length - 1) {
    return <div>{step.customContent}</div>;
  }

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5 text-left">
      {step.fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium mb-2 text-left">
            {field.label} <span className="text-red-500">*</span>
          </label>

          {field.type === "phone" ? (
            <Controller
              control={control}
              name={field.name}
              render={({ field: f }) => (
                <>
                  <PhoneInput
                    country="us"
                    value={f.value || ""}
                    onChange={(v) => f.onChange(v)}
                    inputClass="!w-full !h-11 !border !rounded-lg"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm text-left">
                      {errors[field.name].message}
                    </p>
                  )}
                </>
              )}
            />
          ) : (
            <Controller
              control={control}
              name={field.name}
              render={({ field: f }) => {
                const [val, setVal] = useState(f.value || "");
                const debounced = useDebounce(val, 500);

                useEffect(() => {
                  f.onChange(debounced);
                }, [debounced]);

                return (
                  <>
                    <input
                      type={field.type}
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm text-left">
                        {errors[field.name].message}
                      </p>
                    )}
                  </>
                );
              }}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg"
      >
        {activeStep === stepsConfig.length - 2 ? "Finish" : "Next"}
      </button>
    </form>
  );
};

export default FormStep;
