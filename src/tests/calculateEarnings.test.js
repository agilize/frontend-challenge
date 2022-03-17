import calculateEarnings from "../helpers/calculateEarning";

describe('Test the behavior of the accounting calculations function', () => {
  describe('percentageInss: tests if the inss percentage is returned as expected', () => {
    test('when the field is empty', () => {
      const percentage = calculateEarnings.percentageInss('');
      expect(percentage).toBe(0);
    });

    test('how much salary is less than or equal to 1212.00', () => {
      const percentage = calculateEarnings.percentageInss(1212);
      expect(percentage).toBe(7.5);
    });

    test('when the salary is between 1212.01 and 2427.35', () => {
      const percentageByMinSalary = calculateEarnings.percentageInss(1212);
      const percentageByMaxSalary = calculateEarnings.percentageInss(2427.35);
      expect(percentageByMinSalary && percentageByMaxSalary).toBe(9);
    });

    test('when the salary is between 2427.36 and 3641.03', () => {
      const percentageByMinSalary = calculateEarnings.percentageInss(2427.36);
      const percentageByMaxSalary = calculateEarnings.percentageInss(3641.03);
      expect(percentageByMinSalary && percentageByMaxSalary).toBe(12);
    });

    test('when the salary is equal to or greater than 3641.04', () => {
      const percentage = calculateEarnings.percentageInss(3641.04);
      expect(percentage).toBe(14);
    });
  });

  describe(`percentageIrrf: tests the return of the deductible portion
    and aliquot based on salary`, () => {

    test('when the salary is less than or equal to 1903.98', () => {
      const deductionsIrrf = calculateEarnings.percentageIrrf(1903.98);
      expect(deductionsIrrf).toEqual({ aliquot: 0, deductiblePortion: 0 });
    });

    test('when the salary is greater than or equal to 1903.99 and less than or equal 2826.65', () => {
      const deductionsIrrfMinSalary = calculateEarnings.percentageIrrf(1903.99);
      const deductionsIrrfMaxSalary = calculateEarnings.percentageIrrf(2826.65);

      expect(deductionsIrrfMinSalary && deductionsIrrfMaxSalary)
        .toEqual({ aliquot: 7.5, deductiblePortion: 142.80 });
    });

    test('when the salary is greater than or equal to 2826.66 and less than or equal 3751.05', () => {
      const deductionsIrrfMinSalary = calculateEarnings.percentageIrrf(2826.66);
      const deductionsIrrfMaxSalary = calculateEarnings.percentageIrrf(3751.05);

      expect(deductionsIrrfMinSalary && deductionsIrrfMaxSalary)
        .toEqual({ aliquot: 15, deductiblePortion: 354.80});
    });

    test('when the salary is greater than or equal to 3751.06 and less than or equal 4664.68', () => {
      const deductionsIrrfMinSalary = calculateEarnings.percentageIrrf(3751.06);
      const deductionsIrrfMaxSalary = calculateEarnings.percentageIrrf(4664.68);

      expect(deductionsIrrfMinSalary && deductionsIrrfMaxSalary)
        .toEqual({ aliquot: 22.5, deductiblePortion: 636.13 });
    });

    test('when the salary is greater than 4664.68', () => {
      const deductionGreaterSalary = calculateEarnings.percentageIrrf(4664.69);
      expect(deductionGreaterSalary).toEqual({ aliquot: 27.5, deductiblePortion: 869.36 });
    });
  });

  describe('calculateInss: check the return of the inss installment', () => {
    test('returns the inss installment from the salary and inss percentage', () => {
      const bruteSalary = 3500;
      const percentage = calculateEarnings.percentageInss(bruteSalary);
      const portionInss = calculateEarnings.calculateInss(bruteSalary, percentage);
      expect(portionInss).toBe(420.00);
    });
  });

  describe('calculateIrrf: check the return of the irrf installment', () => {
    const bruteSalary = 3500;
    const inssPercentage = calculateEarnings.percentageInss(bruteSalary);
    const INSS = calculateEarnings.calculateInss(bruteSalary, inssPercentage);
    const { aliquot, deductiblePortion } = calculateEarnings.percentageIrrf(bruteSalary);
    
    test('when dont have dependents', () => {
      const dependentsNumber = 0;
      const portionIrrf = calculateEarnings.calculateIrrf({
        bruteSalary,
        INSS,
        aliquot,
        deductiblePortion
      }, dependentsNumber);

      expect(portionIrrf).toBe(107.20);
    });

    test('when there are dependents', () => {
      const dependentsNumber = 2;
      const portionIrrf = calculateEarnings.calculateIrrf({
        bruteSalary,
        INSS,
        aliquot,
        deductiblePortion
      }, dependentsNumber);

      expect(portionIrrf).toBe(113.32);
    });
  });

  describe('calculateLiquidSalary: check the returns of the net salary', () => {
    const bruteSalary = 3500;
    const inssPercentage = calculateEarnings.percentageInss(bruteSalary);
    const INSS = calculateEarnings.calculateInss(bruteSalary, inssPercentage);
    const { aliquot, deductiblePortion } = calculateEarnings.percentageIrrf(bruteSalary);
    const dependentesNumber = 0;
    const totalDiscounts = 0;
    const IRRF = calculateEarnings.calculateIrrf({
      bruteSalary,
      INSS,
      aliquot,
      deductiblePortion
    }, dependentesNumber);

    test('check net salary calculation', () => {
      const netSalary = calculateEarnings.calculateLiquidSalary({
        bruteSalary,
        INSS,
        IRRF,
        totalDiscounts
      });

      expect(netSalary).toBe(2972.80);
    });
  });
});