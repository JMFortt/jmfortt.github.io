import styles from "./HeaderStyles.module.css";

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
        </div>
      </div>
    </div>
  );
}

export default Header;
