import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <object type='image/svg+xml' data={Logo}>
        Logo da Agilize
      </object>
      <h1>Calculadora de salário líquido</h1>
    </header>
  );
}

export default Header;
