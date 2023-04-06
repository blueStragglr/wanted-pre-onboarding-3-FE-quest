import navLink from 'constants/navLink';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="flex flex-col border-r border-gray mb-5 p-4 pl-12 w-60 text-lg h-full">
      {navLink.map((nav) => (
        <NavLink
          key={nav.title}
          to={nav.path}
          className={({ isActive }) =>
            isActive ? 'text-sky-700 font-extrabold' : ''
          }
        >
          <h3 className="mb-5">{nav.title}</h3>
        </NavLink>
      ))}
    </nav>
  );
}
