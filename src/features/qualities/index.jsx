import React from 'react';
import style from './styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const qualities = [{
  name: 'name', sourceID: '', description: 'description', lang: 'lang', active: 'false',
}];

const content = [{ name: 'obj 1' }, { name: 'obj 2' }, { name: 'obj 3' }, { name: 'obj 4' }];
function Qualities() {
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Qualities</div>
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
          footer: <Button caption="Add new Qualities" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>

      <div className={style.qualities}>
        <div className={style.wrap1}>
          <div className={style.name}>
            {qualities[0].name}
          </div>
          <div className={style.lang}>
            {qualities[0].lang}
          </div>
          <div className={style.active}>
            {qualities.active === false ? 'false' : 'true'}
          </div>
        </div>
        <div className={style.description}>
          {qualities[0].description}
        </div>
        <div className={style.sourceID}>
          {qualities[0].sourceID}
        </div>
      </div>
    </div>
  );
}

export default Qualities;
