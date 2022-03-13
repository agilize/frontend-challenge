import React from 'react';

function CalculationForm() {
  return (
    <form>
      <fieldset>
        <label>
          <p>Qual seu salário bruto?</p>
          <span>R$</span>
          <input type='text' data-testid='gross-salary-input' />
          <p>
            <span>?</span>Salário bruto sem descontos
          </p>
        </label>
        <label>
          <p>Total de descontos</p>
          <span>R$</span>
          <input type='text' data-testid='total-discount-input' />
          <p>
            <span>?</span>Pensão alimentícia, plano de saúde...
          </p>
        </label>
      </fieldset>
      <fieldset>
        <p>Quantos dependentes você tem?</p>
        <button type='button' data-testid='dependents-number-add'>
          +
        </button>
        <input type='text' data-testid='dependents-number-input' />
        <button type='button' data-testid='dependents-number-remove'>
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
