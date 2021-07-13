import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const Skills = () => {
  const skills = useSelector((state) => state.skills.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(skills[0]);
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Skills</div>
              <Input className={style.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div>
              {
               skills.filter((item) => (
                 item.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
               )).map((el) => (
                 <div
                   role="button"
                   tabIndex={0}
                   onKeyDown={() => { }}
                   onClick={() => {
                     setSelected(el);
                   }}
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
      <div className={style.skills}>
        <div className={style.name}>
          {selected.name}
        </div>
        <div className={style.description}>
          {selected.description}
          <div className={style.useIf}>
            {selected.useIf}
          </div>
          <div className={style.notUseIf}>
            {selected.notUseIf}
          </div>
        </div>
        <div className={style.info}>
          <div className={style.infoItem}>
            {selected.worlds}
          </div>
          <div className={style.infoItem}>
            {selected.lang}
          </div>
          <div className={style.infoItem}>
            {selected.type}
          </div>
          <div className={style.infoItem}>
            {selected.characteristic}
          </div>
          <div className={style.infoItem}>
            {selected.sourseID}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
