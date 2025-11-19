import { lazy } from "react";
import { appRoutes } from "../../../routes/index";

const ManageProfileLayout = lazy(() => import("../pages/ManageProfileLayout"));
const ProfileMain = lazy(() => import("../pages/ProfileMain"));
const Orders = lazy(() => import("../pages/Orders"));
const Bookings = lazy(() => import("../pages/Bookings"));
const Reviews = lazy(() => import("../pages/Reviews"));

export const ManageProfileRoutes = [
  {
    path: appRoutes.manageProfile,
    element: <ManageProfileLayout />,
    children: [
      { index: true, element: <ProfileMain /> },
      { path: "orders", element: <Orders /> },
      { path: "bookings", element: <Bookings /> },
      { path: "reviews", element: <Reviews /> },
    ]
  }
];
