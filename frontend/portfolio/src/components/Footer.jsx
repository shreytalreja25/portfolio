import React from 'react';
import styles from './styles/Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>Copyright © {year}. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
