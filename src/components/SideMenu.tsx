import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="flex flex-col pl-10">
      <NavLink
        className="mt-5"
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'blue' }
        }
        to={'/a-page'}
      >
        Page A
      </NavLink>
      <NavLink
        className="mt-5"
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'blue' }
        }
        to={'/b-page'}
      >
        Page B
      </NavLink>
      <NavLink
        className="mt-5"
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'blue' }
        }
        to={'/c-page'}
      >
        Page C
      </NavLink>
    </div>
  );
};

export default SideMenu;
