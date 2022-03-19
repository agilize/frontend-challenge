import { render, screen } from '@testing-library/react';
import App from "../App";

describe("Check if the page contains the main elements", () => {
  test("Checks if the main labels are in the document", () => {
    render(<App />);

    const bruteSalaryLabel = screen.getByLabelText("Qual seu salário bruto?");
    expect(bruteSalaryLabel).toBeInTheDocument();

    const totalDiscountsLabel = screen.getByLabelText("Total de descontos");
    expect(totalDiscountsLabel).toBeInTheDocument();

    const dependentsNumberLabel = screen.getByLabelText("Quantos dependentes você tem?");
    expect(dependentsNumberLabel).toBeInTheDocument();
  });

  test("Checks if the main inputs are in the document", () => {
    render(<App />);
    const bruteSalaryInput = screen.getByTestId("bruteSalary");
    expect(bruteSalaryInput).toBeInTheDocument();

    const totalDiscountsInput = screen.getByTestId("totalDiscounts");
    expect(totalDiscountsInput).toBeInTheDocument();

    const dependentsNumberInput = screen.getByTestId("dependentsNumber");
    expect(dependentsNumberInput).toBeInTheDocument();
  });

  test("Check if the main buttons are in the document", () => {
    render(<App />);

    const incrementButton = screen.getByTestId("btn-increment");
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = screen.getByTestId("btn-decrement");
    expect(decrementButton).toBeInTheDocument();

    const calculateBtn = screen.getByTestId('btn-calcular');
    expect(calculateBtn).toBeInTheDocument();

    const clearBtn = screen.queryByTestId('btn-limpar');
    expect(clearBtn).not.toBeInTheDocument();
  });
});

