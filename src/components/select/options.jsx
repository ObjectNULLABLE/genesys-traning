import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Options = ({ options, closeDropdown }) => (options.map((option) => (
  <div
    role="button"
    tabIndex={0}
    onKeyDown={() => {}}
    onClick={closeDropdown}
    className={styles.option}
    value={option.value}
  >
    {option.name}
  </div>
)));

export default Options;

Options.propTypes = {
  closeDropdown: PropTypes.func,
  select: PropTypes.func,
};

Options.defaultProps = {
  closeDropdown: () => {},
  select: () => {},
};
