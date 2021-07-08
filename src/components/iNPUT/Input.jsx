import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.sсss';

function Input({ value, onChange, type }) {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={(event) => { onChange(event.target.value); }}
      defaultValue={value}
    />
  );
}
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,

};

// Input.defaultProps = {
//   type: 'text',
// };
export default Input;
