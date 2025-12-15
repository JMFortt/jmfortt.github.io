import styles from "./HeroStyles.module.css";
import linkedinLogo from "../../assets/linkedinLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";
import itchLogo from "../../assets/itchLogo.svg";
import TextType from "../../common/TextType";

function Hero() {
  return (
    <section id="hero" className={styles.container} scroll-margin-top="0px">
      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.text}>Hi, I'm</p>
          <h1 className={styles.title}>Julia Fortt</h1>
          <h2 className={styles.subtitle}>
            <TextType
              text={["Developer", "Engineer", "Artist"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>
          <p className={styles.text}>
            I’m currently a senior at the Massachusetts Institute of Technology,
            pursuing a B.S. in computer science with a focus in AI alongside a
            certificate in autonomous machines.
            <br />
            <br />
            I’m particularly passionate about robotics, game development, and
            EdTech, but I love to learn, design and build all sorts of things.
            <br />
            <br />
            <a
              className={styles.text}
              style={{ color: "var(--contrast-color)" }}
            >
              Want to get in touch?{" "}
            </a>
            Feel free to reach out on LinkedIn!
          </p>
          <div className={styles.icons}>
            <a
              className={styles.icon}
              href="https://www.linkedin.com/in/jmfortt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn icon" />
            </a>
            <a
              className={styles.icon}
              href="https://github.com/jmfortt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub icon" />
            </a>
            <a
              className={styles.icon}
              href="https://jmfortt.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={itchLogo} alt="Itch.io icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
