import styles from './ProfileStyles.module.css';
import profileImg from '../../assets/ProfileImage.jpg';
import linkedinLight from '../../assets/React.svg'
import linkedinDark from '../../assets/React.svg'
import githubLight from '../../assets/React.svg'
import githubDark from '../../assets/React.svg'
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/React.svg'
import moon from '../../assets/React.svg'

function Profile() {
    const{ theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return <section id ="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.profile} 
                src={profileImg} 
                alt="Profile picture of Julia Fortt">
            </img>
            <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Julia
                <br/>
                Fortt
            </h1>
            <h2>
                Student
            </h2>
            <span>
                <a href="https://www.linkedin.com/in/jmfortt" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn icon"/>
                </a>
                <a href="https://github.com/jmfortt" target="_blank">
                    <img src={githubIcon} alt="GitHub icon"/>
                </a>
            </span>
            <p className={styles.description}>
                [description]
            </p>
        </div>
        <div><button>test</button></div>
    </section>;
}

export default Profile;