import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import PageA from "./routes/PageA";
import PageB from "./routes/PageB";
import PageC from "./routes/PageC";
import SignIn from "./routes/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'a',
                element: <PageA />,
            },
            {
                path: 'b',
                element: <PageB />,
            },
            {
                path: 'c',
                element: <PageC />,
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    }
]);

export default router;
