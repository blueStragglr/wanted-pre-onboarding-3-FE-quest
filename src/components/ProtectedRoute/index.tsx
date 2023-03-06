import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { PATH_NAME } from "../../constants/path";

const ProtectedRoute = () => {
  const { isLogin } = useContext(AuthContext);

  return isLogin ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />;
};

export default ProtectedRoute;
