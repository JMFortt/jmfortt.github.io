import React from "react";
import styles from './ProjectsStyles.module.css';
import moleMaker from '../../assets/React.svg'
import trashBanditsRecycled from '../../assets/React.svg'
import autonomousArduinoRobot from '../../assets/React.svg'
import PIDLineFollower from '../../assets/React.svg'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard    
                src={moleMaker} 
                link="https://github.com/jmfortt"
                h3="MoleMaker"
                p="Video Game"
                />
                <ProjectCard 
                src={trashBanditsRecycled} 
                link="https://github.com/jmfortt"
                h3="Trash Bandits:Recycled"
                p="Video Game"
                />
                <ProjectCard 
                src={PIDLineFollower} 
                link="https://github.com/jmfortt"
                h3="Pomodoro Work Timer"
                p="JavaFX App"
                />
                <ProjectCard 
                src={autonomousArduinoRobot} 
                link="https://github.com/jmfortt"
                h3="Autonomous Arduino Robot"
                p="Robotics Project"
                />
                <ProjectCard 
                src={PIDLineFollower} 
                link="https://github.com/jmfortt"
                h3="PID Line Follower"
                p="Robotics Project"
                />
                <ProjectCard 
                src={PIDLineFollower} 
                link="https://github.com/jmfortt"
                h3="Portfolio Website"
                p="WebDev"
                />
            </div>
        </section>
        );
}

export default Projects;