import React from 'react';
import styles from './styles/ProjectsComponent.module.css';

const ProjectsComponent = ({ projects }) => {
    return (
        <div className={styles.projects}>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className={styles.project}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                </div>
            ))}
        </div>
    );
}

export default ProjectsComponent;
