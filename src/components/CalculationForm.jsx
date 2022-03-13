import React, { useState } from 'react';
import CurrencyInput from './CurrencyInput';

function CalculationForm() {
  const [dependentsNumb, updateDependentsNumb] = useState(0);
  const updateDependents = (value) => {
    const number = parseInt(value);
    if (Number.isNaN(number)) {
      updateDependentsNumb(0);
    } else {
      updateDependentsNumb(parseInt(value));
    }
  };
  const addDependent = () => updateDependentsNumb(dependentsNumb + 1);
  const removeDependent = () => {
    if (dependentsNumb >= 1) updateDependentsNumb(dependentsNumb - 1);
  };

  return (
    <form>
      <fieldset>
        <label>
          <p>Qual seu salário bruto?</p>
          <span>R$</span>
          <CurrencyInput testId='gross-salary-input' />
          <p>
            <span>?</span>Salário bruto sem descontos
          </p>
        </label>
        <label>
          <p>Total de descontos</p>
          <span>R$</span>
          <CurrencyInput testId='total-discount-input' />
          <p>
            <span>?</span>Pensão alimentícia, plano de saúde...
          </p>
        </label>
      </fieldset>
      <fieldset>
        <p>Quantos dependentes você tem?</p>
        <button
          type='button'
          data-testid='dependents-number-add'
          onClick={() => addDependent()}
        >
          +
        </button>
        <input
          type='text'
          data-testid='dependents-number-input'
          value={dependentsNumb}
          onChange={({ target }) => updateDependents(target.value)}
        />
        <button
          type='button'
          data-testid='dependents-number-remove'
          onClick={() => removeDependent()}
        >
          -
        </button>
        <p>
          <span>?</span>Dependentes declarados no Imposto de Renda
        </p>
      </fieldset>
      <button type='submit' data-testid='submit-button'>
        CALCULAR
      </button>
    </form>
  );
}

export default CalculationForm;
