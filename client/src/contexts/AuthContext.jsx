import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider 하위 컴포넌트에서 useAuth 사용 시 value 값 반환
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("id") ? true : false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
