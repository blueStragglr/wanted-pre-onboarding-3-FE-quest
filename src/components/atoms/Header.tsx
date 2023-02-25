import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [access, setAccess] = useState(sessionStorage.getItem("access"));

  /** 로그아웃 시 세션스토리지 access 상태 지움 */
  const logout = () => {
    sessionStorage.removeItem("access");
    setAccess("");
  };

  return (
    <div className="h-[100px] w-full bg-mainColor flex items-center justify-between">
      <div
        className="font-bold text-[#fff] text-2xl cursor-pointer pl-7"
        onClick={() => navigate("/home")}
      >
        wanted Pre-onboarding course
      </div>
      <div className="pr-3  text-[#fff] text-sm cursor-pointer">
        {access ? (
          <div onClick={logout}>Logout</div>
        ) : (
          <div onClick={() => navigate("/login")}>Login</div>
        )}
      </div>
    </div>
  );
};
