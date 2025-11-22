import { lazy } from "react";
const ConfirmPage = lazy(() => import("../pages/index"));
export const ConfirmRoutes = [
  {
    path: "/confirm-order", 
    element: <ConfirmPage />,
  },
  
];