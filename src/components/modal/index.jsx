import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { addSourceAction } from '../../features/sources/sourcesSlice';
import Button from '../button';
import Input from '../Input';

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
      <div className={style.modalTitle}>{children.title}</div>
      <div className={style.modalBody}>
        <div className={style.inputs}>
          <span>name:</span>
          <Input value={name} onChange={setName} />
        </div>
        <div className={style.inputs}>
          <span>shortname:</span>
          <Input value={shortName} onChange={setShortName} />
        </div>
        <div className={style.inputs}>
          <span>description:</span>
          <Input value={description} onChange={setDescription} />
        </div>
        <div className={style.inputs}>
          <span>lang:</span>
          <Input value={lang} onChange={setLang} />
        </div>
      </div>
      <div className={style.modalFooter}>
        <Button className={style.buttonSubmit} onClick={() => { addSource(name, shortName, description, lang); }} caption="Add new" />
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
