import PageHeading from "../components/PageHeading";
import { projectsVariants, projectCardVariants } from "../animations/projects";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            id: "00",
            title: "Y Notes",
            description:
                "This is a simple and responsive note taking app which is inspired by Google Keep.",
            technologies: "React, Material UI",
            githubUrl: "y-notes",
            siteUrl: "y-notes",
        },
        {
            id: "01",
            title: "Quizzical",
            description:
                'This is the final solo project of "Learn React for free" course on scrimba.',
            technologies: "React, Sass",
            githubUrl: "quizzical",
            siteUrl: "quizzical",
        },
        {
            id: "02",
            title: "DOM Mini Projects",
            description: "These are 15 mini projects using Vanilla JavaScript.",
            technologies: "HTML, CSS, JavaScript",
            githubUrl: "DOM-mini-projects",
            siteUrl: "DOM-mini-projects",
        },
        {
            id: "03",
            title: "Frontend Mentor Challenges",
            description:
                "These are 14 solutions for Frontend Mentor challenges.",
            technologies: "HTML, CSS",
            githubUrl: "frontend-mentor-challenges",
            siteUrl: "frontend-mentor-challenges",
        },
        {
            id: "04",
            title: "Gulp Sass Boilerplate",
            description:
                "This is a frontend boilerplate for Sass + Vanilla JavaScript projects.",
            technologies: "Gulp.js, Sass",
            githubUrl: "gulp-sass-boilerplate",
        },
    ];

    return (
        <>
            <PageHeading />
            <motion.main
                className="projects"
                variants={projectsVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="projects-container">
                    {projects.map(
                        ({
                            id,
                            title,
                            description,
                            technologies,
                            githubUrl,
                            siteUrl,
                        }) => (
                            <motion.div key={id} variants={projectCardVariants}>
                                <article className="project-card">
                                    <h2 className="project-card__title">
                                        #{id}. {title}
                                    </h2>
                                    <div className="project-card__info">
                                        <p className="project-card__description">
                                            {description}
                                        </p>
                                        <p className="project-card__technologies">
                                            Technologies: {technologies}
                                        </p>
                                        <a
                                            href={`https://github.com/yunesunadi/${githubUrl}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-card__link"
                                        >
                                            <span className="project-card__icon">
                                                <AiOutlineGithub />
                                            </span>
                                            <span>View Code</span>
                                        </a>
                                        {siteUrl && (
                                            <a
                                                href={`https://yunesunadi.com/${siteUrl}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-card__link"
                                            >
                                                <span className="project-card__icon">
                                                    <AiOutlineEye />
                                                </span>
                                                <span>Live Preview</span>
                                            </a>
                                        )}
                                    </div>
                                </article>
                            </motion.div>
                        )
                    )}
                </div>
            </motion.main>
        </>
    );
}
