import React from 'react';
import PropTypes from 'prop-types';

function Skills({ skill }) {
  return (
    <div>
      {skill.name}
      {skill.characteristic}
      {skill.worlds}
      {skill.type}
      {skill.description}
      {skill.useIf}
      {skill.notUseIf}
      {skill.sourseID}
      {skill.lang}
    </div>
  );
}

Skills.propTypes = {
  skill: PropTypes.objectOf({
    name: PropTypes.string,
    characteristic: PropTypes.string,
    worlds: PropTypes.array,
    description: PropTypes.string,
    useIf: PropTypes.string,
    notUseIf: PropTypes.string,
    sourseID: PropTypes.objectOf({ type: PropTypes.string }),
    lang: PropTypes.string,
  }),
};

Skills.defaultProps = {
  skill: {
    name: 'def name',
    characteristic: '',
    worlds: [],
    type: '',
    description: '',
    useIf: '',
    notUseIf: '',
    sourceID: 1,
    lang: '',
  },
};

export default Skills;
