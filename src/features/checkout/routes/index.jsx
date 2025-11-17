import { lazy } from "react";
const CheckoutPage = lazy(() => import("../pages/index"));
export const CheckoutRoutes = [
  {
    path: "/checkout", 
    element: <CheckoutPage />,
  },
  
];
