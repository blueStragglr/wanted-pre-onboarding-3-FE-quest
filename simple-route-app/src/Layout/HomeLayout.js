import Sidebar from "./Sidebar";
import Headers from "./Header";
import styles from "./Layout.module.css";

const HomeLayout = ({ children }) => {
  return (
    <div className={styles["home-wrapper"]}>
      <Headers />
      <section className={styles["home-body"]}>
        <article className={styles.sidebar}>
          <Sidebar />
        </article>
        <article className={styles.page}>{children}</article>
      </section>
    </div>
  );
};

export default HomeLayout;
