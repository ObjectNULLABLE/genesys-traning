import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';
import { deleteTalentsAction } from './talentsSlice';

const Talents = () => {
  const talents = useSelector((state) => state.talents.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(talents[0]);
  const dispatch = useDispatch();
  const deleteTalent = (source) => {
    dispatch(deleteTalentsAction(source));
  };
  return (
    <div className={styles.featureBody}>
      <Menu>
        {{
          header: (
            <div>
              <div>Talents</div>
              <Input className={styles.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div className={styles.elements}>
              {
               talents.filter((item) => (
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
                   className={styles.listElement}
                 >
                   {el.name}
                   <div
                     role="button"
                     tabIndex={0}
                     onKeyDown={() => {}}
                     className={styles.buttonDelete}
                     style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                     onClick={() => (window.confirm('Confirm delete?') && deleteTalent(el))}
                   >
                     X
                   </div>
                 </div>
               ))
              }
            </div>),
          footer: <Button caption="Add new Source" className={styles.addButton} onClick={() => {}} />,
        }}
      </Menu>
      <div className={styles.features}>
        <div className={styles.name}>
          {selected.name}
        </div>
        <div className={styles.description}>
          <div className={styles.infoItem}>
            <span>Tier: </span>
            {selected.tier}
          </div>
          <div className={styles.infoItem}>
            <span>Activation: </span>
            {selected.activation}
          </div>
          <div className={styles.infoItem}>
            <span>Ranked: </span>
            {selected.ranked ? 'yes' : 'no'}
          </div>
          <div className={styles.infoItem}>
            <span>Worlds: </span>
            {selected.worlds.map((world) => (
              <div>
                {`${world}, `}
              </div>
            ))}
          </div>
          <span>Description: </span>
          {selected.description}
        </div>
      </div>
    </div>
  );
};
export default Talents;
