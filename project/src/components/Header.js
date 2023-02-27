import { Link } from "react-router-dom";
import style from "styles/Header.module.css";

export function Header(props) {
  return (
    <div className={style.header}>
      <Link to={"/"}>
        <h1 className={style.title}>Wanted Pre-onboarding course</h1>
      </Link>
    </div>
  );
}
