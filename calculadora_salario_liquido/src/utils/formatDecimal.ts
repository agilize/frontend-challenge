export const formatDecimals = (number: number, numberOfDecimals: number) => {
  const decimal = number - Math.floor(number);

  const decimalToInt = Math.floor(decimal * 10 ** numberOfDecimals);

  const divider = 10 ** numberOfDecimals;

  return Math.floor(number) + decimalToInt / divider;
};
