import React from 'react';
import styles from './styles/Header.module.css';

const Header = ({ name, subtitle }) => {
    return (
        <header className={styles.header}>
            <h1>{name}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default Header;
