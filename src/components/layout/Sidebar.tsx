import { NavLink } from "react-router-dom";

const routes = [
  { to: "/a", name: "Page A" },
  { to: "/b", name: "Page B" },
  { to: "/c", name: "Page C" },
];

const Sidebar = () => {
  return (
    <aside className="w-36 h-full flex justify-center items-center bg-gray-200">
      <div className="flex flex-col space-y-3">
        {routes.map((route) => (
          <NavLink
            key={route.to}
            to={route.to}
            className={({ isActive }) =>
              isActive ? "text-red-600 font-bold" : "text-black font-bold"
            }
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
