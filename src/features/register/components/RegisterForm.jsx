import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepperComponent from "./StepperComponent";
import FormStep from "./FormStep";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerStepSchemas } from "../config";

import { useRegisterMutation } from "../services/mutations";
import { appRoutes } from "../../../routes/index"; 

const RegisterForm = () => {
  const totalSteps = 4;
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // React Hook Form instance
  const form = useForm({
    resolver: yupResolver(registerStepSchemas[activeStep]),
    mode: "onTouched",
    defaultValues: {
      restaurant_name: "",
      restaurant_address: "",
      restaurant_phone: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
  });

  const registerMutation = useRegisterMutation();

  // Update resolver whenever activeStep changes
  useEffect(() => {
    form.reset(form.getValues(), {
      keepValues: true,
      resolver: yupResolver(registerStepSchemas[activeStep]),
    });
  }, [activeStep]);

  const handleNext = async () => {
    const valid = await form.trigger();
    if (!valid) return;

    const values = form.getValues();

    // Normalize all phone fields to string
    const normalizedValues = {
      ...values,
      restaurant_phone: values.restaurant_phone?.toString() || "",
      phone: values.phone?.toString() || "",
    };

    // If last step before confirmation, submit registration
    if (activeStep === totalSteps - 2) {
      try {
        setIsSubmitting(true);
        const res = await registerMutation.mutateAsync(normalizedValues);

        // Backend returns message instead of token for registration
        if (res.status && res.message === "please_verify_email") {
          setActiveStep((prev) => prev + 1);

          // Redirect to login after showing confirmation
          setTimeout(() => {
            navigate(appRoutes.auth.login);
          }, 2000);
        } else {
          console.warn("Unexpected registration response:", res);
        }
      } catch (error) {
        console.error("Registration failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0"
      style={{ backgroundColor: "#FFF8F8" }}
    >
      <div className="max-w-md w-full mx-auto text-center">
        {activeStep === totalSteps - 1 && (
          <h2 className="text-2xl font-bold text-[#00D091] mb-8">
            Congratulations!
          </h2>
        )}

        <StepperComponent activeStep={activeStep} />

        {activeStep !== totalSteps - 1 && (
          <h2 className="text-xl md:text-2xl mt-6 font-semibold text-gray-800 mb-6">
            Tell us about your restaurant
          </h2>
        )}

        <FormStep
          activeStep={activeStep}
          onNext={handleNext}
          form={form}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
