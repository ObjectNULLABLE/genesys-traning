import React from 'react';

import Select from '../../components/select/index';

function App() {
  return (
    <div className="App">
      <div style={{ width: '20%' }}>
        <Select options={[{ name: 'Skills', value: 'skills' }, { name: 'Heroes', value: 'heroes' }, { name: 'Items', value: 'items' }]} />
      </div>

    </div>
  );
}

export default App;
