import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "./ProjectCard";

import molemakerImg1 from "../../assets/moleMaker/img1.png";
import molemakerImg2 from "../../assets/moleMaker/img2.png";
import molemakerImg3 from "../../assets/moleMaker/img3.png";
import molemakerImg4 from "../../assets/moleMaker/img4.png";

import trashBanditsRecycledImg1 from "../../assets/trashBanditsRecycled/img1.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          h1="MoleMaker"
          h2="An educational video game."
          p="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          images={[molemakerImg1, molemakerImg2, molemakerImg3, molemakerImg4]}
          links={[
            {
              text: "See the git repo here",
              url: "https://github.com/JMFortt",
            },
            {
              text: "play the game here",
              url: "https://jmfortt.itch.io/mole-maker",
            },
          ]}
          tags={["Godot", "GDScript", "GitHub"]}
        />
        <ProjectCard
          h1="Trash Bandits:Recycled"
          h2="A collaborative 2-player video game."
          p="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          images={[trashBanditsRecycledImg1]}
          links={[
            {
              text: "See the git repo here",
              url: "https://github.com/JMFortt",
            },
            {
              text: "play the game here",
              url: "https://jmfortt.itch.io/trash-bandits-recycled",
            },
          ]}
          tags={["Unity", "C#", "GitHub"]}
        />
        <ProjectCard
          h1="Pomodoro Work Timer"
          h2="A small productivity web app."
          p="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          images={[]}
          links={[
            {
              text: "See the git repo here",
              url: "https://github.com/JMFortt",
            },
          ]}
          tags={["Java", "JavaFX", "GitHub"]}
        />
        <ProjectCard
          h1="Autonomous Arduino Robot"
          h2="Robotics project."
          p="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          images={[]}
          links={[]}
          tags={["C", "Arduino", "SOLIDWORKS"]}
        />
        <ProjectCard
          h1="PID Line Follower"
          h2="Robotics project."
          p="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          images={[]}
          links={[]}
          tags={["C", "Arduino"]}
        />
        <ProjectCard
          h1="Portfolio Website"
          h2="This site!"
          p="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
          images={[]}
          links={[]}
          tags={["Javascript", "HTML", "CSS", "React", "GitHub"]}
        />
      </div>
    </section>
  );
}

export default Projects;
