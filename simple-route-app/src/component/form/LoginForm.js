import { useState } from "react";

const LoginForm = (props) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onsubmitHandler = (e) => {
    e.preventDefault();
    alert(`아이디 : ${id} 비밀번호 : ${pw}`);
  };

  const onIdChangeHandler = (e) => {
    setId(e.target.value);
  };

  const onPwChangeHandler = (e) => {
    setPw(e.target.value);
  };

  return (
    <form onSubmit={onsubmitHandler}>
      <label>ID : </label>
      <input type="text" name="text" value={id} onChange={onIdChangeHandler} />
      <br />
      <label>PW : </label>
      <input
        type="password"
        name="pw"
        value={pw}
        onChange={onPwChangeHandler}
      />
      <br />
      <input type="submit" value={"전송하기"} />
    </form>
  );
};

export default LoginForm;
