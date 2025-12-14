import React from "react";
import styles from "./HeroStyles.module.css";
import profileImg from "../../assets/profileImage.jpg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img
            className={styles.avatar}
            src={profileImg}
            alt="Profile picture of Julia Fortt"
          />
        </div>
        <div className={styles.right}>
          <p className={styles.text}>Hi, I'm</p>
          <h1 className={styles.title}>Julia Fortt</h1>
          <h2 className={styles.subtitle}>&lt;Developer/Engineer/Artist&gt;</h2>
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
