// 스토리지 값을 활용한 로그인 여부 확인

import { useEffect, useState } from "react";

function useIsLogin() {
  useEffect(() => {
    const myId = localStorage.getItem("myId");
    if (myId) {
      return;
    } else if (!myId) {
      alert("로그인이 필요한 페이지입니다.");
      window.location.href = "/login";
    }
  }, []);

  return;
}

export default useIsLogin;
