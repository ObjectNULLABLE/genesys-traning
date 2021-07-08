import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Options from './options';

const Select = ({ options }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button style={{ width: '100%' }} onClick={() => setShow(!show)} type="button">Show Parameters</button>
      {show && <Options closeDropdown={() => setShow(false)} options={options} />}
    </div>
  );
};
export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf({ name: PropTypes.string })),
};

Select.defaultProps = {
  options: [{}],
};
