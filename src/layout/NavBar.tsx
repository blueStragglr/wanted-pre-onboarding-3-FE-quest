import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-14 left-0 h-screen w-56 border border-r-gray-400 px-4 py-7">
      <ul className="flex flex-col gap-5">
        <Link
          to="/"
          className={location.pathname === '/' ? 'text-blue-400' : ''}
        >
          Page A
        </Link>
        <Link
          to="/pageb"
          className={location.pathname === '/pageb' ? 'text-blue-400' : ''}
        >
          Page B
        </Link>
        <Link
          to="/pagec"
          className={location.pathname === '/pagec' ? 'text-blue-400' : ''}
        >
          Page C
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
