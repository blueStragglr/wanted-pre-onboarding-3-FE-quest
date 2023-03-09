import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordlRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordlRef.current?.value;
    if (!username || !password) {
      return window.alert("이메일과 패스워드를 모두 입력 해주세요.");
    }
    if (username && password) {
      window.localStorage.setItem("login", `${true},${username},${password}`);
      usernameRef.current.value = "";
      passwordlRef.current.value = "";
      navigate("/");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>LOGIN</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="username"
            ref={usernameRef}
            placeholder="USERNAME"
          />
          <input
            type="password"
            name="password"
            ref={passwordlRef}
            placeholder="PASSWORD"
          />
          <input className={styles.button} type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
}
const styles = {
  container: "h-screen flex items-center",
  wrapper: "flex flex-col items-center m-auto",
  title: " text-xl text-blue-500",
  form: "flex flex-col",
  input: "",
  button:
    "bg-slate-400 w-fit self-center rounded hover:text-stone-300 active:bg-slate-500",
};
