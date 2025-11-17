import { lazy } from "react";
const ReserveDetailsPage = lazy(() => import("../pages/index"));
export const ReserveDetailsRoutes = [
  {
    path: "/reserve-details",
    element: <ReserveDetailsPage />,
  },
  
];
