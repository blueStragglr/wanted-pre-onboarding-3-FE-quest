import { NavLink } from "react-router-dom";

const SideBar = () => {
	const sideBarMenus = [
		{ name: "Page A", path: "page/1" },
		{ name: "Page B", path: "page/2" },
		{ name: "Page C", path: "page/3" },
	];
	return (
		<ul className=" w-48 h-screen border-r 1px solid #ccc ">
			{sideBarMenus.map((menu) => (
				<li className="ml-10 mt-5 ">
					<NavLink to={menu.path} className="hover:bg-cyan-500">
						{menu.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
export default SideBar;
