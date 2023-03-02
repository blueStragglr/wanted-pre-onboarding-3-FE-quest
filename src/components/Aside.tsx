import { NavLink } from 'react-router-dom';
const Aside = () => {
  return (
    <aside className='h-screen w-40 flex-none border-r-2 px-1'>
      <ul className='menu menu-vertical'>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              background: isActive ? '#fcd734' : 'transparent',
              borderRadius: isActive ? '10px' : '0',
            })}
          >
            Home
          </NavLink>
        </li>
        <li tabIndex={0}>
          <NavLink
            to='/a'
            style={({ isActive }) => ({
              background: isActive ? '#fcd734' : 'transparent',
              borderRadius: isActive ? '10px' : '0',
            })}
          >
            A
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/b'
            style={({ isActive }) => ({
              background: isActive ? '#fcd734' : 'transparent',
              borderRadius: isActive ? '10px' : '0',
            })}
          >
            B
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Aside;
