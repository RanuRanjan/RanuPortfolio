import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://avatars.githubusercontent.com/u/86410121?v=4' // my Picture
			: 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Hello! My name is Ranu Ranjan and I am a web developer with over 3years of experience, specializing in micro-frontend applications using React JS. I am skilled in HTML, CSS, JavaScript, Node.js, and Express.js, which helps me build scalable and efficient web solutions. Currently, I work as an Associate Consultant at Capgemini Services India Pvt. Ltd, where I turn static designs into dynamic,data-driven websites.I also work with micro-frontend and microservices architectures to improve performance and make websites easier to maintain.
					<span style={{ color: `#00a0a0` }}>
					
					</span>

  
				</p>
			</div>
		</div>
	);
};

export default About;
