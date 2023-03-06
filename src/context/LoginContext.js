import { createContext, useState } from 'react';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <LoginContext.Provider value={{ isLogin, handleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
