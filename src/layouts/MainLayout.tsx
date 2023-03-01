import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const MainLayout = () => {
	return (
		<>
			<Header />
			<main className="flex">
				<SideBar />
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
