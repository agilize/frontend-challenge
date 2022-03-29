import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';

function Header() {
  return(
    <header>
      <div className='logo'>
        <img src={logo} />
      </div>
      <h1 className='main-title'>Calculadora de sálario liquido</h1>
    </header>
  ); 
}

export default Header;
