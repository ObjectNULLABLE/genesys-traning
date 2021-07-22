import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from '../../components/header';
import './style.module.scss';
import Qual from '../qualities';
import Weapon from '../weapon';
import Talents from '../talents';
import Skills from '../skills';
import Adversaries from '../adversaries';
import Sources from '../sources';
import SignIn from '../signIn';
import SignUp from '../signUp';

function App() {
  return (
    <Router>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ height: '100%', display: 'flex' }}>
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
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="*">
              <Redirect to="/weapon" push />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
