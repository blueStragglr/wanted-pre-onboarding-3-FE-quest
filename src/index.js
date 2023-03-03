import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./routes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter router={router} />
	</React.StrictMode>
);
