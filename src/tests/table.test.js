import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";

describe('Check table rendering before click calculate', () => {
  test('Checks that the td name is not rendered before the click', () => {
    render(<App />);
    
    const bruteSalaryTd = screen.queryByTestId('bruteSalary-td-name');
    expect(bruteSalaryTd).not.toBeInTheDocument();

    const inssTd = screen.queryByTestId('inss-td-name');
    expect(inssTd).not.toBeInTheDocument();

    const irrfTd = screen.queryByTestId('irrf-td-name');
    expect(irrfTd).not.toBeInTheDocument();

    const discountsTd = screen.queryByTestId('discounts-name');
    expect(discountsTd).not.toBeInTheDocument();

    const liquidSalaryTd = screen.queryByTestId('liquid-salary-name');
    expect(liquidSalaryTd).not.toBeInTheDocument();
  });

  test('Checks that the td value is not rendered before the click', () => {
    render(<App />);

    const bruteSalaryTdValue = screen.queryByTestId('bruteSalary-td-value');
    expect(bruteSalaryTdValue).not.toBeInTheDocument();

    const inssTdValue = screen.queryByTestId('inss-td-value');
    expect(inssTdValue).not.toBeInTheDocument();

    const irrfTdValue = screen.queryByTestId('irrf-td-value');
    expect(irrfTdValue).not.toBeInTheDocument();

    const discountsTdValue = screen.queryByTestId('discounts-value');
    expect(discountsTdValue).not.toBeInTheDocument();

    const liquidSalaryTdValue = screen.queryByTestId('liquid-salary-value');
    expect(liquidSalaryTdValue).not.toBeInTheDocument();
  });
});

describe('Check table rendering after click calculate', () => {
  test('checks if td name renders after click', () => {
    render(<App />);

    const calculateBtn = screen.getByRole('button', { name: "Calcular" });
    userEvent.click(calculateBtn);

    const bruteSalaryTd = screen.queryByTestId('bruteSalary-td-name');
    expect(bruteSalaryTd).toBeInTheDocument();

    const inssTd = screen.queryByTestId('inss-td-name');
    expect(inssTd).toBeInTheDocument();

    const irrfTd = screen.queryByTestId('irrf-td-name');
    expect(irrfTd).toBeInTheDocument();

    const discountsTd = screen.queryByTestId('discounts-name');
    expect(discountsTd).toBeInTheDocument();

    const liquidSalaryTd = screen.queryByTestId('liquid-salary-name');
    expect(liquidSalaryTd).toBeInTheDocument();
  });

  test('checks if td value renders after click', () => {
    render(<App />);

    const calculateBtn = screen.getByRole('button', { name: "Calcular" });
    userEvent.click(calculateBtn);

    const bruteSalaryTdValue = screen.queryByTestId('bruteSalary-td-value');
    expect(bruteSalaryTdValue).toBeInTheDocument();

    const inssTdValue = screen.queryByTestId('inss-td-value');
    expect(inssTdValue).toBeInTheDocument();

    const irrfTdValue = screen.queryByTestId('irrf-td-value');
    expect(irrfTdValue).toBeInTheDocument();

    const discountsTdValue = screen.queryByTestId('discounts-value');
    expect(discountsTdValue).toBeInTheDocument();

    const liquidSalaryTdValue = screen.queryByTestId('liquid-salary-value');
    expect(liquidSalaryTdValue).toBeInTheDocument();
  });
});

describe('Checks table removal by clicking "Limpar"', () => {
  test('removes td name by clicking "Limpar"', () => {
    render(<App />);
    const calculateBtn = screen.getByRole('button', { name: "Calcular" });
    userEvent.click(calculateBtn);

    const bruteSalaryTd = screen.queryByTestId('bruteSalary-td-name');
    expect(bruteSalaryTd).toBeInTheDocument();

    const inssTd = screen.queryByTestId('inss-td-name');
    expect(inssTd).toBeInTheDocument();

    const irrfTd = screen.queryByTestId('irrf-td-name');
    expect(irrfTd).toBeInTheDocument();

    const discountsTd = screen.queryByTestId('discounts-name');
    expect(discountsTd).toBeInTheDocument();

    const liquidSalaryTd = screen.queryByTestId('liquid-salary-name');
    expect(liquidSalaryTd).toBeInTheDocument();

    const clearBtn = screen.getByRole('button', { name: "Limpar" });
    userEvent.click(clearBtn);

    expect(bruteSalaryTd).not.toBeInTheDocument();

    expect(inssTd).not.toBeInTheDocument();

    expect(irrfTd).not.toBeInTheDocument();

    expect(liquidSalaryTd).not.toBeInTheDocument();
  });

  test('removes td value by clicking "Limpar"', () => {
    render(<App />);

    const calculateBtn = screen.getByRole('button', { name: "Calcular" });
    userEvent.click(calculateBtn);

    const bruteSalaryTdValue = screen.queryByTestId('bruteSalary-td-value');
    expect(bruteSalaryTdValue).toBeInTheDocument();

    const inssTdValue = screen.queryByTestId('inss-td-value');
    expect(inssTdValue).toBeInTheDocument();

    const irrfTdValue = screen.queryByTestId('irrf-td-value');
    expect(irrfTdValue).toBeInTheDocument();

    const discountsTdValue = screen.queryByTestId('discounts-value');
    expect(discountsTdValue).toBeInTheDocument();

    const liquidSalaryTdValue = screen.queryByTestId('liquid-salary-value');
    expect(liquidSalaryTdValue).toBeInTheDocument();

    const clearBtn = screen.getByRole('button', { name: "Limpar" });
    userEvent.click(clearBtn);

    expect(bruteSalaryTdValue).not.toBeInTheDocument();

    expect(inssTdValue).not.toBeInTheDocument();

    expect(irrfTdValue).not.toBeInTheDocument();

    expect(discountsTdValue).not.toBeInTheDocument();

    expect(liquidSalaryTdValue).not.toBeInTheDocument();
  });
});
