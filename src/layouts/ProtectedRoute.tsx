import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	return (
		<>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default ProtectedRoute;
