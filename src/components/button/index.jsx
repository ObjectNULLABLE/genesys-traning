import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Button({
  onClick, caption, className, buttonType, disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className} ${styles[buttonType]}`}
      type="button"
    >
      {caption}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  caption: '',
  className: '',
  buttonType: '',
  disabled: false,
};

export default Button;
