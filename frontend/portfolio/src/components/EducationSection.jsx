import React from 'react';
import styles from './styles/EducationSection.module.css';

const EducationSection = ({ education }) => {
    return (
        <div className={styles.education}>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className={styles.entry}>
                    <h3>{edu.degree} - {edu.university}</h3>
                    <p>Duration: {edu.duration}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationSection;
