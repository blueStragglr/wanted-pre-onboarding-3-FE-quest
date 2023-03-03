import { createContext, ReactNode, useContext, useState } from "react";

import LoginService, { ResponseUser } from "@/Service/LoginService";

interface AuthContextVariable {
  state: ResponseUser;
  setState: React.Dispatch<React.SetStateAction<ResponseUser>>;
  loginService: LoginService;
}

const AuthContext = createContext<AuthContextVariable>(null!);

interface AuthContextProviderProps {
  children: ReactNode;
}

const loginService = new LoginService(localStorage);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, setState] = useState<ResponseUser>({ id: "", isLogin: false });
  const value = {
    state,
    setState,
    loginService
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
