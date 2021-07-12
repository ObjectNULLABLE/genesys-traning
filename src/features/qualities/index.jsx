import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Qual({ qualities }) {
  return (
    <div className={styles.qualities}>
      <div className={styles.name}>
        {qualities.name}
      </div>
      <div className={styles.active}>
        {qualities.active}
      </div>
      <div className={styles.description}>
        {qualities.description}
      </div>
      <div className={styles.sourceID}>
        {qualities.sourceID}
      </div>
      <div className={styles.lang}>
        {qualities.lang}
      </div>
    </div>
  );
}

Qual.propTypes = {
  qualities: PropTypes.objectOf({
    name: PropTypes.string,
    active: PropTypes.bool,
    description: PropTypes.string,
    sourceID: PropTypes.objectOf({ type: PropTypes.string }),
    lang: PropTypes.string,
  }),
};

Qual.defaultProps = {
  qualities: {
    name: 'name',
    active: false,
    description: 'description',
    sourceID: 1,
    lang: 'lang',
  },
};

export default Qual;
