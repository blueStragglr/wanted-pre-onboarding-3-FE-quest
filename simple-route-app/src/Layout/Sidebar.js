import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Sidebar = ({ subRootList }) => {
  return (
    <>
      <nav className={styles["sidebar-wrapper"]}>
        {subRootList.map(({ path, linkName }) => {
          return (
            <ul>
              <Link to={path}>{linkName}</Link>
            </ul>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
