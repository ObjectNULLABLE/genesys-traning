import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Talents({ talents }) {
  return (
    <div className={styles.talents}>
      <div className={styles.wrap1}>
        <div className={styles.name}>
          {talents.name}
        </div>
        <div className={styles.tier}>
          {talents.tier}
        </div>
        <div className={styles.sourceID}>
          {talents.sourceID}
        </div>
      </div>
      <div className={styles.description}>
        {talents.description}
      </div>
      <div className={styles.activation}>
        {talents.activation}
      </div>
      <div className={styles.ranked}>
        {talents.ranked}
      </div>
      <div className={styles.worlds}>
        {talents.worlds}
      </div>
      <div className={styles.lang}>{talents.lang}</div>
    </div>
  );
}

Talents.propTypes = {
  talents: PropTypes.shape({
    name: PropTypes.string,
    tier: PropTypes.number,
    activation: PropTypes.string,
    ranked: PropTypes.bool,
    description: PropTypes.string,
    worlds: PropTypes.string,
    sourceID: PropTypes.string,
    lang: PropTypes.string,
  }),
};

Talents.defaultProps = {
  talents: {
    name: 'name',
    tier: 0,
    activation: 'activation',
    ranked: false,
    description: 'lorem ipsum jvgnerhgbkjrg gbr  btg jbn hbhjb jv hv',
    worlds: 'worlds',
    sourceID: '123',
    lang: 'ru',
  },
};
export default Talents;
