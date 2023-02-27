import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles.scss";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickCurrentUserState = () => {
    console.log(currentUser);
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickLogout = () => {
    setCurrentUser({});
  };

  return (
    <>
      <div className="Header">
        <span onClick={onClickLogo}>원티드 프리온보딩 사전 과제</span>
        {currentUser.id ? (
          <div>
            <div>{currentUser.id}님</div>
            <span onClick={onClickLogout}>로그아웃</span>
          </div>
        ) : (
          <span onClick={onClickLogin}>로그인</span>
        )}
      </div>
    </>
  );
};

export default Header;
