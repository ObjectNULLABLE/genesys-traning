import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import styles from './styles.module.scss';
import Qual from '../qualities';
import Weapon from '../weapon';
import Talents from '../talents';
import Skills from '../skills';
import Adversaries from '../adversaries';
import Sources from '../sources';

function Header() {
  return (
    <Router>
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

      <Switch>
        <Route path="/weapon">
          <Weapon />
        </Route>
        <Route path="/qualities">
          <Qual />
        </Route>
        <Route path="/talents">
          <Talents />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/adversaries">
          <Adversaries />
        </Route>
        <Route path="/sources">
          <Sources />
        </Route>
      </Switch>
    </Router>

  );
}
export default Header;
