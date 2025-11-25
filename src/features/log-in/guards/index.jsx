import React from "react";
import { Navigate } from "react-router-dom";
import { useIsLoggedIn } from "../../regester/hooks/is-logged-in";


export const ProtectedPageGuard = ({
  children,
}) => {
  const { isLoggedIn, isLoading } = useIsLoggedIn();

  if (isLoading) return null;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const PublicPageGuard = ({
  children,
}) => {
  const { isLoggedIn, isLoading } = useIsLoggedIn();

  if (isLoading) return null;

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
