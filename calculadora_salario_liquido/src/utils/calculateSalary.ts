import { CalcParameters } from '../types';
import { getINSSaliquot, getINSSdiscount } from './inss';
import { getIRRFAliquot, getIRRFdiscount } from './irrf';
import { replaceWithSpaceIn } from './replaceWithSpacein';

const PER_CENT = 100;

export const calculateSalary = ({
  salary,
  dependents,
  discount,
}: CalcParameters) => {
  const INSSaliquot = getINSSaliquot(salary);

  const INSSdiscount = getINSSdiscount(salary);

  const IRRFaliquot = getIRRFAliquot(salary);

  const IRRFdiscount = getIRRFdiscount(
    salary,
    discount,
    dependents,
    INSSdiscount
  );

  const netSalary = salary - INSSdiscount - IRRFdiscount - discount;

  return {
    salary: {
      grossSalary: replaceWithSpaceIn(
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(salary),
        2
      ),

      netSalary: replaceWithSpaceIn(
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(netSalary),
        2
      ),
    },
    irrf: {
      aliquot: Intl.NumberFormat('pt-BR', {
        style: 'percent',
        maximumFractionDigits: 2,
      }).format(IRRFaliquot / PER_CENT),

      value: replaceWithSpaceIn(
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(-IRRFdiscount),
        3
      ),
    },
    inss: {
      aliquot: INSSaliquot
        ? Intl.NumberFormat('pt-BR', {
            style: 'percent',
            maximumFractionDigits: 2,
          }).format(INSSaliquot / PER_CENT)
        : null,
      value: replaceWithSpaceIn(
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(-INSSdiscount),
        3
      ),
    },

    otherDiscounts: replaceWithSpaceIn(
      Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(-discount),
      3
    ),
  };
};
