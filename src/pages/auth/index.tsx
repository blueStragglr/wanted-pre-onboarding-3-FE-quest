import AuthLayout from '@/components/atoms/Layout/AuthLayout';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default Auth;
