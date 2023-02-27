import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "~/providers";

const AuthLayout = () => {
  const { loginStatus } = useAuth();

  if (loginStatus === "fail") {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
