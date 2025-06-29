import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "./ProjectCard";

import molemakerImg1 from "../../assets/moleMaker/img1.png";
import molemakerImg2 from "../../assets/moleMaker/img2.png";
import molemakerImg3 from "../../assets/moleMaker/img3.png";
import molemakerImg4 from "../../assets/moleMaker/img4.png";

import trashBanditsRecycledImg1 from "../../assets/trashBanditsRecycled/img1.png";
import trashBanditsRecycledImg2 from "../../assets/trashBanditsRecycled/img2.png";
import trashBanditsRecycledImg3 from "../../assets/trashBanditsRecycled/img3.png";
import trashBanditsRecycledImg4 from "../../assets/trashBanditsRecycled/img4.png";
import trashBanditsRecycledImg5 from "../../assets/trashBanditsRecycled/img5.png";

import autonomousArduinoRobotImg1 from "../../assets/autonomousArduinoRobot/img1.jpg";
import autonomousArduinoRobotImg2 from "../../assets/autonomousArduinoRobot/img2.jpg";

import PIDLineFollowerImg1 from "../../assets/PIDLineFollower/img1.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.content}>
        <ProjectCard
          h1="MoleMaker"
          h2="An educational video game for 7th-12th graders."
          p={`Developed as a final project for MIT's CMS.590 Design and Development of Games for Learning course, I designed this game to reinforce highschool-level chemistry topics as part of a team of 4. \n \n My main role on the team was as a programmer. In addition, I wrote the background music track in BeepBox, organized playtests, and took lead in organizing the group's work via project tasklists and sprints.`}
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
          p={`Originally developed as a final project for MIT's CMS.611 Creating Video Games course as part of a team of 6, I continued development solo after the course was completed to create this "recycled" release. \n \n My main role on the team was as a programmer, though I also assisted with project management tasks and was in charge of fixing any technical issues that arose during development. \n \n During solo development, I gave the game a visual overhaul using custom sprites made in Aseprite, cleaned up project structure, and fixed lingering bugs.`}
          images={[
            trashBanditsRecycledImg1,
            trashBanditsRecycledImg2,
            trashBanditsRecycledImg3,
            trashBanditsRecycledImg4,
            trashBanditsRecycledImg5,
          ]}
          links={[
            {
              text: "See the git repo here",
              url: "https://github.com/JMFortt",
            },
            {
              text: "play the updated solo release of the game here",
              url: "https://jmfortt.itch.io/trash-bandits-recycled",
            },
            {
              text: "play the original team release of the game here",
              url: "https://ashketchmm.itch.io/trash-bandits",
            },
          ]}
          tags={["Unity", "C#", "GitHub", "Aesprite"]}
        />
        <ProjectCard
          h1="Autonomous Arduino Robot"
          h2="Robotics project."
          p={`Built as part of MIT's Design & Manufacturing I: Autonomous Machines course.`}
          images={[autonomousArduinoRobotImg1, autonomousArduinoRobotImg2]}
          links={[]}
          tags={["C", "Arduino", "SOLIDWORKS"]}
        />
        <ProjectCard
          h1="PID Line Follower"
          h2="Robotics project."
          p={`Done as part of MIT's Introduction to Autonomous Machines course.`}
          images={[PIDLineFollowerImg1]}
          links={[]}
          tags={["C", "Arduino"]}
        />
      </div>
    </section>
  );
}

export default Projects;
