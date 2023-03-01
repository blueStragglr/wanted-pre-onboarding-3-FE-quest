import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../styles/components/header.css";

export const Header = (): React.ReactElement => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const signOut = () => {
    if (user && setUser) {
      localStorage.removeItem("users");
      setUser(null);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="header">
      <h1 className="header_title">Wanted Pre-onboarding course</h1>
      <button
        className="header_button"
        onClick={() => (user ? signOut() : navigate("/login"))}
      >
        {user ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
};
