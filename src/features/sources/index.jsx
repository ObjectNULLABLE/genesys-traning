import React, { useState } from 'react';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const sources = [
  {
    name: 'obj 1', shortName: 'o1', description: 'this is obj1', lang: 'en',
  },
  {
    name: 'obj 2', shortName: 'o2', description: 'this is obj2', lang: 'en',
  },
  {
    name: 'obj 3', shortName: 'o3', description: 'this is obj3', lang: 'en',
  },
];

const Sources = () => {
  const [filterValue, setFilterValue] = useState('');
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Source</div>
              <Input className={style.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div>
              {
               sources.filter((item) => item.name.indexOf(filterValue) !== -1).map((el) => (
                 <div
                   key={el.name}
                   className={style.listElement}
                 >
                   {el.name}
                 </div>
               ))
              }
            </div>),
          footer: <Button caption="Add new Source" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>
      <div className={style.sourcePrototype}>
        <div className={style.wrap1}>
          <div>
            {sources[0].name}
          </div>
          <div>
            {sources[0].shortName}
          </div>
          <div className={style.lang}>{sources[0].lang}</div>
        </div>
        <div className={style.description}>{sources[0].description}</div>
      </div>
    </div>
  );
};

export default Sources;
