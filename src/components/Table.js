import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import calculateEarnings from '../helpers/CalculateEarning';

function Table() {
  const { 
    bruteSalary,
    totalDiscounts,
    dependentsNumber,
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

  return (
    <table>
      <tbody>
        <tr>
          <td data-testid="bruteSalary-td-name">Salário bruto</td>
          <td data-testid="bruteSalary-td-value">R$ {bruteSalary}</td>
        </tr>
        <tr>
          <td data-testid="inss-td-name">INSS{`(${inssPercentage}%)`}</td>
          <td data-testid="inss-td-value">-R$ {INSS}</td>
        </tr>
        <tr>
          <td data-testid="irrf-td-name">IRRF{`(${aliquot}%)`}</td>
          <td data-testid="irrf-td-value">-R$ {IRRF}</td>
        </tr>
        <tr>
          <td data-testid="discounts-name">Outros descontos</td>
          <td data-testid="discounts-value">-R$ {totalDiscounts}</td>
        </tr>
        <tr>
          <td data-testid="liquid-salary-name">Salário Líquido</td>
          <td data-testid="liquid-salary-value">-R$ {liquidSalary}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;