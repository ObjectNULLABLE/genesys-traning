import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../../components/header';
import './style.scss';
import Qual from '../qualities';
import Weapon from '../weapon';
import Talents from '../talents';
import Skills from '../skills';
import Adversaries from '../adversaries';
import Sources from '../sources';

function App() {
  return (
    <Router>
      <Header />
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

export default App;
