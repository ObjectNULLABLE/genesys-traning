import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { updateTalentAction } from './talentsSlice';

const languages = ['eng', 'ru'];
const rank = [true, false];

const EditTalentBody = ({
  show, setShow, id, selected, setSelected,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(selected.name);
  const [description, setDescription] = useState(selected.description);
  const [tier, setTier] = useState(selected.tier);
  const [lang, setLang] = useState(selected.lang);
  const [activation, setActivation] = useState(selected.activation);
  const [ranked, setRanked] = useState(selected.ranked);
  const [worlds, setWorlds] = useState(selected.worlds);

  const editTalent = () => {
    const updatedTalent = {
      id,
      name,
      description,
      lang,
      tier,
      ranked,
      activation,
      worlds,
    };
    setSelected(updatedTalent);
    dispatch(updateTalentAction(updatedTalent));
  };

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
        <span>Name:</span>
        <Input
          type="text"
          value={name}
          onChange={setName}
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
            editTalent();
            setShow(!show);
          }}
          caption="Edit"
        />
      </div>
    </div>
  );
};

EditTalentBody.propTypes = {
  selected: PropTypes.objectOf({
    name: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
    tier: PropTypes.bool,
    ranked: PropTypes.string,
    activation: PropTypes.string,
    worlds: PropTypes.string,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  id: PropTypes.number.isRequired,
};

EditTalentBody.defaultProps = {
  setShow: () => {},
};

export default EditTalentBody;
