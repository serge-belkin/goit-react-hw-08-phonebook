import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const Redirect = !isLoggedIn && !isRefreshing;
  return Redirect ? <Navigate to={redirectTo} /> : Component;
};

