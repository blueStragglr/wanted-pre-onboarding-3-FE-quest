import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { useRoutes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Routes = () => {
    const Route = () => {
        const element = useRoutes([
            {
                path: "/",
                element: (
                    <PrivateRoute>
                        <Main />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: (
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                ),
            },
        ]);

        return element;
    };
    return <Route />;
};
