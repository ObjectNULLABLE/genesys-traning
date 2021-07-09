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
import Menu from '../../components/menu';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ height: '100%', display: 'flex' }}>
        <Menu>
          {{
            header: <div>Headerqwe</div>,
          }}
        </Menu>
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
      </div>
    </Router>

  );
}

export default App;
