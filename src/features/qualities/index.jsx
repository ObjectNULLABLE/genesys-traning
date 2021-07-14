import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';
import { deleteQualitiesAction } from './qualitiesSlice';

const Qualities = () => {
  const qualities = useSelector((state) => state.qualities.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(qualities[0]);
  const dispatch = useDispatch();
  const deleteQuality = (quality) => {
    dispatch(deleteQualitiesAction(quality));
  };
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
            <div className={style.elements}>
              {
               qualities.filter((item) => (
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
                   style={selected.name === el.name ? { background: 'rgb(129, 45, 45)' } : { background: 'rgb(41, 15, 15)' }}
                   className={style.listElement}
                 >
                   {el.name}
                   <div
                     className={style.buttonDelete}
                     role="button"
                     tabIndex={0}
                     onKeyDown
                     onClick={() => deleteQuality(selected)}
                     style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                   >
                     X
                   </div>
                 </div>
               ))
              }
            </div>),
          footer: <Button caption="Add new Quality" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>

      <div className={style.qualities}>
        <div className={style.name}>
          {selected.name}
        </div>
        <div className={style.description}>
          {selected.description}
        </div>
        <div className={style.info}>
          <div className={style.infoItem}>
            {selected.active === false ? 'false' : 'true'}
          </div>
          <div className={style.sourceID}>
            {selected.sourceID}
          </div>
          <div className={style.infoItem}>
            {selected.lang}
          </div>
        </div>
      </div>

    </div>
  );
};
export default Qualities;
