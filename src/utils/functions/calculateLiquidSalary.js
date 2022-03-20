const calculateINNS = (grossSalary) => {
  if (grossSalary <= 1212) return { value: grossSalary * 0.075, porcentage: 7.5 };

  if (grossSalary >= 1212.01 && grossSalary <= 2427.35) {
    return { value: grossSalary * 0.09, porcentage: 9 };
  }
  if (grossSalary >= 2427.36 && grossSalary <= 3641.03) {
    return { value: grossSalary * 0.12, porcentage: 9 };
  }

  return { value: grossSalary * 0.14, porcentage: 14 };
};

const calculateIRRF = (grossSalary) => {
  if (grossSalary <= 1903.98) return { value: 0, porcentage: 0 };

  if (grossSalary >= 1903.99 && grossSalary <= 2826.65) {
    return { value: grossSalary * 0.075, porcentage: 7 };
  }
  if (grossSalary >= 2826.66 && grossSalary <= 3751.05) {
    return { value: grossSalary * 0.15, porcentage: 15 };
  }
  if (grossSalary >= 3751.06 && grossSalary <= 4664.68) {
    return { value: grossSalary * 0.225, porcentage: 22.5 };
  }

  return { value: grossSalary * 0.275, porcentage: 27.5 };
};

const calculateDependents = (dependents) => dependents * 189.59;

const calculateLiquidSalary = (grossSalary, dependents, discount) => {
  const INNS = calculateINNS(grossSalary);

  const IRRF = calculateIRRF(grossSalary);

  const dependentsValue = calculateDependents(dependents);

  const totalDiscount = dependentsValue + discount;

  const liquidSalary = grossSalary - (INNS.value + IRRF.value + totalDiscount);

  return {
    INNS,
    IRRF,
    totalDiscount,
    liquidSalary,
    grossSalary,
  };
};

export default calculateLiquidSalary;
