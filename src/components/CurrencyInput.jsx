import React, { useState } from 'react';
import PropTypes from 'prop-types';

const removeLetters = (string) => string.replace(/\D/g, '');

/**
 * Add a cent separator to a common value
 * @param {string} value 234530
 * @returns {string} 2345.30
 */
const addCentsSeparator = (value) => {
  const centsIndex = value.length - 2;
  const cents = value.substring(centsIndex);
  const reais = value.substring(0, centsIndex);
  return `${reais}.${cents}`;
};

/**
 * Converts a common value with separation of cents to Real
 * @param {string} value 2345.30
 * @returns {string} 2.345,30
 */
const convertToReal = (value) => {
  return Intl.NumberFormat('id', {
    minimumFractionDigits: 2,
  }).format(value);
};

const invalidValues = ['', '0', '00', '000', '0000'];

const CurrencyInput = ({ testId }) => {
  const [currencyValue, setCurrencyValue] = useState('0,00');
  const formatValue = (value) => {
    const rawValue = removeLetters(value);
    if (invalidValues.includes(rawValue)) {
      setCurrencyValue('0,00');
    } else {
      const centsValue = addCentsSeparator(rawValue);
      const formattedValue = convertToReal(centsValue);
      setCurrencyValue(formattedValue);
    }
  };
  return (
    <input
      type='text'
      data-testid={testId}
      value={currencyValue}
      onChange={({ target }) => formatValue(target.value)}
    />
  );
};

CurrencyInput.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default CurrencyInput;
