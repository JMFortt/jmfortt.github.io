import React from "react";
import styles from "./HeaderStyles.module.css";

function Header() {
  return (
    <div className={styles.container} id="header">
      <div className={styles.content}>
        <div className={styles.left}>
          <a className={styles.text}>jmfortt</a>
        </div>
        <div className={styles.right}>
          <a className={styles.text} href="#profile">
            Profile
          </a>
          <a className={styles.text} href="#projects">
            Projects
          </a>
          <a className={styles.text} href="#skills">
            Skills
          </a>
          <a className={styles.text} href="#experience">
            Experience
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
