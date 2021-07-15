import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';
import { deleteSourceAction } from './sourcesSlice';

const Sources = () => {
  const sources = useSelector((state) => state.sources.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(sources[0]);
  const dispatch = useDispatch();
  const deleteSource = (source) => {
    dispatch(deleteSourceAction(source));
  };
  return (
    <div className={style.featureBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Source</div>
              <Input className={style.search} value={filterValue} onChange={setFilterValue} type="text" />
            </div>),
          content: (
            <div className={style.elements}>
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
                     onClick={() => (window.confirm('Confirm delete?') && deleteSource(el))}
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
          {` (${selected.shortName})`}
        </div>
        <div className={style.description}>
          <span>Description: </span>
          {selected.description}
        </div>
      </div>
    </div>
  );
};

export default Sources;
