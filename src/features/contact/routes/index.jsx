import { lazy } from "react";
const ContactPage = lazy(() => import("../pages/index"));
export const ContactRoutes = [
  {
    path: "/contact", 
    element: <ContactPage />,
  },
  
];
