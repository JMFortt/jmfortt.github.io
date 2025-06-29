import React from "react";
import styles from "./ProjectCardStyles.module.css";
import Slideshow from "../../common/ImageDisplay";
import Tag from "../../common/Tag";

function ProjectCard({ h1, h2, p, images, links, tags }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.title}>{h1}</div>
            <p className={styles.subtitle}>{h2}</p>
          </div>

          <div className={styles.middle}>
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

          <div className={styles.bottom}>
            <div className="tags" style={{ marginBottom: "0px" }}>
              {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <Slideshow images={images} />
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
