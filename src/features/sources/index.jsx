import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import { deleteSourceAction } from './sourcesSlice';
import Button from '../../components/button';
import Modal from '../../components/modal';

const Sources = () => {
  const sources = useSelector((state) => state.sources.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(sources[0]);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const deleteSource = (source) => {
    dispatch(deleteSourceAction(source));
  };
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
            <div className={style.sources}>
              {
               sources.filter((item) => (
                 item.name.toLowerCase().includes(filterValue.toLowerCase())
               )).map((el) => (
                 <div
                   role="button"
                   tabIndex={0}
                   onKeyDown={() => {}}
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
                     className={style.cross}
                     style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                     onClick={() => (window.confirm('Confirm delete?') && deleteSource(el))}
                   >
                     X
                   </div>
                 </div>
               ))
              }
            </div>),
          footer: <Button caption="Add new Source" className={style.addButton} onClick={() => { setIsShow(!isShow); }} />,
        }}
      </Menu>
      <div className={style.sourcePrototype}>
        <div className={style.name}>
          {`Name: ${selected.name}`}
        </div>
        <div className={style.description}>
          {selected.description}
        </div>
        <div className={style.info}>
          <div className={style.infoItem}>
            {`Shortname: ${selected.shortName}`}
          </div>
          <div className={style.infoItem}>
            {`Lang: ${selected.lang}`}
          </div>
        </div>
        <Modal isShow={isShow} closing={() => { setIsShow(!isShow); }} />
      </div>

    </div>
  );
};

export default Sources;
