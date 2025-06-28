import React from "react";
import styles from "./ProjectCardStyles.module.css";
import Slideshow from "../../common/ImageDisplay";
import Tag from "../../common/Tag";

function ProjectCard({ h1, h2, p, images, links, tags }) {
  return (
    <section className={styles.projectCard}>
      <div className={styles.title}>
        <h3>{h1}</h3>
      </div>
      <div className={styles.projectCardContent}>
        <div className={styles.left}>
          <p className={styles.text}>{h2}</p>
          <br />
          <p className={styles.text}>{p}</p>
          {links.length > 0 && (
            <ul>
              {links.map(({ text, url }, i) => (
                <li key={i}>
                  <a
                    className={styles.link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.right}>
          <Slideshow images={images} />
        </div>
      </div>

      <div className="tags">
        {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
      </div>
    </section>
  );
}

export default ProjectCard;
