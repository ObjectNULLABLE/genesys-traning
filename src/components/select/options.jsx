import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const SelectValue = (value, setSelectedOption, selectedOption, defaultValue) => (
  selectedOption !== value ? setSelectedOption(value) : setSelectedOption(defaultValue)
);

const Options = ({
  options, closeDropdown, setSelectedOption, selectedOption, defaultValue,
}) => (options.map((option) => (
  <div
    role="option"
    aria-selected
    tabIndex={0}
    key={option}
    onKeyDown={() => { }}
    onClick={() => {
      SelectValue(option, setSelectedOption, selectedOption, defaultValue);
      closeDropdown();
    }}
    className={styles.option}
  >
    {option}
  </div>
)));

export default Options;

Options.propTypes = {
  closeDropdown: PropTypes.func,
};

Options.defaultProps = {
  closeDropdown: () => {},
};
