import React from 'react';
import PropTypes from 'prop-types';

function CurrencyInput({ testId }) {
  return <input type='text' data-testid={testId} />;
}

CurrencyInput.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default CurrencyInput;
