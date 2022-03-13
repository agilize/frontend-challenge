import React from 'react';

const CalcResult = () => {
  return (
    <div>
      <h2 data-testid='calc-result-title'>Seu salário líquido será</h2>
      <div>
        <span data-testid='calc-result-symbol'>R$</span>
        <span data-testid='calc-result-value'>0,00</span>
      </div>
    </div>
  );
};

export default CalcResult;
