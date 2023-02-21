import { NavLink } from 'react-router-dom';
import { IRoutes, Routes } from 'utils/Routes';

const BORDER = 'border-solid border-l-2 border-r-2 border-b-2 border-black-600';

const Sidebar = () => {
  return (
    <div className={`${BORDER} w-48 fixed h-full`}>
      <ul>
        {Routes.map((route: IRoutes) => (
          <li key={route.pageName}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-amber-500 font-bold block py-4 pl-6 underline'
                  : 'block py-4 pl-6 hover:text-gray-400 hover:font-bold'
              }
            >
              {route.pageName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
