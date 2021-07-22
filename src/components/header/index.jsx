import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <Link className={styles.navLink} to="/weapon">Weapons</Link>
            <Link className={styles.navLink} to="/qualities">Qualities</Link>
            <Link className={styles.navLink} to="/talents">Talents</Link>
            <Link className={styles.navLink} to="/skills">Skills</Link>
            <Link className={styles.navLink} to="/adversaries">Adversaries</Link>
            <Link className={styles.navLink} to="/sources">Sources</Link>
          </div>
          <div className={styles.accountPlace}>
            <Link className={`${styles.navLink} ${styles.account}`} to="/signIn">Sign in</Link>
            <Link className={`${styles.navLink} ${styles.account}`} to="/signUp">Sign up</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
