const calculateINNSDiscount = (grossSalary, porcentage) => {
  const result = grossSalary * porcentage;

  return Math.round((result * 100)) / 100;
};

const calculateINNS = (grossSalary) => {
  if (grossSalary <= 1212) {
    const result = calculateINNSDiscount(grossSalary, 0.075);

    return { value: result, porcentage: 7.5 };
  }

  if (grossSalary >= 1212.01 && grossSalary <= 2427.35) {
    const result = calculateINNSDiscount(grossSalary, 0.09);

    return { value: result, porcentage: 9 };
  }
  if (grossSalary >= 2427.36 && grossSalary <= 3641.03) {
    const result = calculateINNSDiscount(grossSalary, 0.12);

    return { value: result, porcentage: 12 };
  }
  const result = calculateINNSDiscount(grossSalary, 0.14);

  return { value: result, porcentage: 14 };
};

const calculateIRRFDiscount = (salaryWithINSS, porcentage, dependents, deduction) => {
  const result = ((salaryWithINSS - dependents) * porcentage) - deduction;

  if (result <= 0) return 0;
  return Math.round((result * 100)) / 100;
};

const calculateIRRF = (salaryWithINSS, dependents) => {
  if (salaryWithINSS <= 1903.98) return { value: 0, porcentage: 0 };

  if (salaryWithINSS >= 1903.99 && salaryWithINSS <= 2826.65) {
    const result = calculateIRRFDiscount(salaryWithINSS, 0.075, dependents, 142.80);

    return { value: result, porcentage: result !== 0 ? 7.5 : 0 };
  }
  if (salaryWithINSS >= 2826.66 && salaryWithINSS <= 3751.05) {
    const result = calculateIRRFDiscount(salaryWithINSS, 0.15, dependents, 354.80);

    return { value: result, porcentage: result !== 0 ? 15 : 0 };
  }
  if (salaryWithINSS >= 3751.06 && salaryWithINSS <= 4664.68) {
    const result = calculateIRRFDiscount(salaryWithINSS, 0.225, dependents, 636.13);

    return { value: result, porcentage: result !== 0 ? 22.5 : 0 };
  }

  const result = calculateIRRFDiscount(salaryWithINSS, 0.275, dependents, 869.36);

  return { value: result, porcentage: result !== 0 ? 27.5 : 0 };
};

const calculateDependents = (dependents) => dependents * 189.59;

const calculateLiquidSalary = (grossSalary, dependents, discount) => {
  const INNS = calculateINNS(grossSalary);
  const salaryWithINSS = grossSalary - INNS.value;

  const dependentsValue = calculateDependents(dependents);

  const IRRF = calculateIRRF(salaryWithINSS, dependentsValue);

  const totalDiscount = INNS.value + IRRF.value + discount;

  const liquidSalary = Math.round((grossSalary - totalDiscount) * 100) / 100;

  return {
    INNS,
    IRRF,
    discount,
    liquidSalary,
    grossSalary,
  };
};

export default calculateLiquidSalary;
