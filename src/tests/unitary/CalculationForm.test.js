import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import CalculationForm from '../../components/CalculationForm';

describe('CalculationForm', () => {
  const { getByTestId } = render(<CalculationForm />);
  describe('Gloss Salary input', () => {
    const input = getByTestId('gross-salary-input');
    const defaultValue = '0,00';
    beforeEach(() => fireEvent.change(input, { target: { value: '0' } }));
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
    beforeEach(() => fireEvent.change(input, { target: { value: '0' } }));
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
  describe('Dependents number', () => {
    const input = getByTestId('dependents-number-input');
    const addButton = getByTestId('dependents-number-add');
    const removeButton = getByTestId('dependents-number-remove');
    const defaultValue = '0';
    beforeEach(() =>
      fireEvent.change(input, { target: { value: defaultValue } })
    );
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
    it('Should add values directly through the input', () => {
      fireEvent.change(input, { target: { value: 10 } });
      expect(input.value).toBe('10');
    });
    it('Should add to 1 by clicking on the +', () => {
      fireEvent.click(addButton);
      expect(input.value).toBe('1');
    });
    it('Should remove 1 by clicking -', () => {
      fireEvent.click(addButton);
      expect(input.value).toBe('1');
      fireEvent.click(removeButton);
      expect(input.value).toBe(defaultValue);
    });
  });
});
