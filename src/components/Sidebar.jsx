import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log('pathname:', pathname);
  const handleIconClick = (pageName) => {
    navigate(pageName);
  };

  return (
    <nav className='border-r fixed px-5 py-5 top-16 h-full w-40'>
      <ul className='flex flex-col gap-5'>
        <li onClick={() => navigate('/')} className={pathname === '/' && 'text-yellow'}>
          Home
        </li>
        <li onClick={() => navigate('/A')} className={pathname === '/A' && 'text-yellow'}>
          Page A
        </li>
        <li onClick={() => navigate('/B')} className={pathname === '/B' && 'text-yellow'}>
          Page B
        </li>
        <li onClick={() => navigate('/C')} className={pathname === '/C' && 'text-yellow'}>
          Page C
        </li>
      </ul>
    </nav>
  );
}
