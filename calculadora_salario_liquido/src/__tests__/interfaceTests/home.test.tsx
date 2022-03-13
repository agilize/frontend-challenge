import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../../pages/Home';

describe('Home page test', () => {
  describe('tests if core components have been rendered', () => {
    it('tests if have an h1', () => {
      render(<Home />);

      const title = screen.getByRole('heading', { level: 1 });

      expect(title).toBeInTheDocument();
    });

    it('tests if have 3 inputs of type text', () => {
      render(<Home />);

      const inputs = screen.getAllByRole('textbox');

      expect(inputs.length).toBe(3);
    });

    it('tests if salary input is focused on page load', () => {
      render(<Home />);

      const inputs = screen.getAllByRole('textbox');

      expect(inputs[0]).toHaveFocus();
    });

    it('tests if have a button with text "CALCULAR"', () => {
      render(<Home />);

      const buttons = screen.getAllByRole('button');

      expect(buttons.length).toBe(3);

      expect(buttons[2]).toHaveAttribute('name', 'CALCULAR');
    });

    it('tests if have a subtitle with text "Seu salário líquido será"', () => {
      render(<Home />);

      const subtitle = screen.getByRole('heading', {
        level: 2,
        name: 'Seu salário líquido será',
      });

      expect(subtitle).toBeInTheDocument();
    });

    it('tests if the result is not shown before clicking the button', () => {
      render(<Home />);

      const subtitle = screen.queryByRole('heading', {
        level: 3,
        name: 'Como o cálculo é feito?',
      });

      expect(subtitle).not.toBeInTheDocument();
    });
  });

  describe('tests user flow', () => {
    it('test the main flow', () => {
      render(<Home />);

      const inputs = screen.getAllByRole('textbox');
      const buttons = screen.getAllByRole('button');

      userEvent.type(inputs[0], '3000');

      userEvent.type(inputs[1], '200');

      userEvent.click(buttons[2]);

      const netSalary = screen.getByTestId('net-salary');
      expect(netSalary).toBeInTheDocument();

      const table = screen.getByRole('list');

      expect(table).toBeInTheDocument();
    });

    it('tests if the result component is not shown when the user does not type the salary', () => {
      render(<Home />);

      const buttons = screen.getAllByRole('button');

      userEvent.click(buttons[2]);

      const netSalary = screen.queryByTestId('net-salary');

      expect(netSalary).not.toBeInTheDocument();
    });

    it('tests if inputs are disabled after clicking the calculate button', () => {
      render(<Home />);

      const inputs = screen.getAllByRole('textbox');
      const buttons = screen.getAllByRole('button');

      userEvent.type(inputs[0], '3000');

      userEvent.click(buttons[2]);

      for (let index = 0; index < inputs.length - 1; index += 1) {
        expect(buttons[index]).toBeDisabled();
      }

      expect(buttons[2]).toHaveAttribute('name', 'LIMPAR');
    });
  });
});
