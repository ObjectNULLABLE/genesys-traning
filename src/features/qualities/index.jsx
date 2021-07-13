import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const Qualities = () => {
  const qualities = useSelector((state) => state.qualities.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(qualities[0]);
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Qualities</div>
              <Input className={style.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div>
              {
               qualities.filter((item) => (
                 item.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
               )).map((el) => (
                 <div
                   role="button"
                   tabIndex={0}
                   onKeyDown={() => {}}
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
          footer: <Button caption="Add new Quality" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>

      <div className={style.qualities}>
        <div className={style.wrap1}>
          <div className={style.name}>
            {selected.name}
          </div>
          <div className={style.lang}>
            {selected.lang}
          </div>
          <div className={style.active}>
            {selected.active === false ? 'false' : 'true'}
          </div>
        </div>
        <div className={style.description}>
          {selected.description}
        </div>

      </div>
    </div>

  );
};
export default Qualities;

/* <div className={style.sourceID}>
          {qualities[0].sourceID}
        </div> */
