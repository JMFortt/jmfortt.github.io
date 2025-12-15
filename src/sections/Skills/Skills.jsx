import styles from "./SkillsStyles.module.css";

import Tag from "../../common/Tag";

function Skills() {
  const languages = [
    "Python",
    "Java",
    "C",
    "C#",
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "GDScript",
  ];

  const gameDev = ["Godot", "Unity", "Aseprite"];

  const robotics = ["ROS2", "Arduino", "SOLIDWORKS"];

  const webDev = ["React", "Vite", "Figma", "Node.js"];

  const general = ["Git", "Linux", "Firebase", "Docker"];

  return (
    <section className={styles.container}>
      <h1 id="skills" className="sectionTitle">
        <span className="my">My</span> <span>Skills</span>
      </h1>
      <p className="sectionSubTitle">
        {" "}
        Loosely organized into programming languages, specific domains, and
        general tools/technologies.
      </p>

      <div className={styles.content}>
        <p className={styles.text} style={{ marginTop: "0px" }}>
          Programming Languages
        </p>
        <div className="tags">
          {languages && languages.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
        <p className={styles.text}>Game Development</p>
        <div className="tags">
          {gameDev && gameDev.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
        <p className={styles.text}>Robotics</p>
        <div className="tags">
          {robotics && robotics.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
        <p className={styles.text}>Web Development</p>
        <div className="tags">
          {webDev && webDev.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
        <p className={styles.text}>General Tools/Technologies</p>
        <div className="tags">
          {general && general.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
