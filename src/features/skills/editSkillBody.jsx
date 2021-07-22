import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { updateSkillAction } from './skillsSlice';

const languages = ['eng', 'ru'];

const EditSkillBody = ({
  show, setShow, id, selected, setSelected,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(selected.name);
  const [description, setDescription] = useState(selected.description);
  const [lang, setLang] = useState(selected.lang);
  const [worlds, setWorlds] = useState(selected.worlds);
  const [characteristic, setCharacteristic] = useState('');
  const [type, setType] = useState('');
  const [useIf, setUseIf] = useState('');
  const [notUseIf, setNotUseIf] = useState('');

  const editSkill = () => {
    const updatedSkill = {
      id,
      name,
      description,
      lang,
      characteristic,
      type,
      useIf,
      notUseIf,
      worlds,
    };
    setSelected(updatedSkill);
    dispatch(updateSkillAction(updatedSkill));
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
        <span>Use if:</span>
        <Input
          type="text"
          value={useIf}
          onChange={setUseIf}
        />
      </div>
      <div className={style.inputs}>
        <span>Not use if:</span>
        <Input
          type="text"
          value={notUseIf}
          onChange={setNotUseIf}
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
        <span>Type:</span>
        <Input
          type="text"
          value={type}
          onChange={setType}
        />
      </div>
      <div className={style.inputs}>
        <span>Characteristic:</span>
        <Input
          type="text"
          value={characteristic}
          onChange={setCharacteristic}
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
            editSkill({
              name,
              characteristic,
              worlds,
              type,
              description,
              useIf,
              notUseIf,
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

EditSkillBody.propTypes = {
  selected: PropTypes.objectOf({
    name: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
    characteristic: PropTypes.bool,
    type: PropTypes.string,
    useIf: PropTypes.string,
    notUseIf: PropTypes.string,
    worlds: PropTypes.string,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  id: PropTypes.number.isRequired,
};

EditSkillBody.defaultProps = {
  setShow: () => {},
};

export default EditSkillBody;
