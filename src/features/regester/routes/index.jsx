import { lazy } from "react";
const RegisterPage = lazy(() => import("../pages/index"));
export const RegisterRoutes = [
  {
    path: "/register",
    element: <RegisterPage />,
  },
  
];
