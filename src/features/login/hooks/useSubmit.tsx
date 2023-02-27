import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const useSubmit = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passowrdRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      username: usernameRef.current?.value,
      passowrd: passowrdRef.current?.value,
    });

    navigate("/");
  };

  return {
    usernameRef,
    passowrdRef,
    onSubmit,
  };
};

export default useSubmit;
