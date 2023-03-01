import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");

  const onSubmitSignUp = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="text-xl font-extrabold cursor-pointer mb-10"
      >
        Wanted Pre-Onboarding Course
      </h1>
      <form
        onSubmit={onSubmitSignUp}
        className="w-96 flex flex-col items-center shadow-lg px-8 py-5 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-7">Join Wanted Course</h2>
        <label className="w-full mb-1">아이디</label>
        <input
          type="text"
          placeholder="wanted03"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full mb-4 border-b px-2 py-1"
        />
        <label className="w-full mb-1">비밀번호</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 border-b px-2 py-1"
        />
        <label className="w-full mb-1">비밀번호 확인</label>
        <input
          type="password"
          placeholder="********"
          value={confimPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 border-b px-2 py-1"
        />
        <button className="w-40 py-2 rounded-md bg-indigo-100">회원가입</button>

        <div className="flex flex-row mt-4">
          <p className="mr-4">이미 회원이신가요?</p>
          <Link to="/signin" className="text-indigo-400 font-semibold">
            로그인
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
