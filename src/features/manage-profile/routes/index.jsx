import { lazy } from "react";
const ManageProfilePage = lazy(() => import("../pages/index"));
export const ManageProfileRoutes = [
  {
    path: "/manage-profile", 
    element: <ManageProfilePage />,
  },
  
];
