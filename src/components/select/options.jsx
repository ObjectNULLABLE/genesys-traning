import React from 'react';
import styles from './index.module.scss';

const Options = ({ options, hide }) => (options.map((option) => (
  <div
    className={styles.option}
    isHide={hide}
    value={option.value}
  >
    {option.name}
  </div>
)));

export default Options;
