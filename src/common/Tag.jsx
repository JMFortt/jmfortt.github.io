import React from "react";
import styles from "./TagStyles.module.css";

function Tag({ tag }) {
  return <div className={styles.tag}>{tag}</div>;
}

export default Tag;
