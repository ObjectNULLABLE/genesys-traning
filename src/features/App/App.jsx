import React, { useState } from 'react';
import Input from '../../components/iNPUT/Input';

function App() {
  const [
    text,
    setText,
  ] = useState('');
  return (
    <div className="App">
      {text}
      <Input
        onChange={(value) => { setText(value); }}
        value="sdas"
        type=""
      />
    </div>
  );
}

export default App;
