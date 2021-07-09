import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Button({
  onClick, caption, className, buttonType,
}) {
  return (
    <button
      onClick={onClick}
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
};

Button.defaultProps = {
  caption: '',
  className: '',
  buttonType: '',
};

export default Button;
