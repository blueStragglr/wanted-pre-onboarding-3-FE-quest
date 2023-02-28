import { useRef } from "react";
import { setAuth } from "../../libs/authAction";
import ShareButton from "../common/ShareButton";
import ShareInput from "../common/ShareInput";
import ShareLabel from "../common/ShareLabel";

const AuthForm = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      if (emailRef.current.value.trim() === "") {
        return;
      }

      if (passwordRef.current.value.trim() === "") {
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
        <ShareLabel className="label" htmlFor="id" text="아이디" />
        <ShareInput
          className="input"
          ref={emailRef}
          id="id"
          type="text"
          placeholder="아이디"
        />
      </div>
      <div className="div">
        <ShareLabel className="label" htmlFor="password" text="패스워드" />
        <ShareInput
          className="input"
          ref={passwordRef}
          id="password"
          type="password"
          placeholder="패스워드"
        />
      </div>
      <ShareButton className="button" type="submit" text="로그인" />
    </form>
  );
};

export default AuthForm;
