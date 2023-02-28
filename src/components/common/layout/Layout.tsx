import { ReactNode } from "react";
import Gnb from "../gnb/Gnb";
import Header from "../header/Header";

import styles from "./layout.module.css";

interface propsType {
  children: ReactNode;
}

const Layout = (props: propsType) => {
  return (
    <>
      <Header></Header>
      <div className={styles.layout}>
        <aside>
          <Gnb></Gnb>
        </aside>
        {props.children}
      </div>
    </>
  );
};

export default Layout;
