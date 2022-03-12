import React from 'react';
import Logo from '../images/logo.svg';

function Header() {
  return (
    <header className='flex flex-col'>
      <object
        height='50px'
        className='m-10'
        type='image/svg+xml'
        data={Logo}
        data-testid='logo'
      >
        Logo da Agilize
      </object>
      <h1 className='font-semibold text-4xl' data-testid='title'>
        Calculadora de salário líquido
      </h1>
    </header>
  );
}

export default Header;
