import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Input({
  value, onChange, type, placeholder,
}) {
  return (
    <input
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
};

Input.defaultProps = {
  value: '',
  placeholder: '',
};
export default Input;
