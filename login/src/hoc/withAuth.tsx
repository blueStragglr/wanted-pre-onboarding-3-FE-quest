import React, { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth =
  (Component: ComponentType, isLoginOrJoin?: boolean) =>
  <P extends {}>(props: P) => {
    const navigate = useNavigate();

    useEffect(() => {
      const isLogin = sessionStorage.getItem("isLogin");
      if (!isLogin) {
        if (window.confirm("로그인 후 이용해주세요")) {
          navigate("/login");
        } else {
          navigate(-1);
        }
      }
    }, []);
    return <Component {...props} />;
  };

export default withAuth;
