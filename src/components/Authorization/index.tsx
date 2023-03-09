import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthorizationProps {
  children: React.ReactNode;
}

let isLogged = false;

export const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [location]);
  return <>{children}</>;
};
