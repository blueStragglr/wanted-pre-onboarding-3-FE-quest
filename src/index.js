import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import {
	Root,
	rootLoader,
	Page,
	rootAction,
	pageLoader,
	Login,
	loginAction,
} from "./routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						path: "/pages/:pageId",
						element: <Page />,
						loader: pageLoader,
					},
				],
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <ErrorPage />,
		action: loginAction,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
