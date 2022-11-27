import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useBuyer } from "../Hooks/UseBuyer";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import Loader from "../Pages/Shared/Loader";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isLoading) {
    return <Loader />;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
