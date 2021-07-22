import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { updateQualityAction } from './qualitiesSlice';

const languages = ['eng', 'ru'];
const actives = [true, false];

const EditQualityBody = ({
  show, setShow, id, selected, setSelected,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(selected.name);
  const [active, setActive] = useState(selected.active);
  const [description, setDescription] = useState(selected.description);
  const [lang, setLang] = useState(selected.lang);

  const editSource = () => {
    const updatedQuality = {
      id,
      name,
      active,
      description,
      lang,
    };
    setSelected(updatedQuality);
    dispatch(updateQualityAction(updatedQuality));
  };

  return (
    <div className={style.modalBody}>
      <div className={style.inputs}>
        <span>Name:</span>
        <Input
          type="text"
          value={name}
          onChange={setName}
          placeholder="Input name"
        />
      </div>
      <div className={style.inputs}>
        <span>Active:</span>
        <Select
          value={active}
          options={actives}
          setValue={setActive}
        />
      </div>

      <div className={style.inputs}>
        <span>Description:</span>
        <textarea
          placeholder="Input description"
          value={description}
          className={style.descriptionWindow}
          onChange={
            (e) => { setDescription(e.target.value); }
}
        />
      </div>
      <div className={style.inputs}>
        <span>Language:</span>
        <Select
          value={lang}
          options={languages}
          setValue={setLang}
        />
      </div>
      <Button
        className={style.buttonSubmit}
        onClick={() => {
          editSource();
          setShow(!show);
        }}
        caption="Edit"
      />
    </div>
  );
};

EditQualityBody.propTypes = {
  selected: PropTypes.objectOf({
    name: PropTypes.string,
    active: PropTypes.bool,
    description: PropTypes.string,
    lang: PropTypes.string,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  id: PropTypes.number.isRequired,
};

EditQualityBody.defaultProps = {
  setShow: () => {},
};

export default EditQualityBody;
