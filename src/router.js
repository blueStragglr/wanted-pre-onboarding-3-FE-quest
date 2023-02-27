import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import Login from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				path: "A",
				element: <A />,
			},
			{
				path: "B",
				element: <B />,
			},
			{
				path: "C",
				element: <C />,
			},
		],
	},
	{
		path: "/Login",
		element: <Login />,
	},
]);

export default router;
