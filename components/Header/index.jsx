import logo from '../../public/imagens/logo.png';

export default function Header() {
  return (
    <header className="header__container">
      <img src={logo.src} alt="Logo" className="logo"></img>

      <h1>Calculadora de salário líquido</h1>
    </header>
  );
}
