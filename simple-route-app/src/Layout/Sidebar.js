import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { v4 } from "uuid";
const Sidebar = ({ subRootList }) => {
  return (
    <>
      <nav className={styles["sidebar-wrapper"]}>
        {subRootList.map(({ path, linkName }) => {
          return (
            <ul key={v4()}>
              <Link to={path}>{linkName}</Link>
            </ul>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
