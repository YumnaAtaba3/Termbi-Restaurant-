import { lazy } from "react";
const MyOrderPage = lazy(() => import("../pages/index"));
export const MyOrderRoutes = [
  {
    path: "/my-order", 
    element: <MyOrderPage />,
  },
  
];
