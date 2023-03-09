import { useState } from "react";

export const Authorization = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isLogin) {
    //페이지 라우팅
    return <>로그인이 필요한 페이지입니다.</>;
  }

  return <>{children}</>;
};
