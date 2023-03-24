import { useInput } from "src/hooks/useInput";
import useAuth from "./useAuth";
import { isValidate } from "../../../utils/validate";

const useLoiginForm = () => {
  const [username, setUserName, onUserName] = useInput("");
  const [passwrd, setPasswrd, onPasswrd] = useInput("");

  const { login } = useAuth();

  const Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidate([username, passwrd])) return;
    login();
    setUserName("");
    setPasswrd("");
  };
  return {
    state: { username, passwrd },
    onEvent: { onUserName, onPasswrd },
    onSubmit: { Submit },
  };
};

export default useLoiginForm;
