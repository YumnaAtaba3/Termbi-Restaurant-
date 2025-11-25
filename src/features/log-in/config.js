import * as Yup from "yup";

export const loginSchemas = [
  Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z]/, "Must include uppercase")
      .matches(/[a-z]/, "Must include lowercase")
      .matches(/\d/, "Must include number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must include special character")
      .min(8, "Min 8 characters"),
  }),

];
