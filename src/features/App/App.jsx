import React from 'react';
import Button from '../../components/button/index';

const onClick = () => {
  console.log('ghj');
};

function App() {
  return (
    <div className="App">
      <Button onClick={onClick} caption="caption" className="" />
    </div>
  );
}

export default App;
