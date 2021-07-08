import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Button({
  onClick, caption, className, buttonType,
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[buttonType]}`}
      type="button"
    >
      {caption}
      {className}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  caption: PropTypes.string,
  className: PropTypes.string,
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => { alert('test button'); },
  caption: 'default button',
  className: '',
  buttonType: '',
};

export default Button;
