import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import CalculatorInputs from './Inputs';

function Calculator() {
  const [renderTable, setRenderTable] = useState(false);
  const { 
    calculateEarnings,
    bruteSalary,
    totalDiscounts,
    dependentsNumber,
    setBruteSalary,
    setTotalDiscounts,
    setDependentsNumber
  } = useContext(AppContext);
  
  const inssPercentage = calculateEarnings.percentageInss(bruteSalary);

  const INSS = calculateEarnings.calculateInss(bruteSalary, inssPercentage);

  const { aliquot, deductiblePortion } = calculateEarnings.percentageIrrf(bruteSalary);

  const IRRF = calculateEarnings.calculateIrrf({
    bruteSalary,
    INSS,
    aliquot,
    deductiblePortion
  }, dependentsNumber);

  const liquidSalary = calculateEarnings.calculateLiquidSalary({
    bruteSalary,
    INSS,
    IRRF,
    totalDiscounts,
  });

  function clearInputValues() {
    setBruteSalary(0.00);
    setTotalDiscounts(0.00);
    setDependentsNumber(0.00);
    setRenderTable(false);
  }

  return (
    <div>
      <CalculatorInputs name="bruteSalary"/>
      <CalculatorInputs name="totalDiscounts"/>
      <CalculatorInputs name="dependentsNumber" />
      <button onClick={() => setRenderTable(true) }>Calcular</button>
      <button onClick={ clearInputValues }>Limpar</button>
    </div>
  )
};

export default Calculator;
