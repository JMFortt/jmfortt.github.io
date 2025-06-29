import React from "react";
import styles from "./SkillsStyles.module.css";

import Tag from "../../common/Tag";

function Skills() {
  const languages = [
    "Python",
    "Java",
    "C",
    "C#",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "GDScript",
  ];

  const toolsTechnologies = [
    "Git",
    "Linux",
    "Arduino",
    "Firebase",
    "Godot",
    "Unity",
    "Ros2",
    "Docker",
    "SOLIDWORKS",
    "React",
    "Figma",
    "Aseprite",
    "Vite",
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.content}>
        <p className={styles.text} style={{ marginTop: "0px" }}>
          Languages
        </p>
        <div className="tags">
          {languages && languages.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
        <p className={styles.text}>Tools/Technologies</p>
        <div className="tags">
          {toolsTechnologies &&
            toolsTechnologies.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
