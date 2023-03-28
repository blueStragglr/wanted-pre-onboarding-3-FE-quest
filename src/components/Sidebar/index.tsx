import { NavLink } from 'react-router-dom';
import { SidebarContent } from '@/router';

export const Sidebar = () => {
  const activeLinkClassName = 'text-sky-500';
  return (
    <aside className="basis-1/6 border-r-2 text-center">
      <ul>
        {SidebarContent.map((content) => (
          <li className="m-3" key={content.label}>
            <NavLink
              to={content.path}
              className={({ isActive }) => (isActive ? activeLinkClassName : undefined)}
            >
              {content.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
