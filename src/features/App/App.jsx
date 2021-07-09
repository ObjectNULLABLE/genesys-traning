import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../../components/header';
import './style.scss';
import Qual from '../../components/qualities';
import Weapon from '../../components/weapon';
import Talents from '../../components/talents';
import Skills from '../../components/skills';
import Adversaries from '../../components/adversaries';
import Sources from '../../components/sources';
import Button from '../../components/button/index';

const onClick = () => {
  console.log('ghj');
};

function App() {
  return (
    <div>

      <Router>
        <Header />
        <div className="App">
          <Button onClick={onClick} caption="caption" className="" />
        </div>
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

    </div>
  );
}

export default App;
