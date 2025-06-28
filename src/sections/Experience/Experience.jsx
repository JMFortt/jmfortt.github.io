import React from "react";
import styles from "./ExperienceStyles.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.content}>
        <ul className={styles.text}>
          <li>foo</li>
          <li>foo</li>
          <li>foo</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
