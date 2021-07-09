import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/weapon">Weapons</Link>
        <Link className={styles.navLink} to="/qualities">Qualities</Link>
        <Link className={styles.navLink} to="/talents">Talents</Link>
        <Link className={styles.navLink} to="/skills">Skills</Link>
        <Link className={styles.navLink} to="/adversaries">Adversaries</Link>
        <Link className={styles.navLink} to="/sources">Sources</Link>
      </nav>
    </header>

  );
}
export default Header;
