import "../styles/pages/login.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const UserInfo = {
  name: "testuser",
  password: "test1212",
};

export const Login = (): React.ReactElement => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !password) {
      return alert("아이디와 비밀번호가 잘 입력되었는지 확인하세요!");
    }
    if (name !== UserInfo.name || password !== UserInfo.password) {
      return alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
    if (setUser) {
      localStorage.setItem("users", UserInfo.name);
      setUser(UserInfo.name);
    }
  };

  return (
    <div className="login">
      <h1 className="login_title">로그인</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="login_form"
      >
        <div className="login_input_container">
          <label htmlFor="name" className="login_input_label">
            아이디
          </label>
          <input
            name="name"
            type={"text"}
            placeholder={"아이디를 입력하세요."}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className={`login_input_input ${
              name ? "active_input" : "disabled_input"
            }`}
          />
        </div>
        <div className="login_input_container">
          <label htmlFor="password" className="login_input_label">
            비밀번호
          </label>
          <input
            name="password"
            type={"password"}
            placeholder={"비밀번호를 입력하세요."}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="login_input_input"
          />
        </div>
        <button
          type={"submit"}
          disabled={!name || !password}
          className={`login_button ${
            name && password ? "active_button" : "disabled_button"
          }`}
        >
          로그인
        </button>
      </form>
    </div>
  );
};
