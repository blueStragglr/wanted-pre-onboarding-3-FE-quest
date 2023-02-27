import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  loginStatus: "loading" | "success" | "fail";
  setLoginStatus: Dispatch<SetStateAction<AuthContextType["loginStatus"]>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loginStatus, setLoginStatus] =
    useState<AuthContextType["loginStatus"]>("loading");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoginStatus("success");
      return;
    }

    setLoginStatus("fail");
  }, []);

  return (
    <AuthContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("AuthProvider 내부에서 사용하세요.");
  }

  return context;
};
