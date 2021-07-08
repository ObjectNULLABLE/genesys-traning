import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Options from './options';
import styles from './index.module.scss';

const Select = ({ options, getVal, defaultValue }) => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  return (
    <div>
      <div
        className={styles.showDropdown}
        role="listbox"
        tabIndex={0}
        onKeyDown={() => { }}
        onClick={() => setShow(!show)}
      >
        <p>{selectedOption.name}</p>
      </div>
      {show && (
        <Options
          getVal={getVal}
          setSelectedOption={setSelectedOption}
          closeDropdown={() => setShow(false)}
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
  defaultValue: PropTypes.func,
  getVal: PropTypes.func,
};

Select.defaultProps = {
  options: [{}],
  defaultValue: {},
  getVal: () => {},
};
