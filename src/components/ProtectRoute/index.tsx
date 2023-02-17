import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

export const ProtectRoute = () => {
  const isLogin = true;

  if (!isLogin) {
    return <Navigate to={'/auth/login'} />;
  }

  return <Outlet />;
};
