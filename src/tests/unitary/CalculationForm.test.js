import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import CalculationForm from '../../components/CalculationForm';

describe('CalculationForm', () => {
  const { getByTestId } = render(<CalculationForm />);
  describe('Gloss Salary input', () => {
    const input = getByTestId('gross-salary-input');
    const defaultValue = '0,00';
    it(`Should start with ${defaultValue}`, () => {
      expect(input.value).toBe(defaultValue);
    });
    it(`Shouldn't accept letters`, () => {
      const inputValues = ['m', 'te', 's', 'g'];
      inputValues.forEach((inputValue) => {
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(defaultValue);
      });
    });
    it('Should auto format the value', () => {
      const inputValues = ['0', '24', '3', '0'];
      const resultsValues = [defaultValue, '0,24', '2,43', '24,30'];
      inputValues.forEach((inputValue, index) => {
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(resultsValues[index]);
      });
    });
  });
  describe('Total Discount input', () => {
    const input = getByTestId('total-discount-input');
    const defaultValue = '0,00';
    it(`Should start with ${defaultValue}`, () => {
      expect(input.value).toBe(defaultValue);
    });
    it(`Shouldn't accept letters`, () => {
      const inputValues = ['m', 'te', 's', 'g'];
      inputValues.forEach((inputValue) => {
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(defaultValue);
      });
    });
    it('Should auto format the value', () => {
      const inputValues = ['0', '24', '3', '0'];
      const resultsValues = [defaultValue, '0,24', '2,43', '24,30'];
      inputValues.forEach((inputValue, index) => {
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(resultsValues[index]);
      });
    });
  });
});
