import React from 'react';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const skill = [{
  name: 'name',
  characteristic: 'characterictic',
  worlds: [],
  type: '1',
  description: 'description',
  useIf: 'use',
  notUseIf: 'notUse',
  sourceID: 1,
  lang: 'lang',
}];
const content = [{ name: 'obj 1' }, { name: 'obj 2' }, { name: 'obj 3' }, { name: 'obj 4' }];

function Skills() {
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Skills</div>
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
          footer: <Button caption="Add new Skill" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>
      <div className={style.skills}>
        <div className={style.wrap1}>
          <div className={style.name}>
            {skill[0].name}
          </div>
          <div className={style.lang}>
            {skill[0].lang}
          </div>
        </div>
        <div className={style.description}>
          {skill[0].description}
        </div>
        <div className={style.worlds}>
          {skill[0].worlds}
        </div>
        <div className={style.type}>
          {skill[0].type}
        </div>
        <div className={style.characteristic}>
          {skill[0].characteristic}
        </div>
        <div className={style.useIf}>
          {skill[0].useIf}
        </div>
        <div className={style.notUseIf}>
          {skill[0].notUseIf}
        </div>
        <div className={style.sourceID}>
          {skill[0].sourseID}
        </div>

      </div>
    </div>
  );
}

export default Skills;
