import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { addSourceAction } from './sourcesSlice';

const languages = ['eng', 'ru'];

const AddSourceBody = ({
  show, setShow,
}) => {
  const dispatch = useDispatch();

  const addSource = (note) => {
    dispatch(addSourceAction(note));
  };

  const [name, setName] = useState('');
  const [shortName, setShortName] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLang] = useState('');

  return (
    <div className={style.modalBody}>
      <div className={style.inputs}>
        <Input
          type="text"
          value={name}
          onChange={setName}
          placeholder="name"
        />
      </div>
      <div className={style.inputs}>
        <Input
          type="text"
          value={shortName}
          onChange={setShortName}
          placeholder="shortname"
        />
      </div>
      <div className={style.inputs}>
        <textarea
          value={description}
          placeholder="description"
          className={style.descriptionWindow}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className={style.inputs}>
        <Select
          options={languages}
          setValue={setLang}
          value={lang}
        />
      </div>
      <div className={style.inputs}>
        <Button
          className={style.buttonSubmit}
          onClick={() => {
            addSource({
              name,
              shortName,
              description,
              lang,
            });
            setShow(!show);
          }}
          caption="Add new"
        />
      </div>

    </div>
  );
};

AddSourceBody.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
};

AddSourceBody.defaultProps = {
  setShow: () => {},
};

export default AddSourceBody;
