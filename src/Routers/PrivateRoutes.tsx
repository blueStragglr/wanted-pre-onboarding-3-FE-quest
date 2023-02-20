import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRoutesProps {
  isLogin: boolean;
  children?: ReactElement;
}

const PrivateRoutes = ({ isLogin, children }: PrivateRoutesProps) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoutes;
