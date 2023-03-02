import { type ChangeEvent, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { signIn } from "../features/authSlice";

function SignIn() {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const id = new Date().getTime().toString();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      signIn({
        id,
        username: user.username.trim(),
      })
    );

    alert("로그인에 성공하였습니다!");
    navigate("/");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-2/6 rounded border border-gray-400 p-8"
    >
      <div className="mb-3 flex flex-col gap-2">
        <label htmlFor="username">이름</label>
        <input
          onChange={onChange}
          className="p-2"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="mb-3 flex flex-col gap-2">
        <label htmlFor="password">비밀번호</label>
        <input
          onChange={onChange}
          className="p-2"
          type="password"
          name="password"
          id="password"
        />
      </div>

      <button
        disabled={
          user.username.trim().length < 1 || user.password.trim().length < 1
        }
        className="btn-ghost btn text-lg font-semibold"
      >
        로그인
      </button>
    </form>
  );
}
export default SignIn;
