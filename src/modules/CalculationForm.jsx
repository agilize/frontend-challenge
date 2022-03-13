import React from 'react';
import { CalculateButton } from '../styles/CalculationForm';
import DependentsField from './fields/DependentsField';
import ValuesField from './fields/ValuesField';

function CalculationForm() {
  return (
    <form className='flex items-center m-10'>
      <ValuesField />
      <DependentsField />
      <CalculateButton type='button' data-testid='submit-button'>
        CALCULAR
      </CalculateButton>
    </form>
  );
}

export default CalculationForm;
