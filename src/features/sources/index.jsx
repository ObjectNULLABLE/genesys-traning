import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import { deleteSourceAction } from './sourcesSlice';
import Button from '../../components/button';
import Modal from '../../components/modal';
import AddSourceBody from './addSourceBody';
import EditSourceBody from './editSourceBody';

const Sources = () => {
  const dispatch = useDispatch();
  const sources = useSelector((state) => state.sources.data);
  const [filterValue, setFilterValue] = useState('');
  const [selected, setSelected] = useState(sources[0]);
  const [show, setShow] = useState(false);
  const [Id, setId] = useState('');
  const [type, setType] = useState('');

  const [Source] = useState({
    name: '',
    shortName: '',
    description: '',
    lang: '',
  });

  const deleteSource = (id) => {
    dispatch(deleteSourceAction(id));
  };

  return (
    <div className={style.featureBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Source</div>
              <Input
                className={style.search}
                value={filterValue}
                onChange={setFilterValue}
                type="text"
                placeholder="Search..."
              />
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
                   onKeyDown={() => {}}
                   onClick={() => {
                     setSelected(el);
                   }}
                   key={el.name}
                   style={selected.name === el.name ? { background: 'rgb(129, 45, 45) ' } : { background: 'rgb(41, 15, 15)' }}
                   className={style.listElement}
                 >
                   {el.name}
                   <div className={style.buttonDelete}>
                     <div
                       role="button"
                       tabIndex={0}
                       onKeyDown={() => {}}
                       style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                       onClick={() => {
                         setType('edit');
                         setId(el.id);
                         setShow(!show);
                       }}
                     >
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" className="svg-inline--fa fa-pen fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" /></svg>
                     </div>
                     <div
                       role="button"
                       tabIndex={0}
                       onKeyDown={() => {}}
                       style={selected.name === el.name ? { display: 'block' } : { display: 'none' }}
                       onClick={() => {
                         deleteSource(el.id);
                       }}
                     >
                       <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" /></svg>
                     </div>
                   </div>
                 </div>
               ))
              }
            </div>),
          footer: <Button
            caption="Add new Source"
            className={style.addButton}
            onClick={() => {
              setType('add');
              setShow(!show);
            }}
          />,
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
        {show && (
          <Modal
            show={show}
            closeModal={() => {
              setShow(!show);
            }}
          >
            {{
              title: type === 'add' ? 'Add new source' : 'Edit source',
              modalBody: (
                type === 'add' ? (
                  <AddSourceBody
                    source={Source}
                    setShow={setShow}
                    show={show}
                  />
                ) : (
                  type === 'edit' && (
                  <EditSourceBody
                    Id={Id}
                    setShow={setShow}
                    show={show}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  )
                )
              ),
            }}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Sources;
