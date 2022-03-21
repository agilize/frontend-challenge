import React, { useContext } from 'react';

import SalaryContext from '../../context/SalaryContext';

import './SalaryLiquidResult.css';

function SalaryLiquidResult() {
  const { salaryValues } = useContext(SalaryContext);

  return (
    !(Object.keys(salaryValues).length) ? null : (
      <div className="salary-inputs-result-wrap">
        <div className="liquid-salary-wrap">
          <h1>Seu salário líquido será</h1>
          <div className="liquid-salary-span-wrap">
            <span className="salary-prefix">R$</span>
            <span className="liquid-salary-span">{salaryValues.liquidSalary}</span>
          </div>
        </div>

        <div className="how-calculation-wrap">
          <span className="how-calculation-span">Como o cálculo é feito?</span>

          <div className="space-between">
            <span>Salário bruto</span>
            <span>{`R$ ${salaryValues.grossSalary}`}</span>
          </div>

          <div className="space-between">
            <span>{`INSS (${salaryValues.INNS.porcentage}%)`}</span>
            <span>{`-R$ ${salaryValues.INNS.value}`}</span>
          </div>

          <div className="space-between">
            <span>{`IRRF (${salaryValues.IRRF.porcentage}%)`}</span>
            <span>{`-R$ ${salaryValues.IRRF.value}`}</span>
          </div>

          <div className="space-between">
            <span>Outros descontos</span>
            <span>{`-R$ ${salaryValues.discount}`}</span>
          </div>

          <div className="bar" />

          <div className="space-between">
            <span>Salário líquido</span>
            <span>{`-R$ ${salaryValues.liquidSalary}`}</span>
          </div>
        </div>
      </div>
    )
  );
}

export default SalaryLiquidResult;
