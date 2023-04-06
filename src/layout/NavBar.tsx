import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RouterInfo } from '../Router';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-14 left-0 h-screen w-56 border border-r-gray-400 px-4 py-7">
      <ul className="flex flex-col gap-5">
        {RouterInfo.map((router) => {
          if (router.withAuthorization) {
            return (
              <Link
                to={router.path}
                className={
                  location.pathname === `${router.path}` ? 'text-blue-400' : ''
                }
              >
                {router.label}
              </Link>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
