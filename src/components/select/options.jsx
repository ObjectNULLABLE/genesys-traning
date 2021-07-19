import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Options = ({
  options, closeDropdown, setValue, setSelectedValue,
}) => (options.map((option) => (
  <div
    role="option"
    aria-selected
    tabIndex={0}
    key={option}
    onKeyDown={() => { }}
    onClick={() => {
      setValue(option);
      setSelectedValue(option);
      closeDropdown();
    }}
    className={styles.option}
  >
    {
      option.toString()
}
  </div>
)));

export default Options;

Options.propTypes = {
  closeDropdown: PropTypes.func,
};

Options.defaultProps = {
  closeDropdown: () => {},
};
