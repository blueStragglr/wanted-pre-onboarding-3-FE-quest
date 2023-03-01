import React, { useState } from "react";
import styles from "./Sidbar.module.css";
import { Link } from "react-router-dom";

const Sidbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (event) => {
    setActiveLink(event.target.textContent);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link
          to={"/"}
          className={`${styles.list} ${
            activeLink === "Page A" ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Page A
        </Link>
        <Link
          to={"/pageB"}
          className={`${styles.list} ${
            activeLink === "Page B" ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Page B
        </Link>
        <Link
          to={"/pageA"}
          className={`${styles.list} ${
            activeLink === "Page C" ? styles.active : ""
          }`}
          onClick={handleLinkClick}
        >
          Page C
        </Link>
      </nav>
    </div>
  );
};

export default Sidbar;
