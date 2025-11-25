import { lazy } from "react";
import { appRoutes } from "../../../routes/index";

const ManageProfileLayout = lazy(() => import("../pages/ManageProfileLayout"));
const ProfileMain = lazy(() => import("../pages/ProfileMain"));
const Orders = lazy(() => import("../../my-order/pages/index"));
const Bookings = lazy(() => import("../../my-booking/pages/index"));
const Reviews = lazy(() => import("../../my-reviews/pages/index"));

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
