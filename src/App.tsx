import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<LoginPage />} />
			<Route
				path="/page/:id"
				element={<HomePage />}
				errorElement={<NotFound />}
			/>
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
