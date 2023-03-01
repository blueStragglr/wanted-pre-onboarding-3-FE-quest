import React from "react";
import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Sidbar />
      <div>Hello, there!</div>
    </div>
  );
};

export default Home;
