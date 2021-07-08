import React from 'react';
import PropTypes from 'prop-types';
import Options from './options';

const Select = ({ options }) => (
  <div>
    <button style={{ width: '100%' }} type="button">Show Parameters</button>
    <Options options={options} show={false} />
  </div>
);
export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf({ name: PropTypes.string })),
};

Select.defaultProps = {
  options: [{}],
};
