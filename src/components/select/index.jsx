import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Options from './options';
import styles from './index.module.scss';

const Select = ({
  options, setValue, value,
}) => {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  return (
    <div className={styles.Selector}>
      <div
        value={value}
        className={styles.showDropdown}
        role="listbox"
        tabIndex={0}
        onKeyDown={() => { }}
        onClick={() => setShowSelect(!showSelect)}
      >
        {
          value === '' ? selectedValue : value
        }
      </div>
      {showSelect && (
        <Options
          selectedValue={selectedValue}
          value={value}
          setValue={setValue}
          setSelectedValue={setSelectedValue}
          closeDropdown={() => { setShowSelect(false); }}
          options={options}
        />
      )}
    </div>
  );
};
export default Select;

Select.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.bool),
  ]),
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func,
};

Select.defaultProps = {
  options: [{}],
  setValue: () => {},
};
