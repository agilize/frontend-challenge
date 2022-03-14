import React from 'react';
import { render } from '@testing-library/react';
import { fireEvent, cleanup } from '@testing-library/react';
import App from '../../App';

const grossSalaries = [
  '1.000,00',
  '2.000,00',
  '3.000,00',
  '4.000,00',
  '5.000,00',
];

const discounts = ['100,00', '200,00', '300,00', '400,00', '500,00'];
const dependentes = ['1', '2', '3', '4', '5'];

beforeEach(() => {
  cleanup();
});

describe('Perform calculation correctly', () => {
  describe('Salary only', () => {
    const netSalaries = [
      '925,00',
      '1.838,18',
      '2.731,00',
      '3.603,82',
      '4.463,82',
    ];
    grossSalaries.forEach((salary, index) => {
      it(`Salary of R$${salary}`, () => {
        const { getByTestId } = render(<App />);
        const inputSalary = getByTestId('gross-salary-input');
        fireEvent.change(inputSalary, { target: { value: salary } });
        fireEvent.click(getByTestId('submit-button'));
        expect(getByTestId('calc-result-value').innerHTML).toEqual(
          netSalaries[index]
        );
      });
    });
  });
  describe('Salary and discounts', () => {
    const netSalaries = [
      '825,00',
      '1.638,18',
      '2.431,00',
      '3.203,82',
      '3.963,82',
    ];
    grossSalaries.forEach((salary, index) => {
      it(`Salary of R$${salary} and discount of R$${discounts[index]}`, () => {
        const { getByTestId } = render(<App />);
        const inputSalary = getByTestId('gross-salary-input');
        const inputDiscount = getByTestId('total-discount-input');
        fireEvent.change(inputSalary, { target: { value: salary } });
        fireEvent.change(inputDiscount, {
          target: { value: discounts[index] },
        });
        fireEvent.click(getByTestId('submit-button'));
        expect(getByTestId('calc-result-value').innerHTML).toEqual(
          netSalaries[index]
        );
      });
    });
  });
  describe('Salary, discounts and dependents', () => {
    const netSalaries = [
      '825,00',
      '1.638,18',
      '2.461,47',
      '3.203,82',
      '3.963,82',
    ];
    grossSalaries.forEach((salary, index) => {
      it(`Salary of R$${salary}, discount of R$${discounts[index]} and ${dependentes[index]} dependents`, () => {
        const { getByTestId } = render(<App />);
        const inputSalary = getByTestId('gross-salary-input');
        const inputDiscount = getByTestId('total-discount-input');
        const inputDependents = getByTestId('dependents-number-input');
        fireEvent.change(inputDiscount, {
          target: { value: discounts[index] },
        });
        fireEvent.change(inputDependents, {
          target: { value: dependentes[index] },
        });
        fireEvent.change(inputSalary, { target: { value: salary } });
        fireEvent.click(getByTestId('submit-button'));
        expect(getByTestId('calc-result-value').innerHTML).toEqual(
          netSalaries[index]
        );
      });
    });
  });
});
