import styles from "./ProjectsStyles.module.css";
import ProjectCard from "./ProjectCard";

import liquidSimGameImg1 from "../../assets/liquidSimGame/img1.png";
import liquidSimGameImg2 from "../../assets/liquidSimGame/img2.png";
import liquidSimGameImg3 from "../../assets/liquidSimGame/img3.png";

import bounceBackImg1 from "../../assets/bounceBack/img1.png";

import pomodoroTimerImg1 from "../../assets/pomodoroTimer/img1.png";

import personalWebsiteImg1 from "../../assets/personalWebsite/img1.png";

import molemakerImg1 from "../../assets/moleMaker/img1.png";
import molemakerImg2 from "../../assets/moleMaker/img2.png";
import molemakerImg3 from "../../assets/moleMaker/img3.png";
import molemakerImg4 from "../../assets/moleMaker/img4.png";

import trashBanditsRecycledImg1 from "../../assets/trashBanditsRecycled/img1.png";
import trashBanditsRecycledImg2 from "../../assets/trashBanditsRecycled/img2.png";
import trashBanditsRecycledImg3 from "../../assets/trashBanditsRecycled/img3.png";
import trashBanditsRecycledImg4 from "../../assets/trashBanditsRecycled/img4.png";
import trashBanditsRecycledImg5 from "../../assets/trashBanditsRecycled/img5.png";

import autonomousArduinoRobotImg1 from "../../assets/autonomousArduinoRobot/img1.jpeg";
import autonomousArduinoRobotImg2 from "../../assets/autonomousArduinoRobot/img2.jpeg";
import autonomousArduinoRobotImg3 from "../../assets/autonomousArduinoRobot/img3.jpeg";

import PIDLineFollowerImg1 from "../../assets/PIDLineFollower/img1.jpg";

function Projects() {
  return (
    <section className={styles.container}>
      <h1 id="projects" className="sectionTitle">
        <span className="my">My</span> <span>Projects</span>
      </h1>
      <p className="sectionSubTitle"> Some of my favorite projects.</p>
      <div className={styles.content}>
        <ProjectCard
          h1="You VS Liquid: A Material Simulation Game"
          h2="???"
          p={"???"}
          images={[liquidSimGameImg1, liquidSimGameImg2, liquidSimGameImg3]}
          links={[
            {
              text: "See the Git repo",
              url: "https://github.com/JMFortt",
            },
            {
              text: "Play the game",
              url: "https://jmfortt.itch.io",
            },
          ]}
          tags={["Godot", "GDScript", "GitHub"]}
        />
        <ProjectCard
          h1="Pomodoro Timer Widget"
          h2="A simple Pomodoro timer widget built with JavaFX."
          p={"???"}
          images={[pomodoroTimerImg1]}
          links={[
            {
              text: "See the Git repo",
              url: "https://github.com/JMFortt",
            },
            {
              text: "Play the game",
              url: "https://jmfortt.itch.io",
            },
          ]}
          tags={["Godot", "GDScript", "GitHub"]}
        />
        <ProjectCard
          h1="Bounce Back"
          h2="A quick game for the GMTK 2025 Game Jam."
          p={
            'Developed in 4 days for the GMTK 2025 Game Jam. Game Jam Theme: "Loop"'
          }
          images={[bounceBackImg1]}
          links={[
            {
              text: "See the Git repo",
              url: "https://github.com/JMFortt/bounce-back",
            },
            {
              text: "Play the game",
              url: "https://jmfortt.itch.io/bounce-back",
            },
          ]}
          tags={["Godot", "GDScript", "GitHub"]}
        />
        <ProjectCard
          h1="Mole Maker"
          h2="An educational video game for 7th-12th graders."
          p={
            "Developed as a final project for MIT's CMS.590 Design and Development of Games for Learning course, I designed this game to reinforce highschool-level chemistry topics as part of a team of 4.\n\nMy main role on the team was as a programmer. In addition, I wrote the background music track in BeepBox, organized playtests, and took lead in organizing the group's work via project tasklists and sprints."
          }
          images={[molemakerImg1, molemakerImg2, molemakerImg3, molemakerImg4]}
          links={[
            {
              text: "See the Git repo",
              url: "https://github.com/JMFortt/mole-maker",
            },
            {
              text: "Play the game",
              url: "https://jmfortt.itch.io/mole-maker",
            },
          ]}
          tags={["Godot", "GDScript", "GitHub"]}
        />
        <ProjectCard
          h1="Trash Bandits: Recycled"
          h2="A collaborative 2-player video game."
          p={
            'Originally developed as a final project for MIT\'s CMS.611 Creating Video Games course as part of a team of 6, I continued development solo after the course was completed to create this "recycled" release.\n\nMy main role on the team was as a programmer, though I also assisted with project management tasks and was in charge of fixing any technical issues that arose during development.\n\nDuring solo development, I gave the game a visual overhaul using custom sprites made in Aseprite, cleaned up project structure, and fixed lingering bugs.'
          }
          images={[
            trashBanditsRecycledImg1,
            trashBanditsRecycledImg2,
            trashBanditsRecycledImg3,
            trashBanditsRecycledImg4,
            trashBanditsRecycledImg5,
          ]}
          links={[
            {
              text: "See the Git repo",
              url: "https://github.com/JMFortt/trash-bandits-recycled",
            },
            {
              text: "Play the game",
              url: "https://jmfortt.itch.io/trash-bandits-recycled",
            },
          ]}
          tags={["Unity", "C#", "GitHub", "Aesprite"]}
        />
        <ProjectCard
          h1="Autonomous Arduino Robot"
          h2="A mechanical/software robotics project."
          p={
            "Built as part of MIT's 16.632B Introduction to Autonomous Machines II course for a final classwide FIRST-style competition.\n\nDesigned partially in SOLIDWORKS and custom-built using both storebought and self-cut parts. Programmed in C on an Arduino to allow for both manual controller-based and autonomous sensor-based navigation."
          }
          images={[
            autonomousArduinoRobotImg1,
            autonomousArduinoRobotImg2,
            autonomousArduinoRobotImg3,
          ]}
          links={[]}
          tags={["C", "Arduino", "SOLIDWORKS"]}
        />
        <ProjectCard
          h1="PID Line Follower"
          h2="A controls-based robotics project."
          p={
            "Done as part of MIT's 16.632A Introduction to Autonomous Machines course for a final classwide competition.\n\nCoding in C for use on a pre-built Arduino robot, I wrote and tuned a PID controller designed to follow a complex path.\n\nWon 3rd place in the final competition."
          }
          images={[PIDLineFollowerImg1]}
          links={[]}
          tags={["C", "Arduino"]}
        />
        <ProjectCard
          h1="Portfolio Website"
          h2="This website!"
          p={
            "Designed in Figma and built using React, Vite, Javascript and HTML/CSS. Deployed via GitHub Pages."
          }
          images={[personalWebsiteImg1]}
          links={[
            {
              text: "See the Git repo",
              url: "https://github.com/JMFortt/jmfortt.github.io",
            },
          ]}
          tags={["React", "Vite", "JavaScript", "HTML/CSS", "GitHub"]}
        />
      </div>
      <a
        className={styles.button}
        href="https://github.com/JMFortt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See my GitHub"
      >
        See my GitHub →
      </a>
    </section>
  );
}

export default Projects;
