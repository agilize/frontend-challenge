import React from 'react'
import Logo from '../assets/logo.png'
import '../css/header.css'

function Header() {
  return (
    <div id="header">
      <img id="logo" src={Logo} alt="Logo" />
      <h2>Calculadora de salário Líquido</h2>
    </div>
    )
}

export default Header
