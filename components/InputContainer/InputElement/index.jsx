import retangulo from '../../../public/imagens/retangulo.svg';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

export default function InputElement(props) {

  const { question = 'Question?', description = 'description', handleChange } = props;

  return (
    <div className="input__main">
      <strong>{question}</strong>
      <div className="input__group">
        <p>R$</p>
        <img src={retangulo.src} alt="search" className="search__icon"></img>
        <input type="text" placeholder="0,00" onChange={handleChange} />
      </div>
      <div className="input__description">
        <AiOutlineQuestionCircle className="input__icon" />
        <p>{description}</p>
      </div>
    </div>
  );
}
