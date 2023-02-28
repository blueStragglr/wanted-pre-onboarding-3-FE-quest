import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { userIsVaild } from "../../../atom/atom";
import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userIsVaild);

  const logoutHandle = () => {
    localStorage.removeItem("user");
    setUser(localStorage.getItem("user"));
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h1 onClick={() => navigate("/")}>wanted pre-onboarding course</h1>
      {user ? (
        <button className={styles["signIn"]} onClick={logoutHandle}>
          Log out
        </button>
      ) : (
        <button
          className={styles["signIn"]}
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      )}
    </header>
  );
};

export default Header;
