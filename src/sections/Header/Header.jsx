import styles from "./HeaderStyles.module.css";
import logoImg from "../../assets/logo.svg";

function Header() {
  return (
    <div className={styles.container} id="header">
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={logoImg} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
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
