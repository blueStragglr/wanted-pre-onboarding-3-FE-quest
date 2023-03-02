import { Background } from '@/components/Background';
import { NavBar } from '@/components/NavBar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="isolate">
      <Background />
      <NavBar />
      <div className="relative px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};
