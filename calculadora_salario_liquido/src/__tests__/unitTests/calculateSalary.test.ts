import { calculateSalary } from '../../utils/calculateSalary';

const paramsMock = [
  {
    salary: 1100,
    discount: 0,
    dependents: 0,
  },
  {
    salary: 3000,
    discount: 0,
    dependents: 1,
  },
  {
    salary: 4600,
    discount: 200,
    dependents: 2,
  },
  {
    salary: 10000,
    discount: 500,
    dependents: 3,
  },
  {
    salary: 40000,
    discount: 1000,
    dependents: 3,
  },
];

const expectedValues = [
  {
    salary: {
      grossSalary: 'R$ 1.100,00',
      netSalary: 'R$ 1.017,50',
    },
    irrf: {
      aliquot: '0%',
      value: '-R$ 0,00',
    },
    inss: {
      aliquot: '7,5%',
      value: '-R$ 82,50',
    },

    otherDiscounts: '-R$ 0,00',
  },
  {
    salary: {
      grossSalary: 'R$ 3.000,00',
      netSalary: 'R$ 2.683,21',
    },
    irrf: {
      aliquot: '15%',
      value: '-R$ 47,80',
    },
    inss: {
      aliquot: '12%',
      value: '-R$ 268,99',
    },

    otherDiscounts: '-R$ 0,00',
  },
  {
    salary: {
      grossSalary: 'R$ 4.600,00',
      netSalary: 'R$ 3.743,54',
    },
    irrf: {
      aliquot: '22,5%',
      value: '-R$ 176,29',
    },
    inss: {
      aliquot: '14%',
      value: '-R$ 480,17',
    },

    otherDiscounts: '-R$ 200,00',
  },
  {
    salary: {
      grossSalary: 'R$ 10.000,00',
      netSalary: 'R$ 7.312,69',
    },
    irrf: {
      aliquot: '27,5%',
      value: '-R$ 1.358,92',
    },
    inss: {
      aliquot: null,
      value: '-R$ 828,39',
    },

    otherDiscounts: '-R$ 500,00',
  },
  {
    salary: {
      grossSalary: 'R$ 40.000,00',
      netSalary: 'R$ 28.700,19',
    },
    irrf: {
      aliquot: '27,5%',
      value: '-R$ 9.471,42',
    },
    inss: {
      aliquot: null,
      value: '-R$ 828,39',
    },

    otherDiscounts: '-R$ 1.000,00',
  },
];

describe('tests the function calculateSalary', () => {
  it('tests if the function returns the corret values for each param', () => {
    for (let index = 0; index < paramsMock.length; index += 1) {
      const result = calculateSalary(paramsMock[index]);

      expect(result.salary.netSalary).toEqual(
        expectedValues[index].salary.netSalary
      );

      expect(result).toEqual(expectedValues[index]);
    }
  });
});
