import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const steps = [
  "Restaurant Info",
  "Account Details",
  "Payment Info",
  "Confirmation",
];

interface StepperProps {
  activeStep: number;
}

// Styled Connector — turns red normally, green when at last step
const CustomConnector = styled(StepConnector)<{ $isComplete?: boolean }>(
  ({ theme, $isComplete }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 28 },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#f3f3f3",
      borderRadius: 1,
    },
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
      backgroundColor: $isComplete ? "#00D091" : "#EC2323",
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
      backgroundColor: $isComplete ? "#00D091" : "#EC2323",
    },
  })
);

// Custom Step Icon — turns green when finished
const CustomStepIcon = (props: StepIconProps & { isLastActive: boolean }) => {
  const { active, completed, icon, isLastActive } = props;
  const stepNumber = parseInt(icon as string, 10);
  const isLastStep = stepNumber === steps.length;

  const color = isLastActive ? "#00D091" : "#EC2323";

  const styles = {
    root: {
      backgroundColor: completed || active ? color : "#e5e7eb",
      zIndex: 1,
      color: "#fff",
      width: 40,
      height: 40,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 20,
      transition: "all 0.3s ease",
    },
  };

  if (isLastStep) {
    return (
      <div style={styles.root}>
        <CheckIcon style={{ fontSize: 24 }} />
      </div>
    );
  }

  return <div style={styles.root}>{icon}</div>;
};

const StepperComponent: React.FC<StepperProps> = ({ activeStep }) => {
  const isComplete = activeStep === steps.length - 1;

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<CustomConnector $isComplete={isComplete} />}
      sx={{
        "& .MuiStepLabel-label": {
          display: "none",
        },
      }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel
            StepIconComponent={(props) => (
              <CustomStepIcon {...props} isLastActive={isComplete} />
            )}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
