import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RealInput, RealSymbol } from '../../../styles/CalculationForm';
import {
  removeLetters,
  addCentsSeparator,
  convertToReal,
} from '../../../utils';

const invalidValues = ['', '0', '00', '000', '0000'];

const ValueInput = ({ testId }) => {
  const [currencyValue, setCurrencyValue] = useState('0,00');
  const formatValue = (value) => {
    if (value.length <= 14) {
      const rawValue = removeLetters(value);
      if (invalidValues.includes(rawValue)) {
        setCurrencyValue('0,00');
      } else {
        const centsValue = addCentsSeparator(rawValue);
        const formattedValue = convertToReal(centsValue);
        setCurrencyValue(formattedValue);
      }
    }
  };
  return (
    <div className='flex my-1'>
      <RealSymbol>R$</RealSymbol>
      <RealInput
        type='text'
        data-testid={testId}
        value={currencyValue}
        onChange={({ target }) => formatValue(target.value)}
      />
    </div>
  );
};

ValueInput.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default ValueInput;
