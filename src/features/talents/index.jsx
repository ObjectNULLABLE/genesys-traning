import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const Talents = () => {
  const talents = useSelector((state) => state.talents.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(talents[0]);
  return (
    <div className={styles.talentsBody}>
      <Menu>
        {{
          header: (
            <div>
              <div>Talents</div>
              <Input className={styles.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div>
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
                   className={styles.listElement}
                 >
                   {el.name}
                 </div>
               ))
              }
            </div>),
          footer: <Button caption="Add new Source" className={styles.addButton} onClick={() => {}} />,
        }}
      </Menu>
      <div className={styles.talents}>
        <div className={styles.name}>
          <span>Name of talent: </span>
          {selected.name}
        </div>
        <div className={styles.description}>
          {selected.description}
        </div>
        <div className={styles.info}>
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
              <span>

                {`${world}, `}

              </span>
            ))}
          </div>
          <div className={styles.infoItem}>
            <span>Language: </span>
            {selected.lang}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Talents;
