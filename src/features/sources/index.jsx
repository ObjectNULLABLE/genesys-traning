import React from 'react';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const source = [{
  name: 'obj 1', shortName: 'o1', description: 'this is obj1', lang: 'en',
},
{
  name: 'obj 2', shortName: 'o2', description: 'this is obj2', lang: 'en',
},
{
  name: 'obj 3', shortName: 'o3', description: 'this is obj3', lang: 'en',
},
];

const Sources = () => (
  <div className={style.sourceBody}>
    <Menu>
      {{
        header: (
          <div>
            <div className={style.header}>Source</div>
            <Input className={style.search} onChange={() => {}} type="text" />
          </div>),
        content: (
          <div>
            {source.map((el) => (
              <div className={style.listElement} key={el.name}>
                {el.name}
              </div>
            ))}
          </div>),
        footer: <Button caption="Add new Source" className={style.addButton} onClick={() => {}} />,
      }}
    </Menu>
    <div className={style.sourcePrototype}>
      <div className={style.wrap1}>
        <div>
          {source[0].name}
        </div>
        <div>
          {source[0].shortName}
        </div>
        <div className={style.lang}>{source[0].lang}</div>
      </div>
      <div className={style.description}>{source[0].description}</div>
    </div>
  </div>
);

export default Sources;
