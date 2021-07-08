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
        <nav>
          <Link to="/weapon">Weapons</Link>
          <Link to="/qualities">Qualities</Link>
          <Link to="/talents">Talents</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/adversaries">Adversaries</Link>
          <Link to="/sources">Sources</Link>
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
