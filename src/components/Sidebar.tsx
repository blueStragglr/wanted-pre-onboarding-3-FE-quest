import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-32 md:w-64 py-5 px-2 lg:px-4">
      <ul className="space-y-2">
        <li>
          <Link
            to="/page-a"
            className={`${
              location.pathname === '/page-a' && 'bg-gray-100'
            } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100`}
          >
            Page A
          </Link>
        </li>
        <li>
          <Link
            to="/page-b"
            className={`${
              location.pathname === '/page-b' && 'bg-gray-100'
            } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100`}
          >
            Page B
          </Link>
        </li>
        <li>
          <Link
            to="/page-c"
            className={`${
              location.pathname === '/page-c' && 'bg-gray-100'
            } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100`}
          >
            Page C
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
