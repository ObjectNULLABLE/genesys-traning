import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Options from './options';
import styles from './index.module.scss';

const Select = ({ options, selectValue, defaultValue }) => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  selectValue(selectedOption);
  return (
    <div className={styles.Selector}>
      <div
        className={styles.showDropdown}
        role="listbox"
        tabIndex={0}
        onKeyDown={() => { }}
        onClick={() => setShow(!show)}
      >
        {selectedOption.name}
      </div>
      {show && (
        <Options
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          closeDropdown={() => {
            setShow(false);
            setSelectedOption(defaultValue);
          }}
          options={options}
        />
      )}
    </div>
  );
};
export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
  selectValue: PropTypes.func,
  defaultValue: PropTypes.arrayOf(PropTypes.objectOf({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
};

Select.defaultProps = {
  options: [{}],
  defaultValue: {},
  selectValue: () => {},
};
