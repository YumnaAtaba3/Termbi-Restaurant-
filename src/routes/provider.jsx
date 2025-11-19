import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

import LayoutContainer from "../shared/layouts/container-layout";

import { AboutRoutes } from "../features/About-us/routes";
import { ContactRoutes } from "../features/contact/routes";
import { LoginRoutes } from "../features/log-in/routes";
import { RegisterRoutes } from "../features/regester/routes";
import { restaurantHomeRoutes } from "../features/restaurant-home-page/routes";
import { ReserveDetailsRoutes } from "../features/Reserve-details/routes";
import { MyOrderRoutes } from "../features/my-order/routes";
import { MyReviewsRoutes } from "../features/my-reviews/routes";
import { ManageProfileRoutes } from "../features/manage-profile/routes";
import { CheckoutRoutes } from "../features/checkout/routes"; 
import { CartRoutes } from "../features/cart/routes";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate(redirect);
    }
  }, [navigate]);

  return null;
}

// Recursive function to render nested routes
function renderRoutes(routes) {
  return routes.map((route) => (
    <Route
      key={route.path || Math.random()}
      path={route.path}
      element={route.element}
      index={route.index}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

export function AppRouterProvider() {
  const mainRoutes = [
    ...AboutRoutes,
    ...ContactRoutes,
    ...LoginRoutes,
    ...RegisterRoutes,
    ...restaurantHomeRoutes,
    ...ReserveDetailsRoutes,
    ...MyOrderRoutes,
    ...MyReviewsRoutes,
    ...ManageProfileRoutes,
    ...CheckoutRoutes,
    ...CartRoutes,
  ];

  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      }
    >
      <BrowserRouter>
        <RedirectHandler />

        <Routes>
          {/* Layout wrapper for header/footer */}
          <Route path="/" element={<LayoutContainer />}>
            {renderRoutes(mainRoutes)}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
