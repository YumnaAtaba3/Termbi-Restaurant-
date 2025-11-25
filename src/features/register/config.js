import * as Yup from "yup";

export const registerStepSchemas = [
  // STEP 0 — Restaurant
  Yup.object({
    restaurant_name: Yup.string().required("Restaurant name is required"),
    restaurant_address: Yup.string().required("Restaurant address is required"),
    restaurant_phone: Yup.string()
      .required("Phone is required")
      .matches(/^\+?\d{8,15}$/, "Invalid phone number"),
  }),

  // STEP 1 — Owner
  Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\+?\d{8,15}$/, "Invalid phone number"),
  }),

  // STEP 2 — Passwords
  Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z]/, "Must include uppercase")
      .matches(/[a-z]/, "Must include lowercase")
      .matches(/\d/, "Must include number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must include special character")
      .min(8, "Min 8 characters"),

    password_confirmation: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  }),
];



// =======================
// REGISTER VALIDATION
// =======================
export const registerModalSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone must contain only digits")
    .min(8, "Phone must be at least 8 digits")
    .max(15, "Phone cannot exceed 15 digits"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  password_confirmation: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});
