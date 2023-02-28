import { useNavigate } from "react-router";
import { userIsVaild } from "../../../atom/atom";
import SignForm from "../../common/signForm/SignForm";
import styles from "./sign.module.css";
import { useSetRecoilState } from "recoil";

const SignIn = () => {
  const navigate = useNavigate();
  const setUserIsVaild = useSetRecoilState(userIsVaild);
  const onSubmit = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUserIsVaild(localStorage.getItem("user"));
    navigate("/");
  };

  return (
    <div className={styles["SignContainer"]}>
      <div className={styles["signFormWraper"]}>
        <div className={styles["title"]}>Sing In</div>
        <p>
          <span onClick={() => navigate("/signup")}>Need an account?</span>
        </p>
        <SignForm onSubmit={onSubmit} buttonValue="Sign In"></SignForm>
      </div>
      <p className={styles["homeButton"]} onClick={() => navigate("/")}>
        Back home
      </p>
    </div>
  );
};

export default SignIn;
