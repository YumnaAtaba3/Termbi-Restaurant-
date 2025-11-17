import { lazy } from "react";
const CartPage = lazy(() => import("../pages/index"));
export const CartRoutes = [
  {
    path: "/cart", 
    element: <CartPage />,
  },
  
];
