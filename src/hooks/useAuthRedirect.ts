import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const useAuthRedirect = () => {
  const access = sessionStorage.getItem("access");
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/login");
    }
  }, [access]);
};
