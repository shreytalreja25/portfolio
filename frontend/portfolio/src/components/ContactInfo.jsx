import React from 'react';
import styles from './styles/ContactInfo.module.css';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactInfo = ({ phone, email, linkedIn }) => {
    return (
        <div className={styles.contactInfo}>
            <p><FaPhone /> {phone}</p>
            <p><FaEnvelope /> <a href={`mailto:${email}`}>{email}</a></p>
            <p><FaLinkedin /> <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </div>
    );
}

export default ContactInfo;
