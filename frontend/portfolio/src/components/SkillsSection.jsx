import React from 'react';
import styles from './styles/SkillsSection.module.css';

const SkillsSection = ({ skills }) => {
    return (
        <div className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skill}>{skill}</div>
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;
