import React from "react";
import useInput from "../../../hooks/useInput";
import useAuth from "../../../hooks/useAuth";
import { isInValidForm } from "../../../utils/validate";

const useLoginForm = () => {
  const [userName, setUserName, handleChangeUserName] = useInput("");
  const [password, setPassword, handleChangePassword] = useInput("");

  const { login } = useAuth();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isInValidForm([userName, password])) return;

    login();

    setUserName("");
    setPassword("");
  };

  return {
    state: { userName, password },
    onChange: { handleChangeUserName, handleChangePassword },
    onSubmit: { handleSubmitForm },
  };
};

export default useLoginForm;
