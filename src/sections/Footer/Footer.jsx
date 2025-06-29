import React from "react";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>© 2025 Julia Fortt | Designed in Figma </p>
      </div>
    </section>
  );
}

export default Footer;
