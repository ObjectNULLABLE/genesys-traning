import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Menu = ({ children }) => (
  <div className={styles.Menu}>
    {children.header}
  </div>
);

export default Menu;

Menu.propTypes = {
  children: PropTypes.objectOf({ header: PropTypes.element }),
};

Menu.defaultProps = {
  children: {},
};
