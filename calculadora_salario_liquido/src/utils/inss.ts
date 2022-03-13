import { formatDecimals } from './formatDecimal';

const INSS_DISCOUNT_CEIL = 828.39;
const PER_CENT = 100;

const INSSranges = [
  {
    rangeAt: 1212,
    prevRange: 0,
    aliquot: 7.5,
  },
  {
    rangeAt: 2427.35,
    prevRange: 1212,
    aliquot: 9,
  },
  {
    rangeAt: 3641.03,
    prevRange: 2427.35,
    aliquot: 12,
  },
  {
    rangeAt: 7087.22,
    prevRange: 3641.03,
    aliquot: 14,
  },
];

export const getINSSIndexRange = (grossSalary: number) => {
  const index = INSSranges.findIndex(({ rangeAt }) => grossSalary <= rangeAt);

  if (index < 0) {
    return null;
  }

  return index;
};

export const getINSSdiscount = (grossSalary: number) => {
  const indexRange = getINSSIndexRange(grossSalary);

  if (indexRange === null) {
    return INSS_DISCOUNT_CEIL;
  }

  const discount = INSSranges.slice(0, indexRange + 1).reduce(
    (acc, range, currIndex, arr) => {
      /* a tabela do INSS é progressiva portanto não deve-se somar o resultado direto da faixa desejada, e sim
    somar o resultado direto da aliquota de cada uma delas ex:
      (2427.35 - 1212) * (9/100)
    */
      if (currIndex + 1 === arr.length) {
        return (
          acc + (grossSalary - range.prevRange) * (range.aliquot / PER_CENT)
        );
      }
      return (
        acc + (range.rangeAt - range.prevRange) * (range.aliquot / PER_CENT)
      );
    },
    0
  );

  return formatDecimals(discount, 2);
};

export const getINSSaliquot = (grossSalary: number) => {
  const indexRange = getINSSIndexRange(grossSalary);

  if (indexRange === null) {
    return null;
  }

  return INSSranges[indexRange].aliquot;
};
