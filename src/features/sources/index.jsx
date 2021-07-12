import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import Menu from '../../components/menu';
import Search from '../../components/Input';
import Button from '../../components/button';

const content = [{ name: 'obj 1', id: 1 }, { name: 'obj 2', id: 2 }, { name: 'obj 3', id: 3 }, { name: 'obj 4', id: 4 }];
const Sources = ({ source }) => (
  <div className={style.sourceBody}>
    <Menu>
      {{
        header: (
          <div>
            <div className={style.header}>Source</div>
            <Search className={style.Search} onChange />
          </div>),
        content: content.map((el) => (
          <div className={style.listElement} value={el.name} key={el.id}>
            {el.name}
          </div>
        )),
        footer: <Button caption="Add new Source" className={style.addButton} />,
      }}
    </Menu>
    {source.name}
    <br />
    {source.shortName}
  </div>
);

Sources.propTypes = {
  source: PropTypes.objectOf({ name: PropTypes.string, shortName: PropTypes.string }),
};

Sources.defaultProps = {
  source: {
    name: 'default name',
    shortName: 'default shortname',
  },
};

export default Sources;
