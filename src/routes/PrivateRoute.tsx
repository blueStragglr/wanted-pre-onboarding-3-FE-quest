import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
    const isLogin = localStorage.getItem("Login");

    if (isLogin !== "성공") {
        return <Navigate to='/login' replace />;
    }
    return children;
};
