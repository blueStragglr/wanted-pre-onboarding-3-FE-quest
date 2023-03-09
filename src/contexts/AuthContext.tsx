import React, { createContext, useState } from "react";
import { getStorage } from "src/utils/storage";
import { setStorage } from "../utils/storage";

export const AuthContext = createContext({
  isLogin: false,
  setLoginStatus: (status: string) => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogin, setIsLogin] = useState(getStorage("token") ? true : false);
  const setLoginStatus = (token: string) => {
    setStorage("token", token);
    setIsLogin(true);
  };
  return (
    <AuthContext.Provider value={{ isLogin, setLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
