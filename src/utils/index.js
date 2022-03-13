export const removeLetters = (string) => string.replace(/\D/g, '');

/**
 * Add a cent separator to a common value
 * @param {string} value 234530
 * @returns {string} 2345.30
 */
export const addCentsSeparator = (value) => {
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
export const convertToReal = (value) => {
  return Intl.NumberFormat('id', {
    minimumFractionDigits: 2,
  }).format(value);
};
