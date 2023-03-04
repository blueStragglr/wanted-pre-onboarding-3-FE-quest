import { Background } from '@/components/Background';
import { NavBar } from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="isolate">
      <Background />
      <NavBar />
      <div className="relative px-10 pt-5 lg:px-10">
        <Outlet />
      </div>
    </div>
  );
};
