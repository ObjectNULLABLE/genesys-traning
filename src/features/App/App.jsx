import React, { useState } from 'react';

import Select from '../../components/select/index';

const options = [{ name: 'Skills', value: 'skills' }, { name: 'Heroes', value: 'heroes' }, { name: 'Items', value: 'items' }];
function App() {
  const [val, setVal] = useState({});
  return (
    <div className="App">
      <div style={{ width: '20%' }}>
        <Select
          options={options}
          selectValue={setVal}
        />
        <h1>
          name:
          {val.name}
          <br />
          value:
          {val.value}
        </h1>
      </div>

    </div>
  );
}

export default App;
