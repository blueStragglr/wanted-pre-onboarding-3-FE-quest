import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isId, setIsId] = useState();
  const isPassword = /^(?=.*\d)(?=.*[A-Za-z]).{8,20}$/.test(password);

  const changeId = (e) => {
    const idRegex = /^([0-9a-z]){6,15}$/;
    const idCurrent = e.target.value;
    setId(idCurrent);

    !idRegex.test(idCurrent) ? setIsId(false) : setIsId(true);
  };

  const changePsw = (e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
  };

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
              onChange={changeId}
            ></input>
            {id &&
              (!isId ? (
                <span className="flex items-center justify-center text-md text-red-300 mt-1">
                  6~15자의 영문소문자, 숫자로 입력해주세요.
                </span>
              ) : (
                <span className="flex items-center justify-center text-md text-cyan-500 mt-1">
                  올바른 아이디입니다
                </span>
              ))}
          </div>

          <input
            type="password"
            className="text-md font-[#AAA] w-[328px] h-[45px] mx-auto shadow-custom rounded-full flex items-center px-5 focus:outline-blue-300 focus:shadow-none"
            placeholder="비밀번호(영문, 숫자 포함 8~20자 조합)"
            onChange={changePsw}
          ></input>
          {password &&
            (!isPassword ? (
              <span className="flex items-center justify-center text-md text-red-300 mt-1">
                영문, 숫자 포함 8~20자 조합으로 입력해주세요.
              </span>
            ) : (
              <span className="flex items-center justify-center text-md text-cyan-500 mt-1">
                사용가능한 비밀번호입니다.
              </span>
            ))}
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
