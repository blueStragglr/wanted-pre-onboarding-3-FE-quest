import { NavLink } from 'react-router-dom';

const menu = [
  {
    id: '/',
    name: '홈',
  },
  {
    id: '/community',
    name: '커뮤니티',
  },
];

const Sidebar = () => {
  return (
    <aside className="h-screen max-w-xs w-80 bg-slate-100">
      <div className="flex flex-col h-full">
        <div className="overflow-auto grow">
          <nav>
            <ul>
              {menu.map(({ id, name }) => (
                <li key={id} className="p-2 font-black">
                  <NavLink
                    to={id}
                    className={({ isActive, isPending }) =>
                      isActive ? 'text-rose-900' : isPending ? 'text-fuchsia-300' : ''
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
