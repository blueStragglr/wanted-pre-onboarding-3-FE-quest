import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { PATH_NAME } from "../constants/path";

const useAuth = () => {
  const { setLoginStatus } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    const token = new Date().getTime().toString();
    setLoginStatus(token);

    navigate(PATH_NAME.PAGE_A);
  };

  return { login };
};

export default useAuth;
