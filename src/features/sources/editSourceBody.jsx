import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import style from '../styles.module.scss';
import Select from '../../components/select';
import Button from '../../components/button';
import { updateSourceAction } from './sourcesSlice';

const languages = ['eng', 'ru'];

const AddSourceBody = ({
  show, setShow, Id, selected, setSelected,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(selected.name);
  const [shortName, setShortName] = useState(selected.shortName);
  const [description, setDescription] = useState(selected.description);
  const [lang, setLang] = useState(selected.lang);

  const editSource = () => {
    const updatedSource = {
      Id,
      name,
      shortName,
      description,
      lang,
    };
    setSelected(updatedSource);
    dispatch(updateSourceAction(updatedSource));
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
        <span>Shortname:</span>
        <Input
          type="text"
          value={shortName}
          onChange={setShortName}
          placeholder="Input shortname"
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

AddSourceBody.propTypes = {
  selected: PropTypes.objectOf({
    name: PropTypes.string,
    shortName: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  Id: PropTypes.number.isRequired,
};

AddSourceBody.defaultProps = {
  setShow: () => {},
};

export default AddSourceBody;
