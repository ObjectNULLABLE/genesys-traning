import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { addTalentAction } from './talentsSlice';

const languages = ['eng', 'ru'];
const rank = [true, false];

const AddTalentBody = ({
  show, setShow,
}) => {
  const dispatch = useDispatch();

  const addTalent = (note) => {
    dispatch(addTalentAction(note));
  };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tier, setTier] = useState(0);
  const [lang, setLang] = useState('');
  const [activation, setActivation] = useState('');
  const [ranked, setRanked] = useState(false);
  const [worlds, setWorlds] = useState('');

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
        <span>Tier:</span>
        <Input
          type="text"
          value={tier}
          onChange={setTier}
        />
      </div>
      <div className={style.inputs}>
        <span>Activation:</span>
        <Input
          type="text"
          value={activation}
          onChange={setActivation}
        />
      </div>
      <div className={style.inputs}>
        <span>Ranked:</span>
        <Select
          options={rank}
          setValue={setRanked}
          value={ranked}
        />
      </div>
      <div className={style.inputs}>
        <span>Worlds:</span>
        <Input
          type="text"
          value={worlds}
          onChange={setWorlds}
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
        <Button
          className={style.buttonSubmit}
          onClick={() => {
            addTalent({
              name,
              description,
              lang,
              tier,
              ranked,
              activation,
              worlds,
            });
            setShow(!show);
          }}
          caption="Add new"
        />
      </div>

    </div>
  );
};

AddTalentBody.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
};

AddTalentBody.defaultProps = {
  setShow: () => {},
};

export default AddTalentBody;
