import styles from "./ExperienceStyles.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.content}>
        <p className={styles.text} style={{ marginTop: "0px" }}>
          MIT Intro to CS/Data Science Teaching Assistant | Expected Sept. 2025
          - Dec. 2025
        </p>
        <p className={styles.text}>
          Amazon SDE Intern | June 2025 - Aug. 2025{" "}
        </p>
        <p className={styles.text}>
          MIT Game Development Guild Secretary | Sept. 2024 - May 2026
        </p>
        <p className={styles.text}>
          MIT Intro to CS/Data Science Lab Assistant | Sept. 2025 - May 2025
        </p>
        <p className={styles.text}>
          MIT Game Lab Psims UROP | June 2024 - Aug. 2024{" "}
        </p>
      </div>
    </section>
  );
}

export default Experience;
