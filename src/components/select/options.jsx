import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const SelectValue = (closeFunction, value, setSelectedOption, getVal) => {
  closeFunction();
  setSelectedOption(value);
  getVal(value);
};

const Options = ({
  options, closeDropdown, setSelectedOption, getVal,
}) => (options.map((option) => (
  <div
    role="option"
    aria-selected
    tabIndex={0}
    onKeyDown={() => { }}
    onClick={() => { SelectValue(closeDropdown, option, setSelectedOption, getVal); }}
    className={styles.option}
  >
    {option.name}
  </div>
)));

export default Options;

Options.propTypes = {
  closeDropdown: PropTypes.func,
};

Options.defaultProps = {
  closeDropdown: () => {},
};
