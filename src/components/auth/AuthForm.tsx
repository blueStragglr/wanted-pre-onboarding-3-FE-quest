import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, setAuth } from "../../libs/authAction";

const AuthForm = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const isAuth = getAuth();

  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      if (emailRef.current.value === "") {
        return;
      }

      if (passwordRef.current.value === "") {
        return;
      }

      setAuth(emailRef.current.value);
      window.location.reload();
    }
  };

  return (
    <form
      className="p-20 flex flex-col space-y-10 border rounded-md"
      onSubmit={loginSubmitHandler}
    >
      <div className="div">
        <label className="label" htmlFor="id">
          아이디
        </label>
        <input
          className="input"
          ref={emailRef}
          id="id"
          type="text"
          placeholder="아이디"
        />
      </div>
      <div className="div">
        <label className="label" htmlFor="password">
          패스워드
        </label>
        <input
          className="input"
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="패스워드"
        />
      </div>
      <button
        className="py-2 border rounded-md text-lg transition hover:bg-slate-500 hover:text-white"
        type="submit"
      >
        로그인
      </button>
    </form>
  );
};

export default AuthForm;
