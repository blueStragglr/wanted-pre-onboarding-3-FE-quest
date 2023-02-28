import React, { createContext, useState, useContext } from 'react';

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [ login, setLogin ] = useState(false);

  const loginState = () => {
    setLogin(!login);
  }
  // login 상태 자식 컴포넌트에게 뿌려주기 위함

  return (
    <LoginContext.Provider value={{ login, loginState }}>
      { children }
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);

