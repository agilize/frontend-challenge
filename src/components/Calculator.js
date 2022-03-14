import React, { useState } from 'react';
import CalculatorInputs from './Inputs';

function Calculator() {
  return (
    <div>
      <CalculatorInputs name="bruteSalary"/>
      <CalculatorInputs name="totalDiscounts"/>
      <CalculatorInputs name="dependentsNumber" />
      <button>Calcular</button>
    </div>
  )
};

export default Calculator;
