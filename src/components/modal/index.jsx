import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { addSourceAction } from '../../features/sources/sourcesSlice';
import Button from '../button';
import Input from '../Input';
import Select from '../select';

const Modal = ({ children, isShow, closing }) => {
  const dispatch = useDispatch();

  const addSource = (name, shortName, description, lang) => {
    const note = {
      name,
      shortName,
      description,
      lang,
    };
    dispatch(addSourceAction(note));
    closing();
  };

  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLang] = useState('');

  return (
    <div style={isShow ? { display: 'block' } : { display: 'none' }} className={style.modal}>
      <div className={style.modalTitle}>
        <div className={style.title}>{children.title}</div>
        <div
          className={style.cross}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => (closing())}
        >
          X
        </div>
      </div>
      <div className={style.modalBody}>
        <div className={style.inputs}>
          <span>name:</span>
          <Input type="text" value={name} onChange={setName} />
        </div>
        <div className={style.inputs}>
          <span>shortname:</span>
          <Input type="text" value={shortName} onChange={setShortName} />
        </div>
        <div className={style.inputs}>
          <span>description:</span>
          <textarea
            value={description}
            className={style.description}
            onChange={
            (e) => { setDescription(e.target.value.replace(/\n/g, '<br/>')); }
}
          />
        </div>
        <div className={style.inputs}>
          <span>lang:</span>
          <Select options={[{ name: 'English', value: 'eng' }, { name: 'Russian', value: 'rus' }]} selectValue={setLang} />
        </div>
      </div>
      <div className={style.modalFooter}>
        <Button className={style.buttonSubmit} disabled onClick={() => { addSource(name, shortName, description, lang.value); }} caption="Add new" />
      </div>
    </div>

  );
};

Modal.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string,
  }),
  isShow: PropTypes.bool,
  closing: PropTypes.func,
};

Modal.defaultProps = {
  children: {
    title: 'Default',
  },
  isShow: false,
  closing: () => {},
};

export default Modal;
