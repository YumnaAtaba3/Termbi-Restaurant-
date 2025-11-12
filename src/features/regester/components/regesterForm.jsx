import React, { useState } from "react";
import StepperComponent from "./StepperComponent";
import FormStep from "./FormStep";

const RegisterForm = () => {
  const totalSteps = 4; // steps 0,1,2,3
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  return (
    <div
      className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0"
      style={{ backgroundColor: "#FFF8F8" }}
    >
      <div className="max-w-md w-full mx-auto text-center">
        {/* Show "Congratulations!" ABOVE the stepper when finished */}
        {activeStep === totalSteps - 1 && (
          <h2 className="text-2xl font-bold text-[#00D091] mb-8">
            Congratulation!
          </h2>
        )}

        {/* Stepper */}
        <StepperComponent activeStep={activeStep} />

        {/* Heading (only show on non-final steps) */}
        {activeStep !== totalSteps - 1 && (
          <h2 className="text-xl md:text-2xl mt-6 font-semibold text-gray-800 mb-6 text-center">
            Tell us about your restaurant
          </h2>
        )}

        {/* Form Step */}
        <FormStep activeStep={activeStep} onNext={handleNext} />
      </div>
    </div>
  );
};

export default RegisterForm;
