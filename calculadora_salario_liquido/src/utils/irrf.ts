import { formatDecimals } from './formatDecimal';

const VALUE_PER_DEPENDENT = 189.59;
const PER_CENT = 100;

const IRRFranges = [
  {
    rangeAt: 1903.98,
    aliquot: 0,
    deduction: 0,
  },
  {
    rangeAt: 2826.65,
    aliquot: 7.5,
    deduction: 142.8,
  },
  {
    rangeAt: 3751.05,
    aliquot: 15,
    deduction: 354.8,
  },
  {
    rangeAt: 4664.68,
    aliquot: 22.5,
    deduction: 636.13,
  },
];

export const getIRRFindex = (grossSalary: number) => {
  const index = IRRFranges.findIndex((range) => grossSalary <= range.rangeAt);

  if (index < 0) {
    return null;
  }

  return index;
};

export const getIRRFdiscount = (
  grossSalary: number,
  discount: number,
  dependents: number,
  INSSdiscount: number
) => {
  const dependentsExpense = dependents * VALUE_PER_DEPENDENT;

  const salaryWithoutExpenses =
    grossSalary - discount - dependentsExpense - INSSdiscount;

  const IRRFindex = getIRRFindex(salaryWithoutExpenses);

  const range =
    IRRFindex === null
      ? { aliquot: 27.5, deduction: 869.36 }
      : IRRFranges[IRRFindex];

  return formatDecimals(
    salaryWithoutExpenses * (range.aliquot / PER_CENT) - range.deduction,
    2
  );
};

export const getIRRFAliquot = (grossSalary: number) => {
  const index = getIRRFindex(grossSalary);

  return index == null ? 27.5 : IRRFranges[index].aliquot;
};
