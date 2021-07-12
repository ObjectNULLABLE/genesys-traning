import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const content = [{ name: 'obj 1' }, { name: 'obj 2' }, { name: 'obj 3' }, { name: 'obj 4' }];
function Qual({ qualities }) {
  return (
    <div className={style.sourceBody}>
      <Menu>
        {{
          header: (
            <div>
              <div className={style.header}>Qualities</div>
              <Input className={style.search} onChange={() => {}} type="text" />
            </div>),
          content: (
            <div>
              {content.map((el) => (
                <div className={style.listElement} key={el.name}>
                  {el.name}
                </div>
              ))}
            </div>),
          footer: <Button caption="Add new Qualities" className={style.addButton} onClick={() => {}} />,
        }}
      </Menu>

      <div className={style.qualities}>
        <div className={style.wrap1}>
          <div className={style.name}>
            {qualities.name}
          </div>
          <div className={style.active}>
            {qualities.active}
          </div>
          <div className={style.description}>
            {qualities.description}
          </div>
          <div className={style.sourceID}>
            {qualities.sourceID}
          </div>
          <div className={style.lang}>
            {qualities.lang}
          </div>
        </div>
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
    sourceID: '',
    lang: 'lang',
  },
};

export default Qual;
