import { lazy } from "react";
const MyBookingPage = lazy(() => import("../pages/index"));
export const MyBookingRoutes = [
  {
    path: "/my-booking", 
    element: <MyBookingPage />,
  },
  
];
