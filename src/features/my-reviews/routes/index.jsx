import { lazy } from "react";
const MyReviewsPage = lazy(() => import("../pages/index"));
export const MyReviewsRoutes = [
  {
    path: "/reviews", 
    element: <MyReviewsPage />,
  },
  
];
