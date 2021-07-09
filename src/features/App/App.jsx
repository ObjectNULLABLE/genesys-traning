import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Input from '../../components/Input';

import Header from '../../components/header';
import './style.scss';
import Qual from '../qualities';
import Weapon from '../weapon';
import Talents from '../talents';
import Skills from '../skills';
import Adversaries from '../../components/adversaries';
import Sources from '../sources';
import Button from '../../components/button/index';
import Select from '../../components/select';

const onClick = () => {
  console.log('ghj');
};

const options = [{ name: 'Skills', value: 'skills' }, { name: 'Heroes', value: 'heroes' }, { name: 'Items', value: 'items' }];
function App() {
  const [
    text,
    setText,
  ] = useState('');
  return (
    <Router>
      <Header />
      {text}
      <Input
        onChange={(value) => { setText(value); }}
        value="sdas"
        type=""
      />

      <Button onClick={onClick} caption="caption" className="" />
      <div>
        <Select options={options} />
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

  );
}

export default App;
