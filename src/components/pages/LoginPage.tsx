import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { RiErrorWarningFill } from "react-icons/ri";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  /** 로그인 버튼 클릭시 validation 체크 후 세션스토리지에 성공 여부 저장 */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "") {
      setErrorMessage("username을 입력해주세요.");
    } else if (password.trim() === "") {
      setErrorMessage("password를 입력해주세요.");
    } else {
      sessionStorage.setItem("access", "true");
      navigate("/");
    }
  };

  return (
    <div className="bg-bgColor w-full h-full flex justify-center items-center">
      <div className="h-[50%] w-full bg-subColor text-mainColor flex flex-col justify-center sm:w-[400px] ">
        <img
          src="/Cute-Cloud-Coloring-Book.svg"
          alt=""
          className="w-full h-20"
        />
        <div className="w-full flex flex-col mx-auto justify-around sm:w-[300px] sm:p-1 h-[260px] pl-3 pr-3">
          <div className="w-full flex rounded-full h-[30px] justify-center font-medium text-2xl mb-3">
            Welcome back
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col h-full justify-evenly"
          >
            <Input
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrorMessage("");
              }}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage("");
              }}
            />
            <div className="h-[10px] flex justify-center text-xs">
              {errorMessage && (
                <div className="flex flex-row items-center">
                  <RiErrorWarningFill className="mr-1" />
                  {errorMessage}
                </div>
              )}
            </div>

            <Button label="Continue" onClick={onSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};
