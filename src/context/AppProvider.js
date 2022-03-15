import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [bruteSalary, setBruteSalary] = useState(0.00);
  const [totalDiscounts, setTotalDiscounts] = useState(0.00);
  const [dependentsNumber, setDependentsNumber] = useState(0.00);

  const calculateEarnings = {
    percentageInss: (bruteSalary) => {
      if(bruteSalary === "" || bruteSalary === 0) {
        return 0;
      }

      if (bruteSalary <= 1212) {
        return 7.5;
      }
      if (bruteSalary >= 1212.01 && bruteSalary <= 2427.35) {
        return 9;
      }
      if (bruteSalary >= 2427.36 && bruteSalary <= 3641.03) {
        return 12;
      }
      if (bruteSalary >= 3641.04) {
        return 14;
      }
    },
    
    percentageIrrf: (bruteSalary) => {
      if (bruteSalary <= 1903.98) {
        return { aliquot: 0, deductiblePortion: 0 }
      }
      if (bruteSalary >= 1903.99 && bruteSalary <= 2826.65) {
        return { aliquot: 7.5, deductiblePortion: 142.80 }
      }
      if (bruteSalary >= 2826.66 && bruteSalary <= 3751.05) {
        return { aliquot: 15, deductiblePortion: 354.80}
      }
      if (bruteSalary >= 3751.06 && bruteSalary <= 4664.68) {
        return { aliquot: 22.5, deductiblePortion: 636.13 }
      }
      if (bruteSalary > 4664.68) {
        return { aliquot: 27.5, deductiblePortion: 869.36 }
      }
    },

    calculateInss: (bruteSalary, percentage) => {
      return Number(bruteSalary * percentage / 100).toFixed(2)
    },

    calculateIrrf: (deduction, dependents = 0) => {
      const { bruteSalary, INSS, aliquot, deductiblePortion} = deduction;
      if (dependents === 0 || dependents === "") {
        return (
          (bruteSalary - INSS) * aliquot/100 - deductiblePortion
        ).toFixed(2)
      }

      if (dependents > 0) {
        return (
          (bruteSalary - (dependents * 189.59)) * aliquot/100 - deductiblePortion
        ).toFixed(2)
      }
    },

    calculateLiquidSalary: (deductions) => {
      const { bruteSalary, INSS, IRRF, totalDiscounts} = deductions;
      return (
        bruteSalary - INSS - IRRF - totalDiscounts
      ).toFixed(2);
    }
  }

  const contextValue = {
    bruteSalary,
    setBruteSalary,
    totalDiscounts,
    setTotalDiscounts,
    dependentsNumber,
    setDependentsNumber,
    calculateEarnings,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
