import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';
import { deleteSkillsAction } from './skillsSlice';

const Skills = () => {
  const skills = useSelector((state) => state.skills.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(skills[0]);
  const dispatch = useDispatch();
  const deleteSkill = (source) => {
    dispatch(deleteSkillsAction(source));
  };
  return (
    <div className={style.featureBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Skills</div>
              <Input className={style.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div className={style.elements}>
              {
               skills.filter((item) => (
                 item.name.toLowerCase().includes(filterValue.toLowerCase())
               )).map((el) => (
                 <div
                   role="button"
                   tabIndex={0}
                   onKeyDown={() => { }}
                   onClick={() => {
                     setSelected(el);
                   }}
                   key={el.name}
                   style={selected.name === el.name ? { background: 'rgb(129, 45, 45) ' } : { background: 'rgb(41, 15, 15)' }}
                   className={style.listElement}
                 >
                   {el.name}
                   <div
                     role="button"
                     tabIndex={0}
                     onKeyDown={() => {}}
                     className={style.buttonDelete}
                     style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                     onClick={() => (window.confirm('Confirm delete?') && deleteSkill(el))}
                   >
                     X
                   </div>
                 </div>
               ))
              }
            </div>),
          footer: <Button caption="Add new Source" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>
      <div className={style.features}>
        <div className={style.name}>
          {selected.name}
          {`  (${selected.characteristic})`}
        </div>
        <div className={style.description}>
          <div className={style.infoItem}>
            <span>Worlds: </span>
            {selected.worlds.map((world) => (
              <div>
                {`${world}, `}
              </div>
            ))}
          </div>
          <div className={style.infoItem}>
            <span>Type: </span>
            {selected.type}
          </div>
          <span>Description: </span>
          {selected.description}
          <div>
            <span>Use if: </span>
            {selected.useIf}
          </div>
          <div>
            <span>Not use if: </span>
            {selected.notUseIf}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
