import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import CalculationForm from '../../components/CalculationForm';

describe('CalculationForm', () => {
  const { getByTestId } = render(<CalculationForm />);
  describe('Gloss Salary input', () => {
    const input = getByTestId('gross-salary-input');
    it('Should start with 0,00', () => {
      expect(input.value).toBe('0,00');
    });
    it('Should auto format the value', () => {
      const inputValues = ['0', '24', '3', '0'];
      const resultsValues = ['0,00', '0,24', '2,43', '24,30'];
      inputValues.forEach((inputValue, index) => {
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(resultsValues[index]);
      });
    });
  });
});
