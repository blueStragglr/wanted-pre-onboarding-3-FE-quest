import { useState } from "react";
import styles from "./signinForm.module.css";

interface propsType {
  buttonValue: string;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void;
}

const SignForm = (props: propsType) => {
  const { buttonValue, onSubmit } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmailHandle = (email: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(email.target.value);
  };

  const changePasswordHandle = (email: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(email.target.value);
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e, email, password)}
      className={styles["signForm"]}
    >
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={changeEmailHandle}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={changePasswordHandle}
      ></input>
      <button type="submit">{buttonValue}</button>
    </form>
  );
};

export default SignForm;
