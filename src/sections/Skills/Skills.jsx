import React from "react";
import styles from "./SkillsStyles.module.css";

import Tag from "../../common/Tag";

function Skills() {
  const tags = [
    "foo",
    "bar",
    "baz",
    "foo",
    "bar",
    "baz",
    "foo",
    "bar",
    "baz",
    "foo",
    "bar",
    "baz",
    "foo",
    "bar",
    "baz",
    "foo",
    "bar",
    "baz",
    "foo",
    "bar",
    "baz",
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.content}>
        <div className="tags">
          {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
