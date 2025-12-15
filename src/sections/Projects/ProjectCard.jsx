import styles from "./ProjectCardStyles.module.css";
import Slideshow from "../../common/ImageDisplay";
import Tag from "../../common/Tag";
import githubLogo from "../../assets/githubLogo.svg";
import externalIcon from "../../assets/externalLink.svg";

function ProjectCard({ h1, h2, p, images, links, tags }) {
  return (
    <section className={styles.container}>
      <Slideshow images={images} />

      <div className={styles.content}>
        <div className="tags" style={{ marginBottom: "0px" }}>
          {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
        </div>
        <div className={styles.title}>{h1}</div>
        <p className={styles.subtitle}>{h2}</p>
        <div className={styles.middle}>
          <p className={styles.text}>{p}</p>
        </div>
        {links.length > 0 && (
          <div className={styles.linkIcons}>
            {links.map(({ text, url }, i) => {
              const isGithub = url && url.includes("github.com");
              const src = isGithub ? githubLogo : externalIcon;
              const label = isGithub ? "GitHub" : "External link";
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}: ${text}`}
                  className={styles.linkIcon}
                >
                  <img src={src} alt={label} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectCard;
