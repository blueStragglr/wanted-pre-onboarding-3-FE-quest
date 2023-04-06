import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import Login from "./pages/Login";
import { Loader as AuthLoader } from "./util/loader";
import { OutLoader } from "./util/loader";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "A",
				element: <A />,
				loader: AuthLoader,
			},
			{
				path: "B",
				element: <B />,
				loader: AuthLoader,
			},
			{
				path: "C",
				element: <C />,
				loader: AuthLoader,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		loader: OutLoader,
	},
]);

export default router;
