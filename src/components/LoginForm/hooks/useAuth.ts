import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/contexts/AuthContext";
import { ROUTERPATH } from "src/constants/path";

const useAuth = () => {
  const { setLoginStatus } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    const token = new Date().getTime().toString();
    setLoginStatus(token);
    navigate(ROUTERPATH.PAGEA);
  };
  return {
    login,
  };
};

export default useAuth;
