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

/**
 * From the received amount, it returns the rate based on the INSS table 13/03/2022
 * @param {number} value
 * @returns {number}
 */
export const INSSrate = (value) => {
  switch (false) {
    case value <= 1212:
      return 0.075;
    case value <= 2427.35:
      return 0.09;
    case value <= 3641.03:
      return 0.12;
    case value <= 7087.22:
      return 0.14;
    default:
      return 0;
  }
};

/**
 * From the amount received returns the rate and deduction based on the IRRF table 13/03/2022
 * @param {number} value 2826.65
 * @returns {object} { aliquot: 0.075, deduction: 142.8 }
 */
export const IRRFrate = (value) => {
  switch (false) {
    case value <= 1903.98:
      return { aliquot: 0, deduction: 0 };
    case value <= 2826.65:
      return { aliquot: 0.075, deduction: 142.8 };
    case value <= 3751.05:
      return { aliquot: 0.15, deduction: 354.8 };
    case value < 4664.68:
      return { aliquot: 0.225, deduction: 636.13 };
    default:
      return { aliquot: 0.275, deduction: 869.36 };
  }
};
