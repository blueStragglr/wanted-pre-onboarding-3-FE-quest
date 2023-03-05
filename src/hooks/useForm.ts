import React from "react";
import useInput from "./useInput";

const useForm = () => {
  const [userName, setUserName, handleChangeUserName] = useInput("");
  const [password, setPassword, handleChangePassword] = useInput("");

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserName("");
    setPassword("");
  };

  return {
    state: { userName, password },
    onChange: { handleChangeUserName, handleChangePassword },
    onSubmit: { handleSubmitForm },
  };
};

export default useForm;
