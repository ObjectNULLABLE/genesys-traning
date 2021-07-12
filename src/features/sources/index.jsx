import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Input from '../../components/Input';
import Button from '../../components/button';

const content = [{ name: 'obj 1' }, { name: 'obj 2' }, { name: 'obj 3' }, { name: 'obj 4' }];
const Sources = ({ source }) => (
  <div className={style.sourceBody}>
    <Menu>
      {{
        header: (
          <div>
            <div className={style.header}>Source</div>
            <Input className={style.search} onChange />
          </div>),
        content: content.map((el) => (
          <div className={style.listElement} key={el.name}>
            {el.name}
          </div>
        )),
        footer: <Button caption="Add new Source" className={style.addButton} />,
      }}
    </Menu>
    <div className={style.sourcePrototype}>
      <div className={style.name}>{source.name}</div>
      <div className={style.shortName}>{source.shortName}</div>
      <div className={style.description}>{source.description}</div>
      <div className={style.lang}>{source.lang}</div>
    </div>
  </div>
);

Sources.propTypes = {
  source: PropTypes.objectOf({
    name: PropTypes.string,
    shortName: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
  }),
};

Sources.defaultProps = {
  source: {
    name: 'default name',
    shortName: 'default shortname',
    description: 'default description',
    lang: 'en',
  },
};

export default Sources;
