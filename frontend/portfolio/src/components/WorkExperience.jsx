import React, { useState } from 'react';
import styles from './styles/WorkExperience.module.css';

const WorkExperience = ({ experience }) => {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = index => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className={styles.workExperience}>
            <h2>Work Experience</h2>
            {experience.map((job, index) => (
                <div key={index} className={styles.job}>
                    <h3 onClick={() => toggleVisibility(index)}>
                        {job.position} at {job.company}
                    </h3>
                    {visibleIndex === index && (
                        <div>
                            <p>{job.description}</p>
                            <p>Duration: {job.duration}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default WorkExperience;
