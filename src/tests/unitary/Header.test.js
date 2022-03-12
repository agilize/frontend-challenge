import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  it('Should render the correct title', () => {
    const { getByTestId } = render(<Header />);
    const title = getByTestId('title');
    expect(title.innerHTML).toEqual('Calculadora de salário líquido');
  });
  it('Should render the logo', () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId('logo');
    expect(logo);
  });
});
