import { useState } from "react";
import { cls } from "../util";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const isPassword = /^(?=.*\d)(?=.*[A-Za-z]).{8,20}$/.test(password);
  const isId = /^([0-9a-z]){6,15}$/.test(id);

  return (
    <div className="pt-20">
      <section className="px-4">
        <div className="text-lg text-[#666] font-semibold text-center mb-[14px]">
          로그인
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              className="text-md font-[#AAA] w-[328px] h-[45px] mx-auto shadow-custom rounded-full flex items-center px-5 focus:outline-blue-300 focus:shadow-none"
              placeholder="아이디(6~15자의 영문소문자, 숫자)"
              onChange={(e) => setId(e.target.value)}
            ></input>
            {id && (
              <span
                className={cls(
                  isId ? "text-cyan-500" : "text-red-300",
                  "flex items-center justify-center text-md mt-1"
                )}
              >
                {isId
                  ? "올바른 아이디입니다"
                  : "6~15자의 영문소문자, 숫자로 입력해주세요."}
              </span>
            )}
          </div>

          <input
            type="password"
            className="text-md font-[#AAA] w-[328px] h-[45px] mx-auto shadow-custom rounded-full flex items-center px-5 focus:outline-blue-300 focus:shadow-none"
            placeholder="비밀번호(영문, 숫자 포함 8~20자 조합)"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {password && (
            <span
              className={cls(
                isPassword ? "text-cyan-500" : "text-red-300",
                "flex items-center justify-center text-md mt-1"
              )}
            >
              {isPassword
                ? "사용가능한 비밀번호입니다."
                : "영문, 숫자 포함 8~20자 조합으로 입력해주세요."}
            </span>
          )}
        </div>
        <button
          disabled={!isId || !isPassword}
          className="w-[328px] h-[45px] flex items-center justify-center mx-auto text-white bg-blue-500 disabled:bg-[#AAA] text-center rounded-full mt-8 shadow-custom"
        >
          다음
        </button>
      </section>
    </div>
  );
};

export default Login;
