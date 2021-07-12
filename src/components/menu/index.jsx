import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Menu = ({ children }) => (
  <div className={styles.menu}>
    <div className={styles.header}>{children.header}</div>
    <div className={styles.content}>{children.content}</div>
    <div className={styles.footer}>{children.footer}</div>
  </div>
);

export default Menu;

Menu.propTypes = {
  children: PropTypes.shape({
    header: PropTypes.element,
    content: PropTypes.element,
    footer: PropTypes.element,
  }),
};

Menu.defaultProps = {
  children: {
    header: <div />,
    content: <div />,
    footer: <div />,
  },
};
