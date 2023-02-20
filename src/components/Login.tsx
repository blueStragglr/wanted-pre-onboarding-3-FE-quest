import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

import { validateEmail } from "../utils/common";

function SnsIcon({ sns, handleClickSns }: { sns: string; handleClickSns: (sns: string) => void }) {
  return (
    <li onClick={() => handleClickSns(sns)} className="text-center cursor-pointer">
      <div className="mb-1 w-16 h-16 flex justify-center items-center border rounded-full">{sns[0].toUpperCase()}</div>
      <div className="text-xs font-semibold text-gray-400">{sns}</div>
    </li>
  );
}

export default function Login() {
  const [emailValue, setEmailValue] = useState("");

  const handleChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmailValue(event.currentTarget.value);
  };

  const handleClickSns = (sns: string) => {
    alert(`Click ${sns}`);
  };

  const handleClickEmailLogin = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Login");
  };

  const isEmail = validateEmail(emailValue);

  return (
    <div className="w-full h-full flex justify-center items-center" style={{ backgroundColor: "rgb(247,247,247)" }}>
      <div
        className={clsx(
          "py-20 w-full h-full flex flex-col items-center border rounded-md bg-white overflow-auto scroll-hide",
          "md:w-96 md:h-5/6"
        )}
      >
        <Link to="/" className="mb-5 text-xl font-extrabold w-24 h-auto">
          <svg viewBox="0 0 93 28">
            <path
              d="M4.77051 23H8.68066L11.626 13.7578L14.5967 23H18.5068L22.874 9.28906H18.9639L16.4248 18.0996L13.4541 9.28906H9.79785L6.82715 18.0996L4.28809 9.28906H0.37793L4.77051 23ZM22.8486 16.1191C22.8486 19.6865 25.1084 23.3301 29.5264 23.3301C31.0371 23.3428 32.332 22.9111 33.3857 22.1621V23H36.9658V9.28906H33.3857V10.127C32.332 9.37793 31.0371 8.94629 29.5264 8.95898C25.1084 8.95898 22.8486 12.5518 22.8486 16.1191ZM26.3271 16.1191C26.3145 13.6689 27.9902 12.2725 29.9326 12.2598C31.8496 12.2725 33.3604 13.6309 33.3604 16.0938C33.3604 18.5693 31.8496 20.0166 29.9326 20.0039C27.9268 20.0166 26.3145 18.5693 26.3271 16.1191ZM39.1494 23H42.8564V15.1035C42.8564 13.5166 43.7832 12.2725 45.4209 12.2598C47.1855 12.2725 47.9346 13.4658 47.9346 15.002V23H51.6416V14.3418C51.6416 11.3457 50.0928 8.9209 46.6904 8.9082C45.2432 8.9209 43.6309 9.54297 42.7803 10.8887V9.28906H39.1494V23ZM52.708 12.5645H55.1963V18.9375C55.1963 21.6035 56.8594 23.3301 59.5381 23.3301C60.6172 23.3301 61.29 23.1396 61.6201 23V19.7754C61.4297 19.8516 60.9219 19.9023 60.4775 19.9023C59.4238 19.9023 58.8779 19.5088 58.8779 18.3027V12.5645H61.6201V9.28906H58.8779V4.69336L55.2471 6.2168V9.28906H52.708V12.5645ZM62.8389 16.1445C62.8389 20.0928 65.3652 23.3428 69.5166 23.3301C72.5381 23.3428 74.7217 21.6035 75.6865 19.0898L72.3857 18.4043C71.8398 19.585 70.8369 20.3594 69.5166 20.3594C67.752 20.3594 66.5586 18.9756 66.2666 17.1094H76.1436C76.1816 16.792 76.1943 16.4746 76.1943 16.1445C76.1943 11.9551 73.4395 8.95898 69.5166 8.95898C65.4414 8.95898 62.8389 12.1836 62.8389 16.1445ZM66.4443 14.5449C66.9014 13.1992 67.9932 12.2598 69.5166 12.2598C71.04 12.2598 72.1445 13.1992 72.6143 14.5449H66.4443ZM77.4131 16.1191C77.4131 20.1055 79.9395 23.3428 84.0908 23.3301C85.6016 23.3428 86.8965 22.8984 87.9502 22.1621V23L91.5049 23.0254V3.27148L87.874 4.69336V10.0762C86.7568 9.32715 85.4365 8.95898 84.0908 8.95898C80.0029 8.95898 77.4131 12.1201 77.4131 16.1191ZM80.8662 16.1191C80.8662 13.6562 82.542 12.2725 84.4717 12.2598C86.4141 12.2725 87.9121 13.6309 87.9248 16.0684C87.9121 18.5693 86.4141 20.0166 84.4717 20.0039C82.4912 20.0166 80.8662 18.5693 80.8662 16.1191Z"
              fill="black"
            ></path>
          </svg>
        </Link>

        <h2 className="mb-5 text-2xl font-extrabold">프론트앤드</h2>
        <h3 className="mb-14 text-gray-500">프리온보딩 챌린지로 취업하자 #3</h3>
        <form className="mb-3 px-4 w-full">
          <div className="mb-10 flex flex-col">
            <label htmlFor="email" className="mb-2 text-xs font-extrabold text-gray-500">
              이메일
            </label>
            <input
              type="email"
              name="email"
              value={emailValue}
              onChange={handleChangeEmail}
              placeholder="이메일을 입력해주세요"
              className={clsx("mb-2 p-3 rounded outline outline-1 outline-gray-300", "focus:outline-blue-500", {
                "outline-red-500 focus:outline-red-500": emailValue.length > 0 && !isEmail,
              })}
            />
            {emailValue.length > 0 && !isEmail && (
              <div className="text-xs text-red-500">올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          <button
            disabled={!isEmail}
            onClick={handleClickEmailLogin}
            className={clsx("py-3 w-full rounded-full font-bold -tracking-widest", {
              "text-gray-300 bg-gray-100": !isEmail,
              "text-white bg-blue-500": isEmail,
            })}
          >
            이메일로 계속하기
          </button>
        </form>
        <div className="mb-5 text-xs">또는</div>
        <ul className="w-full flex justify-evenly">
          <SnsIcon sns="Apple" handleClickSns={handleClickSns} />
          <SnsIcon sns="Facebook" handleClickSns={handleClickSns} />
          <SnsIcon sns="Google" handleClickSns={handleClickSns} />
          <SnsIcon sns="Kakao" handleClickSns={handleClickSns} />
        </ul>
      </div>
    </div>
  );
}
