import { Login } from "@/pages/Login";
import { Main } from "@/pages/Main";
import { useRoutes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Page1 } from "../pages/Page1";
import { Page2 } from "@/pages/Page2";
import { Page3 } from "@/pages/Page3";
import { Create } from "@/pages/Create";
import { Delete } from "@/pages/Delete";

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
                children: [
                    {
                        path: "page1",
                        element: <Page1 />,
                        children: [
                            {
                                path: "create",
                                element: <Create />,
                            },
                            {
                                path: "delete",
                                element: <Delete />,
                            },
                        ],
                    },
                    {
                        path: "page2",
                        element: <Page2 />,
                    },
                    {
                        path: "page3",
                        element: <Page3 />,
                    },
                ],
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
