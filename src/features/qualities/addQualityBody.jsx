import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { addQualityAction } from './qualitiesSlice';

const languages = ['eng', 'ru'];
const actives = [true, false];

const AddQualityBody = ({
  show, setShow,
}) => {
  const dispatch = useDispatch();

  const addQuality = (note) => {
    dispatch(addQualityAction(note));
  };

  const [name, setName] = useState('');
  const [active, setActive] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLang] = useState('');

  return (
    <div className={style.modalBody}>
      <div className={style.inputs}>
        <span>Name:</span>
        <Input
          type="text"
          value={name}
          onChange={setName}
        />
      </div>
      <div className={style.inputs}>
        <span>Active:</span>
        <Select
          options={actives}
          setValue={setActive}
          value={active}
        />
      </div>
      <div className={style.inputs}>
        <span>Description:</span>
        <textarea
          value={description}
          className={style.descriptionWindow}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className={style.inputs}>
        <span>Language:</span>
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
            addQuality({
              name,
              active,
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

AddQualityBody.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
};

AddQualityBody.defaultProps = {
  setShow: () => {},
};

export default AddQualityBody;
