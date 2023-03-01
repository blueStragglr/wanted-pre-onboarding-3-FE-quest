import { useNavigate } from "react-router-dom";
import "../styles/components/header.css";

export const Header = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="header_title">Wanted Pre-onboarding course</h1>
      <button className="header_button" onClick={() => navigate("/login")}>
        로그인
      </button>
    </div>
  );
};
