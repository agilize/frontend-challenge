import retangulo from '../../../public/imagens/retangulo.svg';
export default function InputElement() {
  return (
    <div className="input__group">
        <p>R$</p>
        <img src={retangulo.src} alt="search" className="search__icon"></img>
        <input type="text" placeholder="0,00" />
    </div>
  );
}
