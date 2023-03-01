import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<ProtectedRoute />} errorElement={<NotFound />}>
			<Route path="/" element={<LoginPage />} />
			<Route path="/page" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/page/:id" element={<DetailPage />} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
