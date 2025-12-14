import React from "react";
import styles from "./HeaderStyles.module.css";
import linkedinLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import itchLogo from "../../assets/itchLogo.svg";

function Header() {
  return (
    <div className={styles.container} id="header">
      <div className={styles.content}>
        <div className={styles.left}>
          <a className={styles.logo}>jmfortt</a>
        </div>
        <div className={styles.center}>
          <a className={styles.text} href="#hero">
            Home
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
        <div className={styles.right}>
          <a
            href="https://www.linkedin.com/in/jmfortt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn icon" />
          </a>
          <a
            href="https://github.com/jmfortt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub icon" />
          </a>
          <a
            href="https://jmfortt.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={itchLogo} alt="Itch.io icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
