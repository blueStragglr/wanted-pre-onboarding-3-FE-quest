import { useNavigate } from "react-router";
import SignForm from "../../common/signForm/SignForm";
import styles from "./sign.module.css";

// TODO: 회원가입이 필요해지면 사용
const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
  };

  return (
    <div className={styles["SignContainer"]}>
      <div className={styles["signFormWraper"]}>
        <div className={styles["title"]}>Sing Up</div>
        <p>
          <span onClick={() => navigate("/signin")}>Have an account?</span>
        </p>
        <SignForm onSubmit={onSubmit} buttonValue="Sign Up"></SignForm>
      </div>
      <p className={styles["homeButton"]} onClick={() => navigate("/")}>
        Back home
      </p>
    </div>
  );
};

export default SignUp;
