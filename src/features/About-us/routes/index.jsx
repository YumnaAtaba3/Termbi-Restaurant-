import { lazy } from "react";
const AboutPage = lazy(() => import("../pages/index"));
export const AboutRoutes = [
  {
    path: "/about", 
    element: <AboutPage />,
  },
  
];
