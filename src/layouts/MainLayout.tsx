import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const MainLayout = () => {
	return (
		<>
			<Header />
			<SideBar />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
