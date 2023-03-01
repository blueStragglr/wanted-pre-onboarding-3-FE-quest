import Sidebar from "./Sidebar";
import Headers from "./Header";
import styles from "./Layout.module.css";

const HomeLayout = ({ children, subRootList }) => {
  return (
    <div className={styles["home-wrapper"]}>
      <Headers />
      <section className={styles["home-body"]}>
        <article className={styles.sidebar}>
          <Sidebar subRootList={subRootList} />
        </article>
        <article className={styles.page}>{children}</article>
      </section>
    </div>
  );
};

export default HomeLayout;
