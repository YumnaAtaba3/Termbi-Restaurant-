import { lazy } from "react";
const LoginPage = lazy(() => import("../pages/index"));
export const LoginRoutes = [
  {
    path: "/login", 
    element: <LoginPage />,
  },
  
];
