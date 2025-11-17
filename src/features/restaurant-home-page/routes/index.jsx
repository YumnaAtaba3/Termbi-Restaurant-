import { lazy } from "react";
const RestaurantHomePage = lazy(() => import("../pages/index"));
export const restaurantHomeRoutes = [
  {
    path: "/",
    element: <RestaurantHomePage />,
  },
  
];
