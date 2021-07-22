import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Input({
  value, onChange, type, placeholder, minLength,
}) {
  return (
    <input
      minLength={minLength}
      className={styles.input}
      type={type}
      onChange={(event) => { onChange(event.target.value); }}
      value={value}
      placeholder={placeholder}
    />
  );
}
Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
};

Input.defaultProps = {
  minLength: 0,
  value: '',
  placeholder: '',
};
export default Input;
