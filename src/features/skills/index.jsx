import React from 'react';
import PropTypes from 'prop-types';

function Skills({ skill }) {
  return (
    <div>
      {skill.name}
      <br />
      {skill.shortName}
    </div>
  );
}

Skills.propTypes = {
  skill: PropTypes.objectOf({ name: PropTypes.string, shortName: PropTypes.string }),
};

Skills.defaultProps = {
  skill: {
    name: 'def name',
    shortName: 'd.name',
  },
};

export default Skills;
