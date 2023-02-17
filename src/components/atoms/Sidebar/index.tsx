import { NavLink } from 'react-router-dom';
import { PATH } from '@/constants';

const menu = [
  {
    id: PATH.MAIN,
    name: '홈',
  },
  {
    id: PATH.COMMUNITY,
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
