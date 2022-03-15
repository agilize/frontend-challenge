import PropTypes from 'prop-types';
import React from 'react';
import { convertToReal } from '../../../utils';

const CalcLine = ({ value, title }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{convertToReal(value)}</p>
    </div>
  );
};

CalcLine.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CalcLine;
