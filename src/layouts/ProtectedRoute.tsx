import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const isAuth = Boolean(localStorage.getItem("token"));

	return (
		<>
			<main>{isAuth ? <Outlet /> : <Navigate to="/" />}</main>
		</>
	);
};

export default ProtectedRoute;
