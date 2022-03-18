import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../App";
import AppContext from '../context/AppContext';

describe('Test the input change functions', () => {

  test('brute salary input and render td name/value', () => {
    const content = {
      setBruteSalary: jest.fn(),
    }
    render(
      <AppContext.Provider value={content}>
        <App />
      </AppContext.Provider>
    )

    const bruteSalaryInput = screen.getByTestId('bruteSalary');
    const calculateBtn = screen.getByTestId('btn-calcular');

    fireEvent.change(bruteSalaryInput, { target: { value: 2500 } });
    content.setBruteSalary();
    userEvent.click(calculateBtn)

    expect(content.setBruteSalary).toHaveBeenCalled();

    const bruteSalaryTdValue = screen.getByText('R$ 2500');

    expect(bruteSalaryTdValue).toBeInTheDocument();
  });

  test('total discount input and render td name/value', () => {
    const content = {
      setTotalDiscounts: jest.fn(),
    }
    render(
      <AppContext.Provider value={content}>
        <App />
      </AppContext.Provider>
    )

    const totalDiscountsInput = screen.getByTestId('totalDiscounts');
    const calculateBtn = screen.getByTestId('btn-calcular');

    fireEvent.change(totalDiscountsInput, { target: { value: 150 } });
    content.setTotalDiscounts();
    userEvent.click(calculateBtn);

    expect(content.setTotalDiscounts).toHaveBeenCalled();

    const discountsTdValue = screen.getByText('-R$ 150');

    expect(discountsTdValue).toBeInTheDocument();
  });

  test('dependents input and render td name/value', () => {
    const content = {
      setDependentsNumber: jest.fn(),
    }
    render(
      <AppContext.Provider value={content}>
        <App />
      </AppContext.Provider>
    )

    const dependentsInput = screen.getByTestId('dependentsNumber');
    const calculateBtn = screen.getByTestId('btn-calcular');

    fireEvent.change(dependentsInput, { target: { value: 2 } });
    content.setDependentsNumber();
    userEvent.click(calculateBtn);

    expect(content.setDependentsNumber).toHaveBeenCalled();

    expect(dependentsInput.value).toMatch(/2/);
  });

  test('decrement button', () => {
    const content = {
      setDependentsNumber: jest.fn(),
    }
    render(
      <AppContext.Provider value={content}>
        <App />
      </AppContext.Provider>
    )

    const dependentsInput = screen.getByTestId('dependentsNumber');
    const calculateBtn = screen.getByTestId('btn-calcular');

    fireEvent.change(dependentsInput, { target: { value: 2 } });
    content.setDependentsNumber();
    userEvent.click(calculateBtn)

    expect(content.setDependentsNumber).toHaveBeenCalled();

    expect(dependentsInput.value).toMatch(/2/);

    const decrementBtn = screen.getByTestId('btn-decrement');
    userEvent.click(decrementBtn);

    expect(dependentsInput.value).toMatch(/1/);
  });

  test('Increment button', () => {
    const content = {
      setDependentsNumber: jest.fn(),
    }
    render(
      <AppContext.Provider value={content}>
        <App />
      </AppContext.Provider>
    )

    const dependentsInput = screen.getByTestId('dependentsNumber');
    const calculateBtn = screen.getByTestId('btn-calcular');

    fireEvent.change(dependentsInput, { target: { value: 2 } });
    content.setDependentsNumber();
    userEvent.click(calculateBtn)

    expect(content.setDependentsNumber).toHaveBeenCalled();

    expect(dependentsInput.value).toMatch(/2/);

    const incrementBTn = screen.getByTestId('btn-increment');
    userEvent.click(incrementBTn);

    expect(dependentsInput.value).toMatch(/3/);
  });
});
