import React from "react";
import Login from "./Login";

const IsLogin = () => {
  const isLogin = false;

  if (!isLogin) {
    return <Login />;
  }
};

export default IsLogin;
