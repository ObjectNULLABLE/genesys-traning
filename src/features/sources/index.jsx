import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const Sources = () => {
  const sources = useSelector((state) => state.sources.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(sources[0]);
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Source</div>
              <Input className={style.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div>
              {
               sources.filter((item) => (
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
      <div className={style.sourcePrototype}>
        <div className={style.name}>
          {selected.name}
        </div>
        <div className={style.description}>
          {selected.description}
        </div>
        <div className={style.info}>
          <div className={style.infoItem}>
            {selected.shortName}
          </div>
          <div className={style.infoItem}>
            {selected.lang}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sources;
