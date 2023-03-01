import { NavLink } from "react-router-dom";

const SideBar = () => {
	const sideBarMenus = [
		{ id: 1, name: "Page A", path: "1" },
		{ id: 2, name: "Page B", path: "2" },
		{ id: 3, name: "Page C", path: "3" },
	];
	return (
		<ul className=" w-48 h-screen border-r 1px solid #ccc ">
			{sideBarMenus.map((menu) => (
				<li className="ml-10 mt-5" key={menu.id}>
					<NavLink to={menu.path} className="hover:text-gray-400">
						{menu.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
export default SideBar;
