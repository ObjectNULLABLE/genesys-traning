import React from 'react';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const source = [{
  name: '', shortName: '', description: '', lang: '',
}];
const content = [{ name: 'obj 1' }, { name: 'obj 2' }, { name: 'obj 3' }, { name: 'obj 4' }];
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
            {content.map((el) => (
              <div className={style.listElement} key={el.name}>
                {el.name}
              </div>
            ))}
          </div>),
        footer: <Button caption="Add new Source" className={style.addButton} onClick={() => {}} />,
      }}
    </Menu>
    <div className={style.sourcePrototype}>
      <div className={style.name}>{source.name}</div>
      <div className={style.shortName}>{source.shortName}</div>
      <div className={style.description}>{source.description}</div>
      <div className={style.lang}>{source.lang}</div>
    </div>
  </div>
);

export default Sources;
