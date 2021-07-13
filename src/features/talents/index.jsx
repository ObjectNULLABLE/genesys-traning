import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const content = [{ name: 'obj 1' }, { name: 'obj 2' }, { name: 'obj 3' }, { name: 'obj 4' }];
function Talents({ talents }) {
  return (
    <div className={styles.talentsBody}>
      <Menu>
        {{
          header: (
            <div>
              <div>Talents</div>
              <Input onChange={() => {}} type="text" />
            </div>),
          content: (
            <div>
              {content.map((el) => (
                <div className={styles.listElement} key={el.name}>
                  {el.name}
                </div>
              ))}
            </div>),
          footer: <Button caption="Add new Source" className={styles.addButton} onClick={() => {}} />,
        }}
      </Menu>
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
