import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.scss';
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
    <div className={styles.talentsBody}>
      <Menu>
        {{
          header: (
            <div>
              <div>Talents</div>
              <Input value={filterValue} onChange={setFilterValue} type="text" />
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
                   <div className={styles.cross}>
                     <div
                       role="button"
                       tabIndex={0}
                       onKeyDown={() => {}}
                       style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                       onClick={() => (window.confirm('Confirm delete?') && deleteTalent(el))}
                     >
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" /></svg>
                     </div>
                     <div
                       role="button"
                       tabIndex={0}
                       onKeyDown={() => {}}
                       style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                       onClick={() => (window.confirm('Confirm delete?') && deleteTalent(el))}
                     >
                       <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" /></svg>
                     </div>
                   </div>
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
