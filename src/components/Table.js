import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { 
    calculateEarnings,
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
          <td>Salário bruto</td>
          <td>R$ {bruteSalary}</td>
        </tr>
        <tr>
          <td>INSS{`(${inssPercentage}%)`}</td>
          <td>-R$ {INSS}</td>
        </tr>
        <tr>
          <td>IRRF{`(${aliquot}%)`}</td>
          <td>-R$ {IRRF}</td>
        </tr>
        <tr>
          <td>Outros descontos</td>
          <td>-R$ {totalDiscounts}</td>
        </tr>
        <tr>
          <td>Salário Líquido</td>
          <td>-R$ {liquidSalary}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;