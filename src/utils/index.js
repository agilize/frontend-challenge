export const removeLetters = (string) => string.replace(/\D/g, '');
export const twoDecimals = (number) => Math.round(number * 100) / 100;

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
 * Returns the salary with the INSS reduction
 * @param {number} glossSalary
 * @returns {number}
 */
export const deductsINSS = (glossSalary) => {
  switch (true) {
    case glossSalary <= 1212:
      return twoDecimals(glossSalary - glossSalary * 0.075);
    case glossSalary <= 2427.35:
      return twoDecimals(glossSalary - (90.9 + (glossSalary - 1212) * 0.09));
    case glossSalary <= 3641.03:
      return twoDecimals(
        glossSalary - (200.28 + (glossSalary - 2427.35) * 0.12)
      );
    case glossSalary <= 7087.22:
      return twoDecimals(
        glossSalary - (345.92 + (glossSalary - 3641.03) * 0.14)
      );
    default:
      return glossSalary - 828.38;
  }
};

/**
 * Returns the salary with the IRRF reduction
 * @param {number} glossSalary
 * @param {number} netSalary
 * @param {number} dependents
 * @returns {number}
 */
export const deductsIRRF = (glossSalary, netSalary, dependents) => {
  const deductsDependents = 189.59 * dependents;
  switch (true) {
    case glossSalary - deductsDependents <= 2073:
      return twoDecimals(netSalary);
    case glossSalary - deductsDependents <= 2826.65:
      return twoDecimals(
        netSalary - ((netSalary - deductsDependents) * 0.075 - 142.8)
      );
    case glossSalary - deductsDependents <= 3751.05:
      return twoDecimals(
        netSalary - ((netSalary - deductsDependents) * 0.15 - 354.8)
      );
    case glossSalary - deductsDependents <= 4664.68:
      return twoDecimals(
        netSalary - ((netSalary - deductsDependents) * 0.225 - 636.13)
      );
    default:
      console.log('teste');
      return twoDecimals(
        netSalary - ((netSalary - deductsDependents) * 0.275 - 869.36)
      );
  }
};
