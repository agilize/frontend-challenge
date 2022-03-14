import React, { useContext } from 'react';
import Context from '../context';
import { convertToReal } from '../utils';

const CalcResult = () => {
  const { netSalary } = useContext(Context);
  const convertedSalary = convertToReal(`${netSalary}`);
  return (
    <div>
      <h2 data-testid='calc-result-title'>Seu salário líquido será</h2>
      <div>
        <span data-testid='calc-result-symbol'>R$</span>
        <span data-testid='calc-result-value'>{convertedSalary}</span>
      </div>
    </div>
  );
};

export default CalcResult;
