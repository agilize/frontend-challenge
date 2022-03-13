import React from 'react';
import { render } from '@testing-library/react';
import CalcResult from '../../modules/CalcResult';

describe('CalcResult', () => {
  it('Should render the correct message', () => {
    const { getByTestId } = render(<CalcResult />);
    const title = getByTestId('calc-result-title');
    expect(title.innerHTML).toEqual('Seu salário líquido será');
  });
  it('Should render the correct symbol', () => {
    const { getByTestId } = render(<CalcResult />);
    const symbol = getByTestId('calc-result-symbol');
    expect(symbol.innerHTML).toEqual('R$');
  });
  it('Should render the initial value', () => {
    const { getByTestId } = render(<CalcResult />);
    const value = getByTestId('calc-result-value');
    expect(value.innerHTML).toEqual('0,00');
  });
});
