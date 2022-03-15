import PropTypes from 'prop-types';
import React from 'react';

const CalcLine = ({ value, title }) => {
  return (
    <div className='flex justify-between my-4 w-72'>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

CalcLine.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CalcLine;
