import { Outlet } from 'react-router-dom';

import { Header } from '@/pages/Root/Header';
import { NavList } from '@/pages/Root/NavList';

export const Root = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-row space-x-2 > *">
        <NavList />
        <Outlet />
      </main>
    </div>
  );
};
