import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isLogin: false,
      info: { name: "" },
    }));
    navigate("/");
  };
  return (
    <aside>
      <ul>
        <Link to={"/"}>
          <li>메인</li>
        </Link>

        <Link to={"/profile"}>
          <li>프로필</li>
        </Link>

        <Link to={"/todo"}>
          <li>할일 목록</li>
        </Link>

        {!user.isLogin ? (
          <Link to={"/login"}>
            <li>로그인</li>
          </Link>
        ) : (
          <li>
            <button onClick={logout}>로그아웃</button>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
