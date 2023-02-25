import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Sidebar = (props) => {
  return (
    <>
      <nav className={styles["sidebar-wrapper"]}>
        <ul>
          <Link to={`sub/A`}>page A</Link>
        </ul>
        <ul>
          <Link to={`sub/B`}>page B</Link>
        </ul>
        <ul>
          <Link to={`sub/C`}>page C</Link>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
