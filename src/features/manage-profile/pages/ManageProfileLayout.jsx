import { Avatar, Button } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  PersonOutline,
  ShoppingCartOutlined,
  EventOutlined,
  StarBorder,
} from "@mui/icons-material";

import userImage from "../../../assets/User.png";
import { appRoutes } from "../../../routes/index";

export default function ManageProfileLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const active = (path) => location.pathname === path;

  return (
  <div className="container mx-auto flex flex-col min-h-screen bg-gray-50 p-6 mt-12">
  {/* BREADCRUMB */}
  <div className="mb-4 mt-5 text-gray-500 text-sm">
    <span>Home</span>
    <span className="mx-2">{">"}</span>
    <span>My Profile</span>
    <span className="mx-2">{">"}</span>
    <span className="text-black font-medium">
      {location.pathname.includes("orders")
        ? "My Orders"
        : location.pathname.includes("bookings")
        ? "My Bookings"
        : location.pathname.includes("reviews")
        ? "My Reviews"
        : "Manage Profile"}
    </span>
  </div>

  {/* MAIN LAYOUT */}
  <div className="flex flex-col md:flex-row flex-1 justify-center md:gap-24 gap-6">
    {/* SIDEBAR */}
    <div className="w-full md:w-64 bg-white rounded-xl shadow-sm p-6 flex flex-col">
      <div className="flex flex-col items-center">
        <Avatar src={userImage} sx={{ width: 80, height: 80 }} />
        <h3 className="mt-3 font-semibold text-center">Ahmad AL-Ahmad</h3>
      </div>

      <nav className="mt-8 space-y-3">
        <button
          onClick={() => navigate(appRoutes.manageProfile)}
          className={`w-full flex items-center gap-3 p-2 rounded-md ${
            active(appRoutes.manageProfile) ? "bg-red-50 font-medium" : "text-gray-700"
          }`}
        >
          <PersonOutline fontSize="small" />
          Manage Profile
        </button>

        <button
          onClick={() => navigate(appRoutes.myOrder)}
          className={`w-full flex items-center gap-3 p-2 rounded-md ${
            active(appRoutes.myOrder) ? "bg-red-50 font-medium" : "text-gray-700"
          }`}
        >
          <ShoppingCartOutlined fontSize="small" />
          My Orders
        </button>

        <button
          onClick={() => navigate(appRoutes.MyBooking)}
          className={`w-full flex items-center gap-3 p-2 rounded-md ${
            active(appRoutes.MyBooking) ? "bg-red-50 font-medium" : "text-gray-700"
          }`}
        >
          <EventOutlined fontSize="small" />
          My Bookings
        </button>

        <button
          onClick={() => navigate(appRoutes.myReviews)}
          className={`w-full flex items-center gap-3 p-2 rounded-md ${
            active(appRoutes.myReviews) ? "bg-red-50 font-medium" : "text-gray-700"
          }`}
        >
          <StarBorder fontSize="small" />
          My Reviews
        </button>
      </nav>

      <div className="mt-auto">
        <Button fullWidth variant="contained" color="error" className="!mt-10">
          Sign Out
        </Button>
      </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="flex-1 w-full max-w-4xl bg-white rounded-xl shadow-sm p-6 md:p-8">
      <Outlet />
    </div>
  </div>
</div>

  );
}
