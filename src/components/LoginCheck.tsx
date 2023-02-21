import { Navigate } from 'react-router-dom';

interface ILoginProps {
  children: React.ReactNode;
}

const LoginCheck = ({ children }: ILoginProps) => {
  const loginCheck = () => {
    const username = sessionStorage.getItem('username');
    return !!username;
  };

  const isLogin = loginCheck();

  if (!isLogin) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default LoginCheck;
