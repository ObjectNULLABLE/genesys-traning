import React, { useState } from 'react';

import Select from '../../components/select/index';

function App() {
  const [val, setVal] = useState({});
  return (
    <div className="App">
      <div style={{ width: '20%' }}>
        <Select options={[{ name: 'Skills', value: 'skills' }, { name: 'Heroes', value: 'heroes' }, { name: 'Items', value: 'items' }]} getVal={setVal} defaultValue={{ name: 'General', value: 'general' }} />
        <h1>
          value:
          {val.name}
        </h1>
      </div>

    </div>
  );
}

export default App;
