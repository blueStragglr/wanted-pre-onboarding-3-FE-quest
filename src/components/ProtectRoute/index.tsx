import { PATH } from '@/constants';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

export const ProtectRoute = () => {
  const { pathname } = useLocation();
  const isLogin = false;

  if (pathname === PATH.AUTH && !isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return <Outlet />;
};
