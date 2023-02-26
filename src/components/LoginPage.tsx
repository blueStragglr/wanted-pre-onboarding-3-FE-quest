import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = ({
  setAuth,
}: {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [info, setInfo] = useState({ id: "", pw: "" });
  const [errMsg, setErrMsg] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: React.MouseEvent) => {
    if (!info.id || !info.pw) {
      setErrMsg("Need ID or PW...");
      e.preventDefault();
      return;
    }
    setAuth(true);
  };
  return (
    <div className="loginPage">
      <form action="post">
        <input name="id" onChange={onChange} type="text" placeholder="ID ..." />
        <input
          name="pw"
          onChange={onChange}
          type="password"
          placeholder="PW ..."
        />
        <div className="errorDiv">{errMsg}</div>
        <Link onClick={onSubmit} className="formLink" to="/">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
