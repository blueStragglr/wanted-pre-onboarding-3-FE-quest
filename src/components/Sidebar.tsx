import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const SIDEBAR_ITEMS = [
    { to: 'a', textContent: 'Page A' },
    { to: 'b', textContent: 'Page B' },
    { to: 'c', textContent: 'Page C' },
  ];

  return (
    <div className="sidebar">
      {SIDEBAR_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {item.textContent}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
